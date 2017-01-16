function RecipeService($http) {

	this.getRecipes = function() {
		return $http.get('http://localhost:3000/recipes')
	};

	this.getRecipe = function(id) {
		return $http.get('http://localhost:3000/recipes/' + id)
	};

	this.createRecipe = function(data) {
    $http.post('http://localhost:3000/recipes', data)
    			.then(console.log("posting new recipe..."))
  };

  this.updateRecipe = function(id, data) {
  	$http.put('http://localhost:3000/recipes/' + id, data)
  }

  this.createFavorite = function(data) {
  	$http.post('http://localhost:3000/favorites', data)
			  	.then(console.log("posting new favorite..."))
  }

}

angular
	.module('app')
	.service('RecipeService', RecipeService)