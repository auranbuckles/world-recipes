function CategoryService($http) {

	this.getCategory = function(id) {
		return $http.get('http://localhost:3000/categories/' + id)
	};

}

angular
	.module('app')
	.service('CategoryService', CategoryService)