"use strict";
let express = require('express');
let path = require('path');


let app = express();

app.use(express.static('public'));

app.get('/Maxine-Art/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
})

app.get('/contact', function(req, res){
  res.sendFile('index.html', { root: __dirname });
})

app.get('/about', function(req, res){
  res.sendFile('index.html', { root: __dirname });
})

app.get('*', function(req, res){
  res.sendFile('index.html', { root: __dirname });
})

app.listen(8080, function(){
  console.log('Listening on port 8080!')
})
