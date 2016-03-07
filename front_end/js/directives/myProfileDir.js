var app = angular.module("HueMeApp");

app.directive('myProfileDir', function($localStorage, $state, regLogService, updateProfileService) {
  return {
    restrict: "E",
    templateUrl: "templates/myProfile.html",
    controller: function() {
      this.user = $localStorage.user[0];
      this.logOut = function() {
        regLogService.logOut(function() {
          $state.go('landing');
        })
      }

      this.avatars = [
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarD1.png'},
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarF1.png'},
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarF2.png'},
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarF3.png'},
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarM1.png'},
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarM2.png'},
        {'url' : 'http://localhost/front_end/front_end/styles/styleImgs/avatarM3.png'},
      ];

      this.temp = {};
      
      this.avatSel = function(index){ 
        this.temp.photo_url = this.avatars[index];
        this.selected = index;
      }

      this.genders = ['Female', 'Male', 'Other'];
      this.editorEnabled = false;

      this.enableEditor = function(){
        this.editorEnabled = true; 
        this.temp = jQuery.extend({}, this.user);
      }

      this.disableEditor = function(){
        this.editorEnabled = false;
        this.selected = '';
        this.temp = {};
      }

      this.save = function(){
        for(var p in this.temp)
        {
          alert(this.temp[p]);
        }
       /* updateProfileService.updateUser(this.temp, function(isComplete) {
          if(isComplete) {
            console.log('success');
          } else {
            console.log('fuuck');
          }
        });*/
      }
    },
    controllerAs: "profileCtrl"

  }
})
