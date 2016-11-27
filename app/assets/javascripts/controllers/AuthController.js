function AuthController (Auth,$scope,$http) {

  var config = {
    headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  };

  $scope.register = function() {
    var credentials = {
      username: $scope.username,
      email: $scope.email,
      password: $scope.password,
      password_confirmation: $scope.password
    };

    console.log(credentials)

    Auth.register(credentials, config).then(function(registeredUser) {
      console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
      // Registration failed...
      console.log("registration failed")
    });

    $scope.$on('devise:new-registration', function(event, user) {
      // log in the user
      // debugger;      
      $http.get('/')
        .success(function(data) {
          console.log("sign up success")
        })
        .error(function(data) {

        });
    });

  }

  $scope.login = function() {
    var credentials = {
      email: $scope.email,
      password: $scope.password
    };

    console.log(credentials)


    Auth.login(credentials, config).then(function(user) {
      console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
      console.log("login failed")
    });

    $scope.$on('devise:login', function(event, currentUser) {
      // after a login, a hard refresh, a new tab
      $scope.currentUser = Auth._currentUser

      $http.get('/')
        .success(function(data) {
          console.log("login success")
        })
        .error(function(data) {

        });
        //do an http.get in order to get the posts belonging to 
        //the current user?
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
      // user logged in by Auth.login({...})
      $scope.currentUser = Auth._currentUser
    });
  }

  $scope.logOut= function() {
    var config1 = {
      headers: {
        'X-HTTP-Method-Override': 'DELETE'
      }
    };

    var oldUser = $scope.currentUser;

    Auth.logout(config1).then(function(oldUser) {
      $scope.currentUser = ""
      console.log("signed out" + oldUser.email)
      alert("You are signed out now.");

      $http.get('/')
        .success(function(data) {
          console.log("logout success")
        })
        .error(function(data) {
          console.log("logout failed")
        });
    }, function(error) {
      console.log("logout failed")
      // An error occurred logging out.
    });

    $scope.$on('devise:logout', function(event, oldCurrentUser) {
      // ...
    });
   }

};

angular
  .module('app')
  .controller('AuthController', AuthController) 

