const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send(`
    <h1>To-Do App</h1>
    <ul>${tasks.map(task => `<li>${task}</li>`).join('')}</ul>
    <form method="POST" action="/add">
      <input name="task" placeholder="Add a task" />
      <button type="submit">Add</button>
    </form>
  `);
});

app.post('/add', (req, res) => {
  const { task } = req.body;
  if (task) tasks.push(task);
  res.redirect('/');
});

app.listen(3000, () => console.log('To-Do app listening on http://localhost:3000'));
