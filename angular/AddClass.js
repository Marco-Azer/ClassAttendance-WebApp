(function(){
	var app = angular.module('AddClass', []);

	app.controller('AddClassCtrl', ['$scope', '$http', function($scope, $http){
		$scope.addClass = function(){
			$http.post('http://localhost:8080/class', $scope.new).then(
				function(res){
					$scope.new = {};
				},
				function(res){
					console.log("Error, Couldnt add class");
				}
			);
		}
	}]);
})();