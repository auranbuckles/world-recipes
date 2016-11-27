(function() {
	'use strict';

	function FavoritesController (UserService) {
		var vm = this;

		UserService.getFavorites()
			.then(function(response) {
				vm.recipes = response.data;
			});
	}

	angular
		.module('app')
		.controller('FavoritesController', FavoritesController)

}());