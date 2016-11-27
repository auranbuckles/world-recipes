(function() {
	'use strict';

	function NewRecipeController ($location, RecipeService, CategoryService) {
		var vm = this;

		CategoryService.getCategories()
			.then(function(response) {
				vm.categories = response.data;
			});

	  vm.addRecipe = function() {
	    var data = {
	    	title: this.title,
	    	difficulty: this.difficulty,
	    	time: this.time,
	    	servings: this.servings,
	    	description: this.description,
	    	ingredients: [this.ingredients[0]],
	    	directions: '["direction-1", "direction-2"]',
	    	category_id: this.category.id
	    };

	    data.ingredients.push("ingredient1", "ingredient2")

	    RecipeService.createRecipe(data);
	    $location.path('profile');
	  };
  
  	vm.addIngredient = function() {
  		debugger;
	    var newIngredientNo = data.ingredients.length + 1;
	    data.ingredients.push('');
	  };
	    
	  vm.removeIngredient = function() {
	    var lastIngredient = vm.data.ingredients.length - 1;
	    data.ingredients.splice(lastIngredient);
	  };
	}

	angular
		.module('app')
		.controller('NewRecipeController', NewRecipeController)

}());