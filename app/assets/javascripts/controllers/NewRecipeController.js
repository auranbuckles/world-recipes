(function() {
	'use strict';

	function NewRecipeController ($state, RecipeService, CategoryService) {
		var vm = this;

		CategoryService.getCategories()
			.then(function(response) {
				vm.categories = response.data;
			});

	  vm.ingredients = [{quantity: '', name: ''}, {quantity: '', name: ''}];
	  
	  vm.addNewIngredient = function() {
	    var newItemNo = vm.ingredients.length+1;
	    vm.ingredients.push({quantity: '', name: ''});
	  };
	    
	  vm.removeIngredient = function() {
	    var lastItem = vm.ingredients.length-1;
	    vm.ingredients.splice(lastItem);
	  };

	  vm.addRecipe = function() {

	  	var ingredients = this.ingredients;

	  	for (var key in ingredients) {
	  		if (ingredients.hasOwnProperty(key)) {
			    console.log(key + " -> " + ingredients[key]);
			    debugger;
			  }
	  		// debugger;
	  	}

	    var data = {
	    	title: this.title,
	    	difficulty: this.difficulty,
	    	time: this.time,
	    	servings: this.servings,
	    	description: this.description,
	    	ingredients: this.ingredients,
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