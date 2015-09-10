var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var http = require('http').Server(app);

var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: 'root',
	database: 'SundaySchool'
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	var Data = {
		'Data':'Hello Person'
	};
	res.json(Data);
});

app.get('/person', function(req, res){
	var Data = {
		'Data':''
	};

	connection.query("SELECT * FROM person", function(err, rows, fields){
		if(rows.length != 0){
			Data["Data"] = rows;
			res.json(Data);
		}
	});

});

http.listen(8080, function(){
	console.log('Server is running');
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
