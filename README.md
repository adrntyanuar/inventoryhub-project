# InventoryHub - Full-Stack Integration Project

This repository is prepared for the Coursera assignment:
**Peer-graded Assignment: Building and Deploying the Full-Stack Integration Project**.

## Project Overview
InventoryHub is a minimal full-stack integration demo for inventory data.  
The backend exposes an API endpoint, and the frontend consumes that endpoint to display inventory items in the browser.

## Full-Stack Integration
- **Backend**: Node.js + Express API (`GET /api/inventory`)
- **Frontend**: HTML + JavaScript
- **Integration flow**: frontend calls backend API using `fetch`, then renders returned data on the page.

## JSON API Communication
The endpoint `GET /api/inventory` returns JSON in this shape:

```json
{
  "success": true,
  "count": 3,
  "items": [
    { "id": 1, "name": "Notebook A5", "stock": 120, "category": "Stationery" }
  ]
}