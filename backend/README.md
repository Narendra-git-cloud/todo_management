# Todo Management API (Backend)

This folder contains the backend API for the Todo Management application.

Quick start

1. Install dependencies
   npm install

2. Start the server
   npm start

Development with auto-reload (requires nodemon)
   npm run dev

Server details
- Default port: 4000 (override with PORT environment variable)
- Base URL: http://localhost:4000

API Endpoints
- GET /api/todos - List all todos
- GET /api/todos/:id - Get a todo by ID
- POST /api/todos - Create a todo (body: { title: string, description?: string })
- PUT /api/todos/:id - Update a todo (body: { title: string, description?: string, completed?: boolean })
- DELETE /api/todos/:id - Delete a todo

Validation
- Title is required and must be a non-empty string.

Storage
- In-memory array (data resets when server restarts)
