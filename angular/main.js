var app = angular.module('main', ['ngResource']);

app.factory('dataFac', function($resource){
	var getData = $resource('http://localhost:8080/');
	var data = getData.get();
	return data;
});

app.factory('putStudentsFac', function($resource){

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

app.factory('NewStudentFact', function($resource){
	var obj = {};
	var conn = $resource('http://localhost:8080/student');
	obj.addNewStudent = function(student){
		$conn.save(student);
	};
	return obj;
});

app.controller('StudentCtrl', ['$scope', 'NewStudentFact', function($scope, NewStudentFact){
	$scope.printData = function(){
		console.log($scope.new);
	};
	$scope.putStudent = function(){
		NewStudentFact.addNewStudent($scope.new);
	};
}]);