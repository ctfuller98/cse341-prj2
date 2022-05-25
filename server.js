const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const { signupValidation, loginValidation } = require('./validation.js');
const port = process.env.PORT || 3000;
const connect = require('./db/connect')


connect.initDatabase();
app.use(cors());

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

process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });