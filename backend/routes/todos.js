const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const store = require('../data/store');
const validateTodo = require('../middleware/validateTodo');

// GET /api/todos - list all todos
router.get('/', (req, res) => {
  res.json(store.todos);
});

// GET /api/todos/:id - get a single todo
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todo = store.todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// POST /api/todos - create a todo
router.post('/', validateTodo, (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: uuidv4(),
    title: title.trim(),
    description: description ? String(description).trim() : '',
    completed: false
  };
  store.todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /api/todos/:id - update a todo
router.put('/:id', validateTodo, (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;
  const idx = store.todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Todo not found' });

  store.todos[idx].title = title.trim();
  store.todos[idx].description = description !== undefined ? String(description).trim() : store.todos[idx].description;
  if (typeof completed === 'boolean') store.todos[idx].completed = completed;

  res.json(store.todos[idx]);
});

// DELETE /api/todos/:id - delete a todo
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const idx = store.todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Todo not found' });
  store.todos.splice(idx, 1);
  res.status(204).send();
});

module.exports = router;
