(function() {
	'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home/home.html',
					controller: 'HomeController as vm'
				})
				.state('recipes', {
					url: '/recipes',
					templateUrl: 'recipes/recipes.html',
					controller: 'RecipeController as vm'
				})

			$urlRouterProvider.otherwise('/')
		})

}());