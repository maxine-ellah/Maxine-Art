"use strict";
let express = require('express');
let path = require('path');


let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('*', function(req, res){
  res.sendFile('index.html')
})

app.listen(8080, function(){
  console.log('Listening on port 8080!')
})
