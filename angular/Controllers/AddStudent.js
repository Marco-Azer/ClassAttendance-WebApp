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