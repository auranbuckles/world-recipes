(function() {
	'use strict';

	function NewRecipeController ($location, RecipeService) {
		var vm = this;

		RecipeService.getRecipes()
			.then(function(response) {
				vm.recipes = response.data;
			});

	  vm.addRecipe = function() {
	    var data = {
	    	title: this.title,
	    	difficulty: this.difficulty;
	    };
	    RecipeService.createRecipe(data);
	    $location.path('recipes');
	  };
	}

	angular
		.module('app')
		.controller('NewRecipeController', NewRecipeController)

}());