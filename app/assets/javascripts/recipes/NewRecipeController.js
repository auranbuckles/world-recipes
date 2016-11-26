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
	    	ingredients: this.ingredients,
	    	directions: ['direction-1', 'direction-2'],
	    	category_id: this.category.id
	    };

	    debugger;
	    RecipeService.createRecipe(data);
	    $location.path('profile');
	  };
  
  	vm.addIngredient = function() {
	    // var newIngredientNo = vm.data.ingredients.length + 1;
	    vm.data.ingredients.push('');
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