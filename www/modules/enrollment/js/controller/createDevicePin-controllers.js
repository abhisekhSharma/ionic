define([], function() {  
    'use strict';  
    return function($scope, $state) {
        var vm = this;
        vm.pageName = "Create NedBank Password";
        vm.goToNextPage = function(devicePin) {
            $state.go('app.nedBankOTP');
        };
        console.log('Create NedBank Password', $scope, vm);

    };
});