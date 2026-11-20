const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todos');
const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todosRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Todo Management API' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Todo Management API running on http://localhost:${PORT}`);
});
