app.factory('Profile', ['$http', function($http){
	var mydata;
	retObj = {
		getProfile : function(search, dburl, callback){
			var req = {
				method: 'GET',
				url: dburl,
				params: search
			};
			$http(req).then(
				function(res){
					if(res.data.length == 1){
						retObj.data = res.data[0];
					}
					else if(res.data.length > 1){
						retObj.data = res.data;
					}
					callback(null, res.data);
				},
				function(){
					callback("Error");
				}
			);
		},

		getStudentProfile : function(search, callback){
			this.getProfile(search, 'http://localhost:8080/student', callback);
		},

		getServantProfile : function(search, callback){
			this.getProfile(search, 'http://localhost:8080/servant', callback);
		},

		getStudentProfileById : function(search, callback){
			var req = {
				method: 'GET',
				url: 'http://localhost:8080/student/id/' + search._id
			}
			$http(req).then(
				function(res){
					retObj.data = res.data[0];
					callback(null, res.data);
				},
				function(res){
					callback("Error")
				}
			);
		},

		getServantProfileById : function(search, callback){
			var req = {
				method: 'GET',
				url: 'http://localhost:8080/servant/id/' + search._id
			}
			$http(req).then(
				function(res){
					retObj.data = res.data[0];
					callback(null, res.data);
				},
				function(res){
					callback("Error")
				}
			);
		}
	};
	return retObj;
}]);