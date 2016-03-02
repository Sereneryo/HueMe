var app = angular.module("HueMeApp");

app.directive("registrationDir", function(regService) {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/registration.html",
		controller: function(regService){
			this.formModel = {};
			this.inputType = "password";

			this.showPass = function(){
				this.inputType = 'text';
			}

			this.hidePass = function(){
				this.inputType = 'password';
			}

			this.formSubmit = function(){
				//this.newUser = regService.registerUser(this.formModel);
				console.log(this.formModel);
				regService.registerUser(this.formModel);
			};
		},
		controllerAs: "ctrl"
	}
});
