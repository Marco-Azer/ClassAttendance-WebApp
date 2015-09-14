var app = angular.module('test',[]);

app.controller('TestController', function($http, $scope){
	this.status = false;
	$http.get('./node/server.js').
	then(function(response){
		console.log("Got data " + response.data);
	}, function(response){
		console.log("No Data");
	})
});