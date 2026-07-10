# Live Meeting Dashboard (SSE)

A small full-stack project demonstrating **Server-Sent Events** — a server pushing 
live updates to the browser over one open connection, no polling, no refresh.

Built to understand the real-time data pattern used in conferencing/AV systems 
(live speaker status, participant counts, vote tallies).

## Tech stack

Node.js, Express, vanilla JavaScript, HTML.

## How it works

- `server.js` exposes `/events` with SSE headers, and pushes 
  simulated meeting data every 3 seconds.
- `public/script.js` connects via `EventSource` and updates the DOM live on every message.
- Connection cleanup on disconnect

## Run locally

```bash
git clone https://github.com/YOUR-USERNAME/live-meeting-dashboard-sse.git
cd live-meeting-dashboard-sse
npm install
npm run dev
```
Open `http://localhost:3000`.
