(function() {
	'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
			$httpProvider.defaults.withCredentials = true;
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
				.state('recipes.new', {
					url: '/recipes/new',
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
				// .state('users', {
				// 	url: '/users',
				// 	templateUrl: 'users/users.html',
				// 	controller: 'UsersController as vm'
				// })
				.state('profile', {
					url: '/profile',
					templateUrl: 'users/profile.html',
					controller: 'ProfileController as vm'
				})

			$urlRouterProvider.otherwise('/')
		})

}());