(function() {
	'use strict';

	function RecipeController (RecipeService) {
		var vm = this;

		RecipeService.getRecipes()
			.then(function(response) {
				vm.recipes = response.data;
			});
	}

	angular
		.module('app')
		.controller('RecipeController', RecipeController)

}());