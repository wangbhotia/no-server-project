angular.module('devflix').controller('detailsCtrl', function($scope, mainService, $stateParams, youtubeEmbedUtils){

	$scope.youTest = 'https://www.youtube.com/watch?v=44LdLqgOpjo';

	$scope.getMovies = function(){
		mainService.getMovies().then(function(response){
			$scope.getAllMovies = response.data;

			// console.log($scope.getAllMovies);

			for(var i = 0; i < $scope.getAllMovies.length; i++){
				if($scope.getAllMovies[i].id === parseInt($stateParams.id)){
					$scope.singleMovie = $scope.getAllMovies[i];
				}
			}
		});
	}

	$scope.getMovies();


})