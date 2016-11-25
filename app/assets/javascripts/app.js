(function() {
	'use strict';

	angular
		.module('app', ['ui.router', 'templates', 'Devise'])
		.config(function(AuthProvider) {
      // Configure Auth service with AuthProvider
    })
    .controller('AuthController', function(Auth) {
      // Use your configured Auth service.
      console.log(Auth._currentUser);
      console.log(Auth.isAuthenticated());
    });

}());