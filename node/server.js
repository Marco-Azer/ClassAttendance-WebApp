
var express = require('express');
var assert = require('assert');
var bodyParser = require('body-parser');
var stdnt = require('./Database/student.js');

var app = express();
var http = require('http').Server(app);
http.listen(8080, function(){
	console.log('Server is running');
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;

var DB;
var url = 'mongodb://localhost:27017/SundaySchool';

// MongoClient.connect(url, function(err, database){
// 	assert.equal(null, err); // Check for errors
// 	console.log('Database connected properly');
// 	DB = database;
// });

app.get('/test/:fname', function(req, res){
	var Data = {"TEST":"YOO"};
	console.log(req.param('fname'));
	res.json(Data);
});

// Student Get Request Handlers

app.get('/stdnt', function(req, res){
	var Data = stdnt.GetStudent(db, req);
	res.json(Data);
});

app.get('/stdnt/cls/:cid', function(req, res){
	var Data = stdnt.GetStudentByClass(db, req);
	res.json(Data);
});

app.get('/stdnt/age/:age', function(req, res){
	var Data = stdnt.GetStudentByAge(db, req);
	res.json(Data);
});

app.get('/stdnt/grade/:grade', function(req, res){
	var Data = stdnt.GetStudentByGrade(db, req);
	res.json(Data);
});

app.get('/stdnt/attnd', function(req, res){
	var Data = stdnt.GetStudentByAttendance(db, req);
	res.json(Data);
});

app.get('/stdnt/outrch', function(req, res){
	var Data = stdnt.GetStudentByoutreach(db, req);
	res.json(Data);
});


// Servant Get Request Handlers

app.get('/srvnt', function(req, res){
	var Data = stdnt.GetServant(db, req);
	res.json(Data);
});

app.get('/srvntgndr', function(req, res){
	var Data = stdnt.GetServantByGender(db, req);
	res.json(Data);
});

app.get('/srvntgndr', function(req, res){
	var Data = stdnt.GetServantByGender(db, req);
	res.json(Data);
});

//var port = process.env.PORT || 8080;
//
//var router = express.Router();
//
//router.get('/', function(req, res){
//	res.json({message: 'Hooray first API'});
//});
//
//app.use('/api', router);
//app.listen(port);
//console.log('Magic Happens on port ' + port);
