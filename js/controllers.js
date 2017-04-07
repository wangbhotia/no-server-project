angular.module('devflix').controller('mainCtrl', function($scope, mainService){


	$scope.getMovies = function(){
		mainService.getMovies().then(function(response){
			$scope.movies = response.data;
			// console.log($scope.movies);
		});
	}

	$scope.getMovies();
	

})