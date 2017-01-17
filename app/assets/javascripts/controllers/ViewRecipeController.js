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
			RecipeService.createFavorite(data)
				.then(function(data) {
					vm.recipe.favorites.push(data)
				})
			vm.added = true;
		}

		vm.addComment = function() {
			var data = {
				content: this.content,
				recipe_id: this.recipe.id
			}
			RecipeService.createNote(data)
				.then(function(data) {
					vm.recipe.notes.push(data)
				});
			vm.content = "";
			vm.newComment.$setPristine();
			vm.newComment.$setUntouched();
		}

		vm.upvote = function() {
			var data = {
				upvotes: this.recipe.upvotes + 1
			}
			RecipeService.updateRecipe($stateParams.id, data)
				.then(function(data) {
					vm.recipe = data
				});
		}

		vm.stringify = function(obj) {
			return JSON.stringify(obj);
		}

	}

	angular
		.module('app')
		.controller('ViewRecipeController', ViewRecipeController)

}());