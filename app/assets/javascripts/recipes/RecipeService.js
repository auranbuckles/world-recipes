function RecipeService($http) {

	this.getRecipes = function() {
		return $http.get('http://localhost:3000/recipes')
	};

	this.getRecipe = function(id) {
		return $http.get('http://localhost:3000/recipes/' + id)
	};

	this.createRecipe = function(data) {
    $http.post('http://localhost:3000/recipes', data);
  };

}

angular
	.module('app')
	.service('RecipeService', RecipeService)