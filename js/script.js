(function(){
	
	// empty array for dependencies
	var app = angular.module('AttendanceApp',[]);

	app.controller("PersonController",function(){
		this.People = people;
	});
	
	var people = [  {FirstName:"FName1",
					LastName:"LName1",
					Age:"1",
					Gender:"M",
					Dob:"1",
					Mob:"11",
					Yob:"11",
					Title:"Mr",
					MaritalStatus:"Single"},

					{FirstName:"FName2",
					LastName:"LName2",
					Age:"2",
					Gender:"M",
					Dob:"2",
					Mob:"22",
					Yob:"222",
					Title:"Mr",
					MaritalStatus:"Married"},

					{FirstName:"FName3",
					LastName:"LName3",
					Age:"3",
					Gender:"M",
					Dob:"3",
					Mob:"33",
					Yob:"333",
					Title:"Mr",
					MaritalStatus:"Married"},

					{FirstName:"FName4",
					LastName:"LName4",
					Age:"4",
					Gender:"M",
					Dob:"4",
					Mob:"44",
					Yob:"444",
					Title:"Mr",
					MaritalStatus:"Married"}
					];
})();