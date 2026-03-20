# 🤖 PR Review Buddy — Agent Behavior Customization

This file configures how the **PR Review Buddy** AI agent behaves within this
GitLab project. It is read by the GitLab Duo Agent Platform at runtime.

Docs: https://docs.gitlab.com/ee/user/gitlab_duo/custom_agents/agents_md.html

---

## Agent Identity

| Property | Value |
|---|---|
| Agent Name | `pr-review-buddy` |
| Powered By | Claude (via GitLab Duo AI Gateway) |
| Trigger | Merge Request opened / updated |
| Output | Inline diff comments + MR summary |

---

## Review Scope

The agent will review **all changed files** in a Merge Request, with the
following **exceptions** (auto-skipped):

- `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml` (dependency lockfiles)
- `*.min.js`, `*.min.css` (minified assets)
- `migrations/` directory (auto-generated database migrations)
- `vendor/`, `node_modules/` (vendored third-party code)
- Files listed in `.gitignore`
- Files with only whitespace or comment changes

---

## Severity Levels

| Level | Emoji | Description | Action Required |
|---|---|---|---|
| CRITICAL | 🔴 | Security vulnerability, data exposure risk | Must fix before merge |
| HIGH | 🟠 | Bug that will cause functional failure | Should fix before merge |
| MEDIUM | 🟡 | Missing error handling, performance issue | Consider fixing |
| LOW | 🔵 | Code quality, style, minor improvements | Optional |

---

## Reviewer Behavior Rules

1. **Max 20 inline comments** per MR to avoid overwhelming the author
2. **Always provide a code fix** — no criticism without a solution
3. **Skip draft/WIP MRs** (`skip_draft: true` in flow config)
4. **Skip `skip-ai-review` labeled MRs** — respect human override
5. **Post only on changed lines** — do not comment on unchanged context lines
6. The agent will **add the `ai-reviewed` label** after completing a review
7. The agent will **not approve or merge** MRs — it is advisory only

---

## Customizing for Your Project

To disable a specific review category for this project, add it to the
`disabled_categories` list below:

```yaml
# Uncomment and edit to customize:
# disabled_categories:
#   - Code Quality   # Disable style/quality comments
#   - Performance    # Disable performance analysis
```

To add project-specific rules (e.g., "always check for our custom auth
middleware"), edit the `system_prompt.md` in `/agent/`.

---

## Contact

For issues with the agent, contact the AI team:
- **Ahtasham Ul Haq** — AI / Claude integration
- **Agrika** — GitLab platform / flow setup

Repository: https://gitlab.com/mr-ahtashamulhaq/pr-review-buddy
