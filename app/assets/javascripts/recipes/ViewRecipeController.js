(function() {
	'use strict';

	function ViewRecipeController (RecipeService, $stateParams) {
		var vm = this;

		RecipeService.getRecipe($stateParams.id)
			.then(function(response) {
				vm.recipe = response.data;
			});
	}

	angular
		.module('app')
		.controller('ViewRecipeController', ViewRecipeController)

}());