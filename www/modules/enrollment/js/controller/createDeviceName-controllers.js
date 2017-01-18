define([], function() {  
    'use strict';  
    return function($scope, $state) {
        var vm = this;
        vm.pageName = "Create NedBank Device Name";
        console.log('Create NedBank Device Name', $scope, vm);
        vm.goToNextPage = function() {
            $state.go('app.termsAndConditions');
        };
    };
});