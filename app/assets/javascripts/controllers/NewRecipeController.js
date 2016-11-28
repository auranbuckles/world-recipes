(function() {
	'use strict';

	function NewRecipeController ($state, RecipeService, CategoryService) {
		var vm = this;

		// CategoryService.getCategories()
		// 	.then(function(response) {
		// 		vm.categories = response.data;
		// 	});

		this.ingredients = ["ingredient 1"];
		// this.input counter = 0;
		// this.$watch('telephone', function (value) {
  //     console.log(value);
  //   }, true);

	  vm.addRecipe = function() {
	  	// this.ingredients = ["ingredient 1"];

	    var data = {
	    	title: this.title,
	    	difficulty: this.difficulty,
	    	time: this.time,
	    	servings: this.servings,
	    	description: this.description,
	    	ingredients: this.ingredients.join("\r\n"),
	    	directions: ["direction1", "direction2"].join("\r\n"),
	    	category_id: this.category.id
	    };

	    // data.directions = JSON.stringify(data.directions);

	    // addIngredient("ingredient1", "ingredient2");
	    debugger;

	    RecipeService.createRecipe(data);
	    $state.go('home.profile');
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