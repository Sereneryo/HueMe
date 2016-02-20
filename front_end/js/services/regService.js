var app = angular.module("HueMeApp");
app.service("regService", function($http) {
	this.registerUser = function(userData){
		console.dir(userData);
		// var config = {headers: {'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'}};
		$http.post('http://localhost/Hueme/front_end/regi.php', userData)
		.then(function(response) {
			console.dir(response.data);
		}, function(error) {
			console.dir(error);
		});
	}
})