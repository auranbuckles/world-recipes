(function() {
	'use strict';

	function ViewRecipeController (RecipeService, $stateParams) {
		var vm = this;

		RecipeService.getRecipe($stateParams.id)
			.then(function(response) {
				vm.recipe = response.data;
			});

		vm.addFavorite = function() {
			var data = {
				recipe_id: this.recipe.id
			}

			debugger;
			RecipeService.createFavorite(data);
		}
	}

	angular
		.module('app')
		.controller('ViewRecipeController', ViewRecipeController)

}());