(function() {
	'use strict';

	angular
		.module('app')
		.config([
      '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
				.state('profile', {
					url: '/user/:id',
					templateUrl: 'profile/profile.html',
					controller: 'ProfileController as vm'
				})
				.state('login', {
          url: '/login',
          templateUrl: 'auth/login.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function(){
            $state.go('home');
        })
      }]
    })
          .state('register', {
          url: '/register',
          templateUrl: 'auth/register.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function(){
            $state.go('home');
        })
      }]
    });

        $urlRouterProvider.otherwise('/');
      }]);
  }());