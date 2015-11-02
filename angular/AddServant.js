
angular.module('AddServant', [])

	.controller('AddServantCtrl', ['$scope', '$http', function($scope, $http){
		$scope.submit = function(){
			$http.post('http://localhost:8080/servant', $scope.new).then(
				function(res){
					$scope.new = {};
					console.log("Student was inserted");
				},
				function(res){
					console.log("Couldn't insert servant");
				}
			);
		}
	}]);