# PR Review Buddy

An AI-powered code review agent that analyzes pull/merge requests instantly and delivers structured, line-level feedback within seconds.

Built during **LovHack Season 2** to eliminate review delays and improve code quality using automated intelligence.

---

## Live Demo

* Dashboard: [https://pr-review-buddy.vercel.app](https://pr-review-buddy.vercel.app)
* Repository: [https://gitlab.com/gitlab-ai-hackathon/participants/35507182](https://github.com/mr-ahtashamulhaq/pr-review-buddy)

---

## Problem

Code review slows down development more than most teams admit.

Developers wait hours or days for feedback. Reviewers are overloaded and often miss critical issues under time pressure. Security flaws, edge cases, and poor error handling slip through. Junior developers get blocked without guidance.

The result:

* Slower iteration cycles
* Inconsistent code quality
* Preventable bugs reaching production

---

## Solution

PR Review Buddy runs automatically the moment a merge request is opened.

It reads the code changes, analyzes them using an AI model, and posts precise inline feedback directly on the diff. The feedback covers bugs, security risks, performance concerns, and code clarity.

What this really means is:
developers get actionable review feedback in seconds instead of waiting on human availability.

---

## Key Features

* **Automatic Trigger**
  Runs on every merge request without manual input

* **Line-Level Feedback**
  Comments are attached to exact lines, not generic summaries

* **Security Analysis**
  Detects hardcoded secrets, injection risks, and missing validation

* **Bug Detection**
  Flags logical errors and risky patterns

* **Error Handling Checks**
  Identifies missing try/catch and failure paths

* **Performance Insights**
  Highlights inefficient code patterns

* **Summary Recommendation**
  Provides an overall review verdict

---

## How It Works

Developer opens a Merge Request
↓
Event trigger activates the review flow
↓
AI agent reads the code diff
↓
Model analyzes changes for issues and improvements
↓
Inline comments are posted on specific lines
↓
A summary review is added to the request

---

## Tech Stack

* GitLab Duo Agent Platform — custom agent and event-driven workflows
* Anthropic Claude — code analysis and reasoning
* React + Tailwind CSS + Vite — frontend dashboard
* GitLab CI/CD — trigger-based automation

---

## Use Cases

* Teams that want faster review cycles
* Startups with limited engineering bandwidth
* Junior developers who need immediate guidance
* Projects where security and reliability matter

---

## Why This Matters

Code review is a human bottleneck in an otherwise automated pipeline.

PR Review Buddy shifts review from:

* delayed → instant
* inconsistent → structured
* manual → automated

It does not replace human reviewers. It makes them faster and more effective by handling the first pass automatically.

---

## What Was Built During LovHack

During the hackathon, the system was implemented end-to-end as a working prototype:

* Event-driven review pipeline
* AI-powered analysis flow
* Inline commenting system
* Functional frontend dashboard

The result is a fully working product that demonstrates real-world usability.

---

## Future Improvements

* Multi-platform support (GitHub, Bitbucket)
* Custom review rules per team
* Learning from past review patterns
* Deeper security scanning integrations

---

## Team

| Name | Role | LinkedIn |
|------|------|----------|
| Ahtasham Ul Haq | AI/LLM, Agent Logic, Frontend | [linkedin.com/in/mr-ahtasham-ul-haq](https://www.linkedin.com/in/mr-ahtasham-ul-haq/) |
| Agrika Gupta | Backend, GitLab Setup | [linkedin.com/in/agrika-gupta](https://www.linkedin.com/in/agrika-gupta/) |
| Sejuti Dhali | Demo & Presentation | [linkedin.com/in/dhali-sejuti](https://www.linkedin.com/in/dhali-sejuti/) |

---

## License

MIT
