define([], function() {  
    'use strict';  
    return function($scope) {
        $scope.a = 'Ionic' ;  
        var vm = this;
        vm.pageName="firstPage";
        //console.log('Home Ctrl', $scope, vm);
    };
});