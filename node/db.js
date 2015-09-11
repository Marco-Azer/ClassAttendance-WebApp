var app = angular.module('db',[]);

app.controller('DatabaseController',function($scope,$http){
	this.lol = "lol";
	$http.get('http://localhost:8080/api').then(function(resp){
		this.data = resp.data;
		this.status = resp.status;
	}, function(resp){
		this.data = null;
		this.status = resp.status;
	});
});