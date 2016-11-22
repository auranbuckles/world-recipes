(function() {
	'use strict';

	function HomeController ($scope) {
		$scope.name = "Auran is home"
	}

	HomeController.$inject = ['$scope']

	angular
		.module('app')
		.controller('HomeController', HomeController)

}());