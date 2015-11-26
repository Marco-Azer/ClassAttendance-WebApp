var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: '../pages/home.html'
	})
	.when('/NewStudent', {
		templateUrl: '../pages/NewStudent.html'
	})
	.when('/SearchStudent',{
		templateUrl: '../pages/SearchStudent.html'
	})
	.when('/NewServant', {
		templateUrl: '../pages/NewServant.html'
	})
	.when('/SearchServant', {
		templateUrl: '../pages/SearchServant.html'
	})
	.when('/NewClass', {
		templateUrl: '../pages/NewClass.html'
	})
	.when('/SearchClass', {
		templateUrl: '../pages/SearchClass.html'
	})
	.when('/ViewProfile',{
		templateUrl: '../pages/ViewProfile.html'
	})
	.when('/ViewProfiles',{
		templateUrl: '../pages/ViewProfiles.html'
	})
	.when('/ViewClass', {
		templateUrl: '../pages/ViewClass.html'
	})
}]);