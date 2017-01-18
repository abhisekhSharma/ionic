define([], function() {  
    'use strict';  
    return function($scope, $state) {
        var vm = this;
        vm.pageName = "NedBank OTP page";
        vm.goToNextPage = function() {
            $state.go('app.nedBankOTP');
        };
        console.log('NedBank OTP page', $scope, vm);

    };
});