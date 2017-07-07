const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const programInfo = require('./json_responses/program_info');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', function (req, res) {
  res.send({ 'Hello': 'World' });
});

app.get('/programInfo', function (req, res) {
  res.send(programInfo.programInfoJson);
});

app.listen(1512, function () {
  console.log('listening on port 1512!');
});
