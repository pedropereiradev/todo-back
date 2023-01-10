const express = require('express')
const cors = require('cors');
const app = express()
const port = 443

const database = [];

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(database);
})

app.post('/', (req, res) => {
  const task = req.body.todo;
  database.push(task);

  res.status(201).json(database);
})

app.delete('/', (req, res) => {
  const { task } = req.body;

  const taskIndex = database.indexOf(task);

  database.splice(taskIndex, 1);

  res.status(200).json(database);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})