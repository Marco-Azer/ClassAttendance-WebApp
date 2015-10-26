var express = require('express');
var fs = require('fs');
var app = express();
app.get('/', function(req, res){
	res.sendFile('index.html');
});
app.listen(8080, function(){
	console.log("Server is running");
});