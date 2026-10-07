# To-do App

A small React app for keeping a simple list of tasks and their due dates. Add tasks from the form, remove them when they are no longer needed, and get an empty-list message when all tasks are cleared.

## Features

- Add a task with a name and due date.
- Delete a task from the list.
- Show an empty-state message when there are no tasks.
- Manage the list with React state and a shared context.
- Use Bootstrap for layout and styling, with CSS Modules for component styles.

Tasks are stored in memory only. They reset to the starter list when the page is reloaded; this project does not currently use a backend or browser storage.

## Tech Stack

- React 19
- Vite 7
- Bootstrap 5
- ESLint 9

## Getting Started

Requirements: Node.js and npm.

From this project directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite development server.    |
| `npm run build`   | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint`    | Run ESLint across the project.        |

## Project Structure

```text
src/
  components/  Todo form, list items, app title, and empty state
  store/       Shared todo context
  App.jsx      Todo state and application composition
  main.jsx     React entry point
```
