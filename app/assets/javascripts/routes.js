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
				.state('home.recipes', {
					url: 'recipes',
					templateUrl: 'recipes/recipes.html',
					controller: 'RecipeController as vm'
				})
				.state('home.newRecipe', {
					url: 'new',
					templateUrl: 'recipes/new.html',
					controller: 'NewRecipeController as vm'
				})
				.state('home.recipe', {
					url: 'recipe/:id',
					templateUrl: 'recipes/recipe.html',
					controller: 'ViewRecipeController as vm'
				})
				.state('home.category', {
					url: 'category/:id',
					templateUrl: 'categories/category.html',
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