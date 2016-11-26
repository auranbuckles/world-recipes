function UserService($http) {

	this.getProfile = function(id) {
		return $http.get('http://localhost:3000/user/profile')
	};

}

angular
	.module('app')
	.service('UserService', UserService)