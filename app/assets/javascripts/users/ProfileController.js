(function() {
	'use strict';

	function ProfileController (UserService) {
		var vm = this;

		UserService.getProfile()
			.then(function(response) {
				vm.recipes = response.data;
			});
	}

	angular
		.module('app')
		.controller('ProfileController', ProfileController)

}());