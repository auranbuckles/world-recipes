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
				.state('recipe', {
					url: '/recipe/:id',
					templateUrl: 'recipes/recipe.html',
					controller: 'ViewRecipeController as vm'
				})
				.state('categories', {
					url: '/categories',
					templateUrl: 'categories/categories.html',
					controller: 'CategoryController as vm'
				})
				.state('userProfile', {
					url: '/user/:id',
					templateUrl: 'recipes/recipes.html',
					controller: 'RecipeController as vm'
				})

			$urlRouterProvider.otherwise('/')
		})

}());