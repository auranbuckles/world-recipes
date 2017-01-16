(function() {
	'use strict';

	function ViewRecipeController (RecipeService, $stateParams, $state) {
		var vm = this;

		vm.reloadRoute = function() {
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

		vm.upvote = function() {
			var data = {
				upvotes: this.recipe.upvotes + 1
			}
			RecipeService.updateRecipe($stateParams.id, data);
			console.log("added 1 upvote");
			vm.reloadRoute();
		}

		vm.stringify = function(obj) {
			return JSON.stringify(obj);
		}

	}

	angular
		.module('app')
		.controller('ViewRecipeController', ViewRecipeController)

}());