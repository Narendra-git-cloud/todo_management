const { v4: uuidv4 } = require('uuid');

// In-memory todos array
const todos = [
  {
    id: uuidv4(),
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs, and Butter',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Read a book',
    description: 'Finish reading the current novel',
    completed: false
  }
];

module.exports = { todos };
