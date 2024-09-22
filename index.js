const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/Task');

const app = express();
// Use built-in body parser for URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todolist');


// Set EJS as view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks });
});

app.post('/add', async (req, res) => {
  await new Task({ name: req.body.name }).save();
  res.redirect('/');
});

app.post('/edit/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.redirect('/');
});

app.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

// Start server
app.listen(3000);
