var express = require('express');
var assert = require('assert');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
http.listen(8080, function(){
	console.log('Server is running');
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
	var obj = {"fanme":"marco", "lname":"azer"};
	res.header("Access-Control-Allow-Origin", "*");
	res.json(obj);
});