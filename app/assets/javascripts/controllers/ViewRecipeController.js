(function() {
	'use strict';

	function ViewRecipeController (RecipeService, $stateParams, $state) {
		var vm = this;

		vm.reloadRoute = function() {
			debugger;
	    $state.reload();
	    console.log("reloading")
		};

		RecipeService.getRecipe($stateParams.id)
			.then(function(response) {
				vm.recipe = response.data;
			});

		vm.addFavorite = function() {
			var data = {
				recipe_id: this.recipe.id
			}
			RecipeService.createFavorite(data);
			vm.reloadRoute();
		}
	}

	angular
		.module('app')
		.controller('ViewRecipeController', ViewRecipeController)

}());