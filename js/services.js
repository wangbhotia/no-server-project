angular.module('devflix').service('mainService', function($http){

	this.getMovies = function(){
		return $http.get('data.json');
	}

})