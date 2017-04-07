angular.module('moviedb').controller('mainCtrl', function($scope, mainService){

	$scope.test = "I am working!!!";

	$scope.getMovies = function(){
		mainService.getMovies().then(function(response){
			$scope.movies = response.data;
			// console.log($scope.movies);
		});
	}

	$scope.getMovies();
	

})