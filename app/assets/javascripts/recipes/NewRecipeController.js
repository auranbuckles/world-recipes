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
	    	difficulty: this.difficulty,
	    	time: this.time,
	    	servings: this.servings,
	    	description: this.description,
	    	ingredients: ['ingredient-1', 'ingredient-2'],
	    	directions: ['direction-1', 'direction-2']
	    };
	    debugger;
	    RecipeService.createRecipe(data);
	    $location.path('recipes');
	  };
  
  	vm.addIngredient = function() {
	    var newIngredientNo = vm.data.ingredients.length + 1;
	    vm.data.ingredients.push('ingredient-'+ newIngredientNo);
	  };
	    
	  vm.removeIngredient = function() {
	    var lastIngredient = vm.data.ingredients.length - 1;
	    vm.data.ingredients.splice(lastIngredient);
	  };
	}

	angular
		.module('app')
		.controller('NewRecipeController', NewRecipeController)

}());