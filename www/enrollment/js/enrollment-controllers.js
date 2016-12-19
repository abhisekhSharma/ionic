angular.module('nedBank.controllers', [])

.controller('PlaylistsCtrl', function($scope, $stateParams, $http) {
        $http.get("http://services.groupkt.com/state/get/IND/UP")
            .then(function(response) {
                $scope.data = response.data;
                console.log($scope.data);
            });
    })
    .controller('homeCtrl', function($scope, $stateParams, $http) {
        console.log('Home Ctrl');
    })
    .controller('menuCtrl', function($scope, $stateParams, $http) {
        console.log('Menu Ctrl');
    });