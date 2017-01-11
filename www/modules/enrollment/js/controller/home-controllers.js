define([], function() {  
    'use strict';  
    return function($scope, $stateParams, $http) {   
        $scope.name = 'Krishank';
        console.log('Home Ctrl');
    };
});

// define([], function() {  
//     'use strict';  

//     var homeControllers = {
//         defaults: 1,
//         someMethod: function($scope, $stateParams, $http) {
//             $scope.name = 'Krishank';
//             console.log('Home Ctrl');
//         }
//     };
//     homeControllers.someMethod();
//     return homeControllers;
// });