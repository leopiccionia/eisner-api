var http = require('http');
var express = require('express');
var r = require('rethinkdbdash')();

var app = express();
app.get('/', (req, res) => res.send('Hello, world!'));
app.get('/:id', (req, res) => res.send('Id: ' + req.params.id));
app.listen(process.env.PORT, () => console.log(`Reading at port ${process.env.PORT}`));