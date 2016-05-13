// public/js/appRoutes.js

  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })


        // contactUs page the will use the nerdController
        /*
        .when('/contactUs', {
            templateUrl: 'views/contactUs.html',
            controller: 'nerdController'
        })
	*/
	//About page will use the aboutController
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})
	/*
	// platform page will use the platformController
	.when('/platform', {
		templateUrl: 'views/platform.html',
		controller: 'platformController'
	})

	// Analytics will use the analyicsController
	.when('/analytics', {
		templateUrl: 'views/analytics.html',
		controller: 'analyticsController'
	});
	*/
    $locationProvider.html5Mode(true);

}]);  // End angular.module for appRoutes
