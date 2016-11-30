(function() {
	'use strict';

	function NewRecipeController ($state, RecipeService, CategoryService) {
		var vm = this;

		CategoryService.getCategories()
			.then(function(response) {
				vm.categories = response.data;
			});

	  vm.choices = [{id: 'choice1'}, {id: 'choice2'}];
	  
	  vm.addNewChoice = function() {
	    var newItemNo = vm.choices.length+1;
	    vm.choices.push({'id':'choice'+newItemNo});
	  };
	    
	  vm.removeChoice = function() {
	    var lastItem = vm.choices.length-1;
	    vm.choices.splice(lastItem);
	  };

	  vm.addRecipe = function() {

	    var data = {
	    	title: this.title,
	    	difficulty: this.difficulty,
	    	time: this.time,
	    	servings: this.servings,
	    	description: this.description,
	    	ingredients: this.choices,
	    	directions: ["direction1", "direction2"].join("\r\n"),
	    	category_id: this.category.id
	    };

	    // data.directions = JSON.stringify(data.directions);
	    debugger;

	    RecipeService.createRecipe(data);
	    $state.go('home.profile');
	  };

  	// vm.addIngredient = function() {
	  //   var newIngredientNo = data.ingredients.length + 1;
	  //   data.ingredients.push('');
	  // };
	    
	  // vm.removeIngredient = function() {
	  //   var lastIngredient = vm.data.ingredients.length - 1;
	  //   data.ingredients.splice(lastIngredient);
	  // };
	}

	angular
		.module('app')
		.controller('NewRecipeController', NewRecipeController)

}());