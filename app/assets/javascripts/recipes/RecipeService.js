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

  this.createFavorite = function(data) {
  	$http.post('http://localhost:3000/recipes/addfavorite', data)
			  	.then(console.log("posting new favorite..."))
  }

}

angular
	.module('app')
	.service('RecipeService', RecipeService)