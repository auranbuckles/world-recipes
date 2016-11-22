function RecipeService($http) {

	this.getRecipes = function() {
		return $http.get('http://localhost:3000/recipes')
	};

}

angular
	.module('app')
	.service('RecipeService', RecipeService)