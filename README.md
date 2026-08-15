# OpenGraph

> An interactive open-source repository explorer that helps developers discover GitHub repositories and visualize relationships between related projects.

🔗 **Live Demo:** `YOUR_VERCEL_URL`
💻 **GitHub:** `YOUR_GITHUB_REPOSITORY_URL`

---

## Overview

OpenGraph provides a visual way to explore the open-source ecosystem instead of relying only on traditional repository lists.

Users can search for a technology or project, explore matching GitHub repositories, and visualize relationships between repositories through an interactive graph.

---

## Features

* 🔍 **GitHub Repository Search** — Search repositories using the GitHub REST API.
* 🕸️ **Interactive Repository Graph** — Visualize relationships between discovered repositories.
* 🔗 **Repository Connections** — Identify and explore related repositories through graph connections.
* 🎯 **Interactive Nodes** — Select repositories and highlight their connected relationships.
* 📊 **Repository Details** — View stars, forks, language, license, visibility, and default branch.
* 🔎 **Repository Exploration** — Open individual repository pages and inspect their connections.
* 📱 **Responsive UI** — Designed to work across desktop and mobile screens.

---

## How It Works

```text
Search Query
     ↓
GitHub REST API
     ↓
Repository Results
     ↓
Relationship Analysis
     ↓
Graph Data
     ↓
Interactive Repository Graph
```

OpenGraph fetches repositories from GitHub based on the user's search query. The returned repositories are analyzed to determine relationships, which are then represented as nodes and edges using an interactive graph.

---

## Tech Stack

| Technology      | Purpose                         |
| --------------- | ------------------------------- |
| React           | Frontend UI                     |
| React Router    | Client-side routing             |
| Tailwind CSS    | Styling and responsive design   |
| React Flow      | Interactive graph visualization |
| GitHub REST API | Repository data                 |
| Vite            | Development and build tooling   |

---

## Project Structure

```text
src/
├── components/
│   ├── explore/
│   └── Graph/
├── pages/
│   ├── Home/
│   ├── Explore/
│   └── Repository/
├── services/
│   └── githubApi.js
├── utils/
│   ├── graphData.js
│   └── repositoryRelations.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Getting Started

### Prerequisites

* Node.js
* npm
* GitHub account

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd opengraph
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

OpenGraph is deployed using Vercel.

Every update pushed to the connected GitHub repository can be automatically deployed through Vercel.

🔗 **Live Demo:** `YOUR_VERCEL_URL`

---

## Future Improvements

* Trending repository discovery
* Advanced repository relationship analysis
* Technology-based filtering
* More sophisticated graph layouts
* Contributor network visualization
* Repository comparison
* Improved GitHub API data handling

---

## What I Learned

Building OpenGraph involved working with:

* React component architecture
* React Router and dynamic routes
* Asynchronous API requests
* GitHub REST API integration
* Graph data generation
* Interactive graph visualization with React Flow
* Responsive UI development with Tailwind CSS
* State management and user interactions
* Deploying a React application with Vercel

---

## Author

**Sachin Acharya**

Computer Science Student | Web Developer

[GitHub](YOUR_GITHUB_PROFILE_URL) · [LinkedIn](YOUR_LINKEDIN_URL)
