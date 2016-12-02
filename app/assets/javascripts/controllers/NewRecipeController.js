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

	  vm.directions = [{text: ''}];

	  vm.addNewDirection = function() {
	    var newItemNo = vm.directions.length+1;
	    vm.directions.push({text: ''});
	  };
	    
	  vm.removeDirection = function() {
	    var lastItem = vm.directions.length-1;
	    vm.directions.splice(lastItem);
	  };

	  vm.addRecipe = function() {

	  	var ingredients = this.ingredients;
	  	var allIngredients = [];

	  	for (var key in ingredients) {
	  		if (ingredients.hasOwnProperty(key)) {
			    var ingredient = ingredients[key].quantity + " " + ingredients[key].name;
			    allIngredients.push(ingredient);
			  }
	  	}

	  	var directions = this.directions;
	  	var allDirections = [];

	  	for (var key in directions) {
	  		if (directions.hasOwnProperty(key)) {
			    var direction = directions[key].text;
			    allDirections.push(direction);
			  }
	  	}

	    var data = {
	    	title: this.title,
	    	difficulty: this.difficulty,
	    	time: this.time,
	    	servings: this.servings,
	    	description: this.description,
	    	ingredients: allIngredients.join("\r\n"),
	    	directions: allDirections.join("\r\n"),
	    	category_id: this.category.id
	    };

	    RecipeService.createRecipe(data);
	    $state.go('home.profile');
	  };

	}

	angular
		.module('app')
		.controller('NewRecipeController', NewRecipeController)

}());