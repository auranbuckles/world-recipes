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
    })
    .filter('titleize', function() {
	    return function(input, all) {
	      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
	      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
	    }
			// return function(input) {
			// 	var words = input.split(' ');
			// 	for (var i = 0; i < words.length; i++) {
			// 		words[i] = words[i][0].toUpperCase() +
			// 		words[i].substr(1);
			// 	};
			// 	return words.join(' ');
			// }
	  });

}());