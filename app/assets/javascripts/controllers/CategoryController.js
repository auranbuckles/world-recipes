(function() {
	'use strict';

	function CategoryController (CategoryService, $stateParams) {
		var vm = this;

		CategoryService.getCategory($stateParams.id)
			.then(function(response) {
				vm.categories = response.data;
			});
	}

	angular
		.module('app')
		.controller('CategoryController', CategoryController)

}());