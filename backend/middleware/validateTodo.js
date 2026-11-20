module.exports = function validateTodo(req, res, next) {
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ error: 'Request body must be JSON' });
  }
  const { title } = req.body;
  if (title === undefined || title === null) {
    return res.status(400).json({ error: 'Title is required' });
  }
  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title must be a non-empty string' });
  }
  next();
};
