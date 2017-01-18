define([], function() {  
    'use strict';  
    return function($scope, $state) {
        var vm = this;
        vm.pageName = "Create NedBank ID page";
        vm.goToPasswordPage = function(userName) {
            debugger;
            $state.go('app.createNedbankPassword');
        };

        console.log('Create NedBank ID', $scope, vm);

    };
});