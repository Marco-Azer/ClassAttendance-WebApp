app.controller('ViewProfileCtrl', ['$scope', 'Profile', function($scope, Profile){
	$scope.person = Profile.data;
}]);