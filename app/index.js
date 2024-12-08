const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Mock database for storing to-do items
let todoList = [];

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // For parsing JSON requests

// API routes
app.get('/todos', (req, res) => {
    res.json(todoList);
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }
    todoList.push(task);
    res.json({ success: true, todos: todoList });
});

app.delete('/todos', (req, res) => {
    const { index } = req.body;
    if (index === undefined || index < 0 || index >= todoList.length) {
        return res.status(400).json({ error: 'Invalid index' });
    }
    todoList.splice(index, 1);
    res.json({ success: true, todos: todoList });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

