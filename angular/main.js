var app = angular.module('main', []);

app.controller('DBCtrl', ['$scope', '$http', function($scope, $http){
	$scope.getData = function(){
		$http.get('http://localhost:8080').then(function(res){
			console.log("Got Data")
			console.log(res.data)
		}, function(res){
			console.log("Error Getting data")
		})
	}
}]);