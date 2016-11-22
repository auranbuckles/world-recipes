(function() {
	'use strict';

	function RecipeController ($scope) {
		$scope.name = "Auran"
	}

	angular
		.module('app', ['ui.router', 'templates', 'Devise'])
		.controller('RecipeController', RecipeController)

}());