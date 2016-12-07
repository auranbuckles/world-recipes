(function() {
	'use strict';

	angular
		.module('app', ['ui.router', 'templates', 'Devise'])
		.config(function(AuthProvider) {
      // Configure Auth service with AuthProvider
    })
    .run(function() {
    	window.onbeforeunload = function () {
		  	document.getElementById("login").click(function (e) {
		  		return false;
		  	});
			};
    })
    .filter('titleize', function() {
	    return function(input, all) {
	      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
	      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
	    }
	  });

}());