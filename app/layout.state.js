(function() {
	'use strict';
	
	angular
	.module('appbuus')	
	.config(function($stateProvider, $urlRouterProvider){

		
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('/', {				
				url: '/',				
				templateUrl: 'login.html',
				data: {
					css: ['vendor/bootstrap.css','css/login.css']
				},
				resolve: {
					index: function($state, $location, localStorageService) {
						if(localStorageService.get('loggedIn')) {
							$state.transitionTo('home');
						} else{
							$location.path('/', false);
						}
					}
				}
			})
			.state('home', {				
				url: '/home',
				templateUrl: 'app/home/home.view.html',
				data: {
					css: ['css/style.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css']
				},				
				controller: 'homeController',				
				resolve: {
					home: function($window, $state, $rootScope, localStorageService) {								
						if(!localStorageService.get('loggedIn')) {						
							$window.location.assign('./');
						}
						
					}
				}
			})
			.state('logout', {				
				url: '/logout',							
				resolve: {
					logout: function(localStorageService, $window) {								
						localStorageService.clearAll();
						$window.location.assign('./');						
					}
				}
			});
	});

})();