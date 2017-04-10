angular.module('devflix').controller('mainCtrl', function($scope, mainService){


	$scope.getMovies = function(){
		mainService.getMovies().then(function(response){
			$scope.movies = response.data;
			// console.log($scope.movies);

			var first20 = [];

			for(var i = 0; i < $scope.movies.length - 80; i++){
				first20.push($scope.movies[i]);
				// console.log($scope.first20)
			}

			$scope.firstList = first20;

			var second20 = [];

			for(var i = 20; i < $scope.movies.length - 60; i++){
				second20.push($scope.movies[i]);
				// console.log($scope.second20)
			}

			$scope.secondList = second20;

			var third20 = [];

			for(var i = 40; i < $scope.movies.length - 40; i++){
				third20.push($scope.movies[i]);
				console.log($scope.thrid20)
			}

			$scope.thirdList = third20;

			var fourth20 = [];

			for(var i = 60; i < $scope.movies.length - 20; i++){
				fourth20.push($scope.movies[i]);
				// console.log($scope.fourth20)
			}

			$scope.fourthList = fourth20;

			var last20 = [];

			for(var i = 80; i < $scope.movies.length; i++){
				last20.push($scope.movies[i]);
				// console.log($scope.last)
			}

			$scope.lastList = last20;

		});
	}

	$scope.getMovies();
	

})