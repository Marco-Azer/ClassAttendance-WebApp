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

app.controller('AddStudentCtrl', ['$scope', '$http', function($scope, $http){
	$scope.submit = function(){
		$http.post('http://localhost:8080/student', $scope.new).then(
				function(){
					$scope.new = {};
					console.log("Student was inserted");
				},
				function(){
					console.log("Couldn't insert student");
				}
			);
	}
}]);

app.controller('AddServantCtrl', ['$scope', '$http', function($scope, $http){
	$scope.submit = function(){
		$http.post('http://localhost:8080/servant', $scope.new).then(
				function(){
					$scope.new = {};
					console.log("Student was inserted");
				},
				function(){
					console.log("Couldn't insert servant");
				}
			);
	}
}]);

app.controller('SearchStudentCtrl', ['$scope', '$http', function($scope, $http){
	$scope.search = function(){
		$scope.stdnts = $http.get()
	};
}]);