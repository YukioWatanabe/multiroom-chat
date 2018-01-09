const express = require('express');
const validator = require('express-validator');
const bodyParser = require('body-parser');
const consign = require('consign');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'));
app.use(bodyParser.urlencoded( { extended : true } ));
app.use(validator());

consign().include('./src/routes')
       .then('./src/controllers')
       .then('./src/models')
       //.then('./config/dbConnection')
       .into(app);

module.exports = app;