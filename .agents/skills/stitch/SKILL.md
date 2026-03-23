---
name: Stitch Application Generation Skill
description: Instructions and guidelines for using StitchMCP to generate and manage multiple projects and screens.
---

# Stitch Application Generation Skill

This skill provides guidelines and procedures for using the StitchMCP tools to create multiple UI projects, generate screens, iterate on designs, and manage UI applications efficiently.

## Available StitchMCP Tools

You have access to the following tools:
1. `mcp_StitchMCP_create_project`: Creates a new Stitch UI project.
2. `mcp_StitchMCP_generate_screen_from_text`: Generates a UI screen based on a text prompt in a specified project.
3. `mcp_StitchMCP_list_projects`: Lists all existing Stitch projects.
4. `mcp_StitchMCP_get_project`: Retrieves details format of a specific project.
5. `mcp_StitchMCP_edit_screens`: Edits an existing screen using a prompt.
6. `mcp_StitchMCP_generate_variants`: Generates multiple variants of an existing screen based on a prompt.
7. `mcp_StitchMCP_list_screens`: Lists all screens in a given project.
8. `mcp_StitchMCP_get_screen`: Retrieves the specific details of a single screen.

## Instructions for Creating Multiple Projects

When the USER requests the creation of multiple projects or applications through Stitch, use the following workflow:

### 1. Planning and Conceptualization
* Analyze the user's requirements and divide them into distinct projects/apps if applicable.
* For each project, formulate a clear, descriptive title and a highly detailed prompt for the initial screen. The prompt must describe a modern, stunning UI design (e.g., using glassmorphism, modern typography, specific engaging color themes).

### 2. Creating Projects Iteratively
For each planned project:
1. Call `mcp_StitchMCP_create_project` to instantiate the new project container. Ensure you extract the `projectId` from the response.
2. Call `mcp_StitchMCP_generate_screen_from_text` using the new `projectId` and the detailed prompt for this project. **Note**: This call may take a few minutes. Wait patiently. If it returns suggestions in `output_components`, present them or auto-select one and call again.
3. Call `mcp_StitchMCP_list_screens` to confirm the screen was created and retrieve its ID.
4. Call `mcp_StitchMCP_get_screen` to review the contents of the generated UI.

### 3. Iteration and Refinement (Optional per Project)
If the user wants modifications or if the generated screen needs improvements:
* Use `mcp_StitchMCP_edit_screens` by providing the `projectId`, the `selectedScreenIds`, and a targeted amendment prompt.
* Use `mcp_StitchMCP_generate_variants` if you want to explore design alternatives (e.g., changing colors or layout focus).

## Best Practices
* **Design Execution**: Always prompt for premium, rich aesthetics. Avoid simple basic designs. Ask for responsive, living interfaces with micro-interactions.
* **Separation of Concerns**: Treat each logical application as a separate Stitch project. Do not mix unrelated screens in the same project unless they are part of the same application flow.
* **Resilience**: If a network error occurs during generation, the background process might still succeed. Use `mcp_StitchMCP_list_screens` and `mcp_StitchMCP_get_screen` to check the progress before retrying immediately.

## Example Usage

**User Request**: "Create two apps, a dashboard and a login page."

**Action Sequence**:
1. `create_project` -> Dashboard Project -> Got `project_1_id`
2. `generate_screen_from_text` for `project_1_id` -> "A modern, dark-mode analytics dashboard with rounded cards..."
3. `create_project` -> Login Project -> Got `project_2_id`
4. `generate_screen_from_text` for `project_2_id` -> "A vibrant split-screen login page with a subtle animated gradient background..."

## Automating the Process

If you need to batch create multiple projects, you can either:
- Exectue the MCP tools sequentially to manage state carefully.
- Refer to the provided `scripts/` folder (if available) for programmatic approaches to batch creation.
