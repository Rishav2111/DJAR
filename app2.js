// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models2/startup'); // Assuming you've created the user model

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/startup',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Your other routes and middleware go here

app.listen(3003, () => {
  console.log('Server started on port 3003');
});
