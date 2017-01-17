(function() {
	'use strict';

	function RecipeController (RecipeService, $state) {
		var vm = this;
		vm.loading = true;
		
		vm.reloadRoute = function() {
	    $state.reload();
	    console.log("reloading")
		};

		RecipeService.getRecipes()
			.then(function(response) {
				vm.loading = false;
				vm.recipes = response.data;
			});

		vm.upvote = function(recipe) {
			var data = {
				upvotes: recipe.upvotes + 1
			}
			RecipeService.updateRecipe(recipe.id, data)
				.then(function(data) {
				});
			recipe.upvotes++;
		}

	}

	angular
		.module('app')
		.controller('RecipeController', RecipeController)

}());