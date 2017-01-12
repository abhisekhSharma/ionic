define([], function() {
    'use strict';
    return function($scope, $stateParams, $http) { 
        
        $scope.name="abhi";  
        $http.get("http://services.groupkt.com/state/get/IND/UP")
            .then(function(response) {
                $scope.data = response.data;
                console.log($scope.data);
            });
    };
});