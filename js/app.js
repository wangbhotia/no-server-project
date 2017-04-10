angular.module('devflix', ['ui.router', 'youtube-embed'])
	.config(function($stateProvider, $urlRouterProvider){

		$stateProvider

			.state('home', {
				url: '/',
				templateUrl: '../views/main.html'
			})

			.state('details', {
				url: '/details/:id',
				templateUrl: '../views/details.html',
				controller: 'detailsCtrl'
			})

			.state('dvd', {
				url: '/dvd',
				templateUrl: '../views/dvd.html'
			})

			.state('account', {
				url: '/account',
				templateUrl: '../views/account.html'
			});




			$urlRouterProvider.otherwise('/');

	})