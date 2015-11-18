var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: '../pages/home.html'
	})
	.when('/NewStudent', {
		templateUrl: '../pages/NewStudent.html',
		controller: 'AddStudentCtrl'
	})
	.when('/SearchStudent',{
		templateUrl: '../pages/SearchStudent.html',
		controller: 'SearchStudentCtrl'
	})
	.when('/NewServant', {
		templateUrl: '../pages/NewServant.html',
		controller: 'SearchServantCtrl'
	})
	.when('/SearchServant', {
		templateUrl: '../pages/SearchServant.html',
		controller: 'SearchServantCtrl'
	})
	.when('/NewClass', {
		templateUrl: '../pages/NewClass.html',
		controller: 'AddClassCtrl'
	})
	.when('/SearchClass', {
		templateUrl: '../pages/SearchClass.html',
		controller: 'SearchClassCtrl'
	})
	.when('/ViewProfile',{
		templateUrl: '../pages/ViewProfile.html',
		controller: 'ViewProfileCtrl'
}]);