(function() {
	'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
			// $httpProvider.defaults.withCredentials = true;
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home/home.html',
					controller: 'RecipeController as vm'
				})
				.state('recipes', {
					url: '/recipes',
					templateUrl: 'recipes/recipes.html',
					controller: 'RecipeController as vm'
				})
				.state('newRecipe', {
					url: '/new',
					templateUrl: 'recipes/new.html',
					controller: 'NewRecipeController as vm'
				})
				.state('recipe', {
					url: '/recipe/:id',
					templateUrl: 'recipes/recipe.html',
					controller: 'ViewRecipeController as vm'
				})
				.state('category', {
					url: '/category/:id',
					templateUrl: 'categories/category.html',
					controller: 'CategoryController as vm'
				})
				.state('profile', {
					url: '/profile',
					templateUrl: 'users/profile.html',
					controller: 'ProfileController as vm'
				})
				.state('favorites', {
					url: '/favorites',
					templateUrl: 'users/favorites.html',
					controller: 'FavoritesController as vm'
				})

			$urlRouterProvider.otherwise('/')
		})

}());