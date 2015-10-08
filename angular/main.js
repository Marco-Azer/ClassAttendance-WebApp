var app = angular.module('main', ['ngResource']);

app.factory('dataFac', function($resource){
	var getData = $resource('http://localhost:8080/');
	var data = getData.get();
	return data;
});

app.controller('DBCtrl', ['$scope', '$http', 'dataFac', function($scope, $http, dataFac){
	// $scope.getData = function(){
	// 	$http.get('http://localhost:8080').then(function(res){
	// 		console.log("Got Data")
	// 		console.log(res.data)
	// 	}, function(res){
	// 		console.log("Error Getting data")
	// 	})
	// }
	$scope.getData = function(){
		console.log("YOO");
		console.log(dataFac);
	}
		
}]);