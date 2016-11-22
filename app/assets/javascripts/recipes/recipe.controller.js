(function() {
	'use strict';

	function RecipeController ($scope) {
		$scope.name = "Auran is in recipes"
	}

	RecipeController.$inject = ['$scope']

	angular
		.module('app')
		.controller('RecipeController', RecipeController)

}());