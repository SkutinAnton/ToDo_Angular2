const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true }, err => {
  console.log('Успешное подключение');
});
const Task = require('./task');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get('/', async (req, res) => {
  const todoList = await Task.find();
  res.json(todoList.reverse())
});

app.post('/', async (req, res) => {
  Task.create({ name: req.body.text })
  const todoList = await Task.find();
  res.json(todoList.reverse())
});

app.delete('/:id', async (req, res) => {
  Task.findOneAndDelete({ _id: req.params.id }, async (err, deleteTask) => {
    const todoList = await Task.find();
    res.json(todoList.reverse())
  });
});

app.listen(3000);