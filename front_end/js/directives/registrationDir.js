var app = angular.module("HueMeApp");

app.directive("registrationDir", function() {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/registration.html",
		controller: function(regService) {
			this.regService = regService;
			this.formModel = {}; 
			this.inputType = "password";

			this.showPass = function(){
				this.inputType = 'text';
			}

			this.hidePass = function() {
				this.inputType = 'password';
			}
 
			this.onSubmit = function(){  
				this.submitting = false; 
				var data = {
					'username': this.formModel.username, 
					'password': this.formModel.password, 
					'email': this.formModel.email, 
					'dob': this.formModel.dob, 
					'gender': this.formModel.gender
				}
			console.dir(data);
			//this must be a service
				// $http.post('registerProcess.php', {formData: data})
				// 	.success(function(data, status, headers, config){ 
				// 		console.log(data);
				// 		this.submitting = false;
				// 	}).error(function(res){
				// 		console.log("Error!");
				// 		this.submitting = false;
				// 	});
			};
		},
		controllerAs: "ctrl"
	}
});