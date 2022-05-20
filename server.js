const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./db/connect')
connect.initDatabase();
const dotenv = require('dotenv');
dotenv.config();

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    next();
  })
  .use('/', require('./routes'));

