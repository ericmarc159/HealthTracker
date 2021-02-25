const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

//add a user
app.post('/user', (req, res) => {
  return res.status(200).json('balling');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

//catch all
app.use('*', (req, res) => {
  return res.status(404).send('invalid end point');
});

// //global error handler
app.use(function (err, req, res, next) {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500, //always go 500 with server side errors
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;