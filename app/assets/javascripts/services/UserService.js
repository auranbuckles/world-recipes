function UserService($http) {

	this.getProfile = function() {
		return $http.get('http://localhost:3000/user/profile')
	};

	this.getFavorites = function() {
		return $http.get('http://localhost:3000/user/favorites')
	};

}

angular
	.module('app')
	.service('UserService', UserService)