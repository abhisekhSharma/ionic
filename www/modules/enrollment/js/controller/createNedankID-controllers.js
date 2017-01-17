define([], function() {  
    'use strict';  
    return function($scope) {
        var vm = this;
        vm.pageName = "NedBank ID";
        vm.goToPasswordPage = function(userName) {
            debugger;
            $state.go('app.createNedbankPassword');
        };
        console.log('NedBank ID', $scope, vm);

    };
});