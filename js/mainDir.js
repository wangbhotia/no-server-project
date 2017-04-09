angular.module('devflix').directive('mainDir', function(){

	return {
		restrict: 'AE',
		controller: 'mainCtrl',

		link: function(scope, element, attrs){

			element.hover(function(){
				element.transition({scale: 1.1});
			},
			function(){
				element.transition({scale: 1});
			});


		}
	}


})
