# PR Review Buddy 🤖

> **GitLab AI Hackathon 2026** — A GitLab Duo Custom Agent that automatically reviews Merge Requests using Claude AI, catching bugs, security issues, and performance problems before they hit production.

[![GitLab](https://img.shields.io/badge/GitLab-Duo%20Agent-orange?logo=gitlab)](https://gitlab.com/mr-ahtashamulhaq/pr-review-buddy)
[![Powered by Claude](https://img.shields.io/badge/LLM-Claude%203.5%20Sonnet-blueviolet?logo=anthropic)](https://anthropic.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Hackathon](https://img.shields.io/badge/GitLab%20AI%20Hackathon-2026-red)](https://about.gitlab.com/gitlab-duo-ai-hackathon)

---

## 🚀 What It Does

**PR Review Buddy** is an AI agent that lives inside GitLab and acts as your tireless senior engineer — automatically reviewing every Merge Request the moment it's opened.

When a developer opens or updates an MR, the agent:

1. **Reads the full diff** of all changed files
2. **Analyzes the code** with Claude AI for:
   - 🔴 **Security vulnerabilities** (injection, hardcoded secrets, broken auth)
   - 🟠 **Bugs** (logic errors, null dereferences, race conditions)
   - 🟡 **Missing error handling** (unhandled exceptions, missing try/catch)
   - 🔵 **Performance issues** (N+1 queries, blocking I/O, missing pagination)
   - ⚪ **Code quality** (duplication, magic numbers, naming)
3. **Posts inline comments** directly on the diff — exactly like a human reviewer
4. **Posts a summary comment** with overall recommendation: ✅ Approve / ⚠️ Approve with Comments / 🚫 Request Changes

No manual steps. No waiting. Automatic, every time.

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        GitLab Platform                           │
│                                                                  │
│   Developer opens/updates MR                                     │
│          │                                                       │
│          ▼                                                       │
│   ┌─────────────────┐                                           │
│   │  Custom Flow    │  flow/mr_review_flow.yml                  │
│   │  (mr-review-   │  Triggers on: merge_request:opened        │
│   │   flow)         │               merge_request:push          │
│   └────────┬────────┘                                           │
│            │  Passes: diff, title, description,                 │
│            │          changed_files, project_id, mr_iid         │
│            ▼                                                     │
│   ┌─────────────────┐                                           │
│   │  Custom Agent   │  agent/agent_config.yml                   │
│   │  (pr-review-   │                                            │
│   │   buddy)        │                                            │
│   └────────┬────────┘                                           │
│            │                                                     │
│            ├─── Tool: read_merge_request                        │
│            ├─── Tool: list_changed_files                        │
│            ├─── Tool: read_file                                  │
│            │                                                     │
│            ▼                                                     │
│   ┌─────────────────┐     ┌──────────────────────────┐          │
│   │  GitLab Duo     │────▶│   Claude 3.5 Sonnet      │          │
│   │  AI Gateway     │◀────│   (Anthropic)             │          │
│   └─────────────────┘     └──────────────────────────┘          │
│            │                                                     │
│            ├─── Tool: post_inline_comment (per issue)           │
│            └─── Tool: post_merge_request_comment (summary)      │
│                                                                  │
│   Result: Inline diff comments + MR summary label               │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
pr-review-buddy/
├── agent/
│   ├── system_prompt.md      # Claude's detailed review instructions
│   └── agent_config.yml      # GitLab Custom Agent definition + tools
├── flow/
│   └── mr_review_flow.yml    # GitLab Custom Flow (triggers + context)
├── .gitlab/
│   └── AGENTS.md             # Project-level agent behavior customization
├── frontend/
│   └── src/                  # (Future) Dashboard UI for review analytics
├── docs/
│   └── setup.md              # Setup guide for judges and end users
├── README.md                 # This file
└── LICENSE                   # MIT License
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| AI Agent Platform | GitLab Duo Custom Agents |
| Orchestration | GitLab Duo Custom Flows |
| LLM | Claude 3.5 Sonnet (via GitLab Duo AI Gateway) |
| Trigger Events | `merge_request:opened`, `merge_request:push` |
| Tools Used | `read_merge_request`, `list_changed_files`, `read_file`, `post_inline_comment`, `post_merge_request_comment` |
| Config Format | YAML + Markdown |

---

## 👥 Team

| Name | Role |
|---|---|
| **Ahtasham Ul Haq** | AI Integration Lead — Claude prompt engineering, agent configuration, system design, frontend |
| **Agrika** | Backend & GitLab Platform Lead — GitLab account setup, Custom Agent/Flow creation, MR trigger config, end-to-end testing |

---

## ✅ Agrika's Tasks — Step-by-Step Checklist

> Hey Agrika! 👋 Here's everything you need to do on the GitLab side to bring this project to life. Work through these in order.

### Phase 1: Account & Access Setup

- [ ] **1. Create a GitLab account** at [gitlab.com](https://gitlab.com) (if you don't already have one)
- [ ] **2. Request hackathon group access** by filling out the form: [https://forms.gle/EeCH2WWUewK3eGmVA](https://forms.gle/EeCH2WWUewK3eGmVA)
  - This gives you access to the GitLab AI Hackathon group where submissions happen
- [ ] **3. Join the hackathon Discord** for announcements and help: [https://discord.com/invite/gitlab](https://discord.com/invite/gitlab)
  - Introduce yourself in the hackathon channel!

### Phase 2: Read the Docs

- [ ] **4. Read the Custom Agents docs:**
  [https://docs.gitlab.com/ee/user/gitlab_duo/custom_agents/](https://docs.gitlab.com/ee/user/gitlab_duo/custom_agents/)
- [ ] **5. Read the Custom Flows docs:**
  [https://docs.gitlab.com/ee/user/gitlab_duo/custom_flows/](https://docs.gitlab.com/ee/user/gitlab_duo/custom_flows/)
  - These are short reads (~10 min each) and will make the following steps much clearer

### Phase 3: GitLab Project Setup

- [ ] **6. Get access to this repo** — ask Ahtasham to add you as a Maintainer on:
  `https://gitlab.com/mr-ahtashamulhaq/pr-review-buddy`

- [ ] **7. Clone the repo locally:**
  ```bash
  git clone https://gitlab.com/mr-ahtashamulhaq/pr-review-buddy.git
  cd pr-review-buddy
  ```

### Phase 4: Create the Custom Agent

- [ ] **8. Navigate to** your GitLab project → **Settings → Duo AI → Custom Agents**
- [ ] **9. Click "New Agent"** and fill in:
  - **Name:** `pr-review-buddy`
  - **Description:** `AI-powered MR code reviewer using Claude`
  - **System Prompt:** Copy-paste the contents of `agent/system_prompt.md`
  - **Model:** Select Claude 3.5 Sonnet (or the available Claude model)
- [ ] **10. Add the following tools** to the agent (enable each one):
  - `read_merge_request`
  - `list_changed_files`
  - `read_file`
  - `post_inline_comment`
  - `post_merge_request_comment`
- [ ] **11. Save the agent** and note the **Agent ID** shown in the URL or settings page
- [ ] **12. Update `agent/agent_config.yml`** — fill in the `agent_id` field with the value from step 11

### Phase 5: Create the Custom Flow

- [ ] **13. Navigate to** your GitLab project → **Settings → Duo AI → Custom Flows**
- [ ] **14. Click "New Flow"** and configure:
  - **Name:** `mr-review-flow`
  - **Trigger Events:** Select `merge_request:opened` AND `merge_request:push`
  - **Agent:** Select `pr-review-buddy` (the one you just created)
  - **Upload or paste** the contents of `flow/mr_review_flow.yml`
- [ ] **15. Save the flow** and note the **Flow ID**

### Phase 6: Configure Context & Permissions

- [ ] **16. In the flow settings**, verify these context variables are mapped:
  - `mr_title` → `merge_request.title`
  - `diff` → `merge_request.diff`
  - `changed_files` → `merge_request.changed_files`
  - `project_id` → `project.id`
  - `mr_iid` → `merge_request.iid`
- [ ] **17. Ensure the agent has these project permissions:**
  - `read_repository`
  - `read_merge_requests`
  - `write_merge_requests` (for posting comments)

### Phase 7: End-to-End Test

- [ ] **18. Create a test branch called `bad-code-test`:**
  ```bash
  git checkout -b bad-code-test
  ```
- [ ] **19. Add intentionally bad code** to test the agent. Create `test/bad_example.py`:
  ```python
  import sqlite3

  def get_user(username):
      # BAD: SQL injection vulnerability
      conn = sqlite3.connect("users.db")
      cursor = conn.cursor()
      query = "SELECT * FROM users WHERE username = '" + username + "'"
      cursor.execute(query)
      return cursor.fetchone()
      # BAD: No error handling, no conn.close()

  # BAD: Hardcoded API key
  API_KEY = "sk-prod-12345abcde"

  def fetch_data(url):
      import requests
      response = requests.get(url)
      # BAD: No status check, no error handling
      return response.json()
  ```
- [ ] **20. Commit and push the test branch:**
  ```bash
  git add test/bad_example.py
  git commit -m "test: add intentionally vulnerable code to test AI reviewer"
  git push origin bad-code-test
  ```
- [ ] **21. Open a Merge Request** from `bad-code-test` → `main` on GitLab
- [ ] **22. Wait 1–2 minutes** and verify that PR Review Buddy:
  - ✅ Posted inline comments on the SQL injection issue
  - ✅ Posted inline comments on the hardcoded API key
  - ✅ Posted inline comments on missing error handling
  - ✅ Posted a summary comment with recommendation "🚫 REQUEST CHANGES"
  - ✅ Added the `ai-reviewed` label to the MR

### Phase 8: Final Config Update & Submission MR

- [ ] **23. Update the config files** with the real IDs:
  - In `agent/agent_config.yml`: Add `agent_id: <your-agent-id>`
  - In `flow/mr_review_flow.yml`: Add `flow_id: <your-flow-id>`
  - Add your GitLab `project_id` to the README's "Project Info" section
- [ ] **24. Commit and push the final config:**
  ```bash
  git add .
  git commit -m "config: add real agent ID, flow ID, and project ID"
  git push origin bad-code-test
  ```
- [ ] **25. The submission MR is already open** from `bad-code-test` → `main` — this doubles as our hackathon demo! Make sure it's clean and ready for judges.

---

> 🙌 **That's it!** Once you've completed these steps, the agent is live and reviewing every MR in the project automatically. Let Ahtasham know when done so he can take a screenshot of the review output for the submission.

---

## 🧪 How to Test

1. Create a branch with intentionally bad code (see Agrika's Task #19 above)
2. Open a Merge Request targeting `main`
3. Wait ~1-2 minutes for the agent to trigger
4. Verify inline comments appear on the diff
5. Check the MR description area for the summary comment

---

## 📚 Resources

- [GitLab Duo Custom Agents Docs](https://docs.gitlab.com/ee/user/gitlab_duo/custom_agents/)
- [GitLab Duo Custom Flows Docs](https://docs.gitlab.com/ee/user/gitlab_duo/custom_flows/)
- [Hackathon Registration Form](https://forms.gle/EeCH2WWUewK3eGmVA)
- [Discord Community](https://discord.com/invite/gitlab)
- [Anthropic Claude Docs](https://docs.anthropic.com)

---

## 📄 License

MIT — see [LICENSE](LICENSE)
