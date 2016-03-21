var app = angular.module("HueMeApp");
app.service('postingService', function($http) {
	this.sendPost = function(postData) {
		$http.post("http://localhost:8888/hueme/post", {"post": postData})
			.then(function(success) {
				console.log(success);
			}, function(error) {
				console.log(error);
			})
	}

	this.moodColours = {
		'1': 'black, I\'m suffering',
		'2': 'blue, It\'s been better before but I\'m coool',
		'3': 'orange, Life is good',
		'4': 'red, What is love, baby don\'t hurt me',
		'5': 'pink, Pink mood, let me take a selfie',
		'6': 'greenl, Life is awesome'
	}
})