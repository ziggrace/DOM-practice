const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routers/api');
const PORT = 6969;

app.use(express.json()); // makes sure all data is in json format
// app.use(express.urlencoded({ extended: true })); 

app.use( express.static(path.resolve(__dirname, '../src' )));// handles static files 

app.use('/api', apiRouter); // routes all requests to /api to apiRouter in api.js

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use((err, req, res, next) => {
const defErr = {
  log: 'sent to the global error handler',
  status: 500,
  msg: {err: 'theres an oopsie'}
}
 const errorObj = Object.assign(defErr, err);
 console.log(errorObj.log);
 return res.status(errorObj.status).json(errorObj.msg);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;