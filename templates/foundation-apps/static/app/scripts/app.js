'use strict';

/**
 * @ngdoc overview
 * @name ${application.name}
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 *
 * @author Florian Hartl <f.hartl@techdivision.com>
 */
angular.module('${application.name}',
        [
            'ui.router',
            'foundation',
            'ngSanitize',
            'validation.match'
        ]
    )

    .config(function ($locationProvider) {
        // config location resolving etc.

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })

    .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
        // configure all the possible states of the app

        // the actual state tree
        $stateProvider
            .state('app.404', {
                url: '/404',
                cache: true,
                templateUrl: 'templates/views/404.html',
                controller: '404Controller',
                controllerAs: '404Ctrl'
            })
            .state('app', {
                url: '',
                abstract: true,
                sticky: true,
                templateUrl: 'templates/app.html',
                controller: 'AppController',
                controllerAs: 'appCtrl'
            })
            .state('app.home', {
                url: '/',
                cache: false,
                templateUrl: 'templates/views/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('app.settings', {
                url: '/settings',
                cache: false,
                templateUrl: 'templates/views/settings.html',
                controller: 'SettingsController',
                controllerAs: 'settingsCtrl'
            });

        // redirects to default route for undefined routes
        $urlRouterProvider.otherwise('404');

    });
