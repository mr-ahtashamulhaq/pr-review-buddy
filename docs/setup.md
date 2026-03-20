# Setup Guide — PR Review Buddy

> This guide explains how to install PR Review Buddy into your own GitLab project.

---

## Prerequisites

Before you begin, make sure you have:

- A **GitLab.com** account (or a self-managed GitLab instance running GitLab 17.x+)
- **GitLab Duo Pro or Ultimate** subscription (required for Custom Agents and Flows)
- **Maintainer** or **Owner** role on the project where you want to install the agent
- Access to **GitLab Duo Custom Agents** (check under Settings → Duo AI)

---

## Step 1: Fork or Clone This Repository

```bash
# Clone to your local machine
git clone https://gitlab.com/mr-ahtashamulhaq/pr-review-buddy.git
cd pr-review-buddy
```

Or click **"Fork"** on the GitLab UI to get your own copy of this project.

---

## Step 2: Create the Custom Agent

1. Navigate to your GitLab project
2. Go to **Settings → Duo AI → Custom Agents**
3. Click **"New Agent"**
4. Fill in the following:

| Field | Value |
|---|---|
| **Name** | `pr-review-buddy` |
| **Description** | AI-powered MR code reviewer using Claude |
| **System Prompt** | Paste the contents of [`agent/system_prompt.md`](../agent/system_prompt.md) |
| **Model** | Claude 3.5 Sonnet (or latest available Claude) |
| **Temperature** | `0.2` |
| **Max Tokens** | `8192` |

5. Enable these **tools** for the agent:
   - `read_merge_request`
   - `list_changed_files`
   - `read_file`
   - `post_inline_comment`
   - `post_merge_request_comment`

6. Click **"Save Agent"**
7. Note the **Agent ID** displayed — you'll need it in Step 4

---

## Step 3: Create the Custom Flow

1. Go to **Settings → Duo AI → Custom Flows**
2. Click **"New Flow"**
3. Configure:

| Field | Value |
|---|---|
| **Name** | `mr-review-flow` |
| **Trigger Events** | `merge_request:opened`, `merge_request:push` |
| **Agent** | `pr-review-buddy` |

4. Upload (or paste) the contents of [`flow/mr_review_flow.yml`](../flow/mr_review_flow.yml)

5. Verify these context mappings are present:
   - `mr_title` → `merge_request.title`
   - `mr_description` → `merge_request.description`
   - `diff` → `merge_request.diff`
   - `changed_files` → `merge_request.changed_files`
   - `project_id` → `project.id`
   - `mr_iid` → `merge_request.iid`

6. Click **"Save Flow"**

---

## Step 4: Configure Permissions

Ensure the agent has the required project permissions:

1. Go to **Settings → Duo AI → Agents → pr-review-buddy → Permissions**
2. Enable:
   - ✅ `read_repository`
   - ✅ `read_merge_requests`
   - ✅ `write_merge_requests`

---

## Step 5: Create Required Labels (Optional but recommended)

The agent automatically applies labels after reviewing. Create these in your project:

1. Go to **Issues → Labels → New Label**
2. Create:
   - `ai-reviewed` — Color: `#1aaa55` (green)
   - `ai-review-failed` — Color: `#fc9403` (orange)
   - `skip-ai-review` — Color: `#6699cc` (blue)

---

## Step 6: Test the Installation

1. **Create a test branch:**
   ```bash
   git checkout -b test/ai-review-check
   ```

2. **Add or modify a file** with intentional issues (or any code change):
   ```python
   # test_code.py — intentional issues for testing
   password = "admin123"           # hardcoded secret
   
   def fetch(url):
       import requests
       r = requests.get(url)
       return r.json()             # no status check
   ```

3. **Push and open an MR:**
   ```bash
   git add test_code.py
   git commit -m "test: ai review agent validation"
   git push origin test/ai-review-check
   ```

4. Open a Merge Request from `test/ai-review-check` → `main`

5. **Wait 1–2 minutes** and check that:
   - Inline comments appear on the diff
   - A summary comment appears in the MR discussion
   - The `ai-reviewed` label was added

---

## Customizing Review Behavior

### Skip reviews for specific MRs
Add the `skip-ai-review` label to any MR before it's opened, or add it after — the agent won't re-run if already labeled.

### Skip draft MRs
By default, draft MRs are skipped (`skip_draft: true` in the flow config). To review drafts, set `skip_draft: false` in `flow/mr_review_flow.yml`.

### Change which branches are reviewed
Edit `filters.target_branches` in `flow/mr_review_flow.yml`:
```yaml
filters:
  target_branches:
    - main
    - develop
    - production
```

### Disable specific review categories
Edit `.gitlab/AGENTS.md` and uncomment the `disabled_categories` section.

### Use a different Claude model
Edit `agent/agent_config.yml` and change `model.name`:
```yaml
model:
  name: claude-3-opus    # or claude-3-haiku for faster/cheaper reviews
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Agent doesn't trigger | Check that the flow is enabled and the trigger events match |
| No comments posted | Verify `write_merge_requests` permission is enabled |
| "Agent not found" error | Ensure the agent name in `agent_config.yml` matches exactly |
| Review takes too long | Increase `timeout_seconds` in the flow config |
| Too many/few comments | Adjust `max_inline_comments` in `agent_config.yml` |
| Draft MRs not reviewed | Set `skip_draft: false` in `mr_review_flow.yml` |

---

## Support

- Open an issue at: https://gitlab.com/mr-ahtashamulhaq/pr-review-buddy/-/issues
- GitLab Duo Docs: https://docs.gitlab.com/ee/user/gitlab_duo/
- Discord: https://discord.com/invite/gitlab
