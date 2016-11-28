(function() {
	'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
			// $httpProvider.defaults.withCredentials = true;
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home.html',
					controller: 'AuthController'
				})
				.state('home.recipes', {
					url: 'recipes',
					templateUrl: 'recipes/index.html',
					controller: 'RecipeController as vm'
				})
				.state('home.newRecipe', {
					url: 'new',
					templateUrl: 'recipes/new.html',
					controller: 'NewRecipeController as vm'
				})
				.state('home.recipe', {
					url: 'recipe/:id',
					templateUrl: 'recipes/show.html',
					controller: 'ViewRecipeController as vm'
				})
				.state('home.category', {
					url: 'category/:id',
					templateUrl: 'category.html',
					controller: 'CategoryController as vm'
				})
				.state('home.profile', {
					url: 'profile',
					templateUrl: 'users/profile.html',
					controller: 'ProfileController as vm'
				})
				.state('home.favorites', {
					url: 'favorites',
					templateUrl: 'users/favorites.html',
					controller: 'FavoritesController as vm'
				})

			$urlRouterProvider.otherwise('/')
		})

}());