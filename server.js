var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//enable cors
app.use(cors());

//routes
app.use('/api',require('./routes/api'));

app.listen(3000);
console.log('port is 3000');