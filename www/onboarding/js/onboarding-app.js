// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('nedBank', ['ionic', 'nedBank.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.onboarding', {
            url: '/onboarding',
            views: {
                'menuContent': {
                    templateUrl: 'onboarding/templates/onboarding.html',
                    controller: 'onboardingCtrl'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('/app/home');
});