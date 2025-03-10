# Svelte Issue Management App

This application was built to automate the repetitive release process while also exploring Svelte in depth. It enables users to manage and send selected issues, along with their associated Git branches, to a backend API.

The app interacts with an API that retrieves tickets in the acceptance state from YouTrack, streamlining the release workflow.

## Features

- Fetches a list of issues from an API or mock data.
- Allows users to select issues via checkboxes.
- Sends selected issues (Git branches) to the backend.
- Automatically clears selections once issues are sent.
- The "Send Selected Issues" button is disabled if no issues are selected.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/j4ckwinter/release-ui.git

cd release-ui
```

### 2. Build the Docker image

```bash
docker build -t release-ui .
```

### 2. Run the Docker container

```bash
docker run -p 5000:5000 release-ui
```

This will start the app inside the container, and it will be accessible in your browser at `http://localhost:5000`.
