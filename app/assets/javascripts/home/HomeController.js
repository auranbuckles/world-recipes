(function() {
	'use strict';

	function HomeController (RecipeService) {
		var vm = this;

		RecipeService.getRecipes()
			.then(function(response) {
				vm.recipes = response.data;
			});
	}

	angular
		.module('app')
		.controller('HomeController', HomeController)

}());