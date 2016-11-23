(function() {
	'use strict';

	function RecipeController (RecipeService) {
		var vm = this;

		RecipeService.getRecipes()
			.then(function(response) {
				vm.recipes = response.data;
			});

		// vm.search = '';

		// vm.refilter = function() {
		// 	vm.filteredList = $filter('filter')(vm.recipes, vm.search)
		// };

		// vm.refilter();
	}

	angular
		.module('app')
		.controller('RecipeController', RecipeController)

}());