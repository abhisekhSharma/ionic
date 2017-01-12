define([], function() {  
    'use strict';  
     
    return angular.module('nedBank.route', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'modules/enrollment/templates/menu.html',
                abstract: true
            })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'modules/enrollment/templates/home.html',
                    controller: 'homeCtrl as vm'
                }
            }
        })

        .state('app.onboarding', {
            url: '/onboarding',
            views: {
                'menuContent': {
                    templateUrl: 'modules/onboarding/templates/onboarding.html',
                    controller: 'onboardingCtrl'
                }
            }
        })

        .state('app.playlists', {
            url: '/playlists',
            views: {
                'menuContent': {
                    templateUrl: 'modules/enrollment/templates/playlists.html',
                    controller: 'PlaylistsCtrl'
                }
            }
        });



        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });

  
});