# Frontend — PR Review Buddy Dashboard

This directory will contain the frontend dashboard for PR Review Buddy,
providing analytics and visibility into AI-generated reviews across your
GitLab projects.

## Planned Features (Post-Hackathon)

- 📊 Review history timeline per project
- 📈 Issue severity breakdown charts
- 🔍 Search and filter past reviews by file, author, or severity
- ⚙️ Configure agent settings via UI (no YAML editing required)

## Tech Stack (Planned)

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **GitLab Auth:** GitLab OAuth 2.0
- **API:** GitLab REST API v4

## Status

> 🚧 **Under construction.** This directory is a placeholder for the hackathon submission.
> The core agent functionality lives in `/agent/` and `/flow/`.

For now, the agent outputs directly to GitLab MR comments — no separate frontend needed to run it.
