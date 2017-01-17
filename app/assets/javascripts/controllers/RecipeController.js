(function() {
	'use strict';

	function RecipeController (RecipeService, $state) {
		var vm = this;
		
		vm.reloadRoute = function() {
	    $state.reload();
	    console.log("reloading")
		};

		RecipeService.getRecipes()
			.then(function(response) {
				vm.recipes = response.data;

				// vm.recipes.forEach (function (recipe) {
				// 	recipe.id = 0;
				// });
			});

		vm.upvote = function(recipe) {
			var data = {
				upvotes: recipe.upvotes + 1
			}
			var i = vm.recipes.indexOf(recipe)
			vm.recipes.splice(i, 1)
			RecipeService.updateRecipe(recipe.id, data)
				.then(function(data) {
					vm.recipes.push(data)
				});
			// vm.reloadRoute();

			// recipe.counter += 1;
			// console.log("added 1 upvote")
		}

	}

	angular
		.module('app')
		.controller('RecipeController', RecipeController)

}());