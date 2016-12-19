// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('nedBank', ['ionic', 'nedBank.controllers'])



.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'enrollment/templates/menu.html',
            abstract: true
        })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'enrollment/templates/home.html',
                controller: 'homeCtrl'
            }
        }
    })

    .state('app.playlists', {
        url: '/playlists',
        views: {
            'menuContent': {
                templateUrl: 'enrollment/templates/playlists.html',
                controller: 'PlaylistsCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/home');

});