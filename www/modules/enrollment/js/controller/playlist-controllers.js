define([], function() {
    'use strict';

    function playListControllers($scope, $stateParams, $http) {
        $scope.name = 'Sudhanshu';  
        $http.get("http://services.groupkt.com/state/get/IND/UP")
            .then(function(response) {
                $scope.data = response.data;
                console.log($scope.data);
            });
    };

    return playListControllers;
});

// define([], function($scope, $stateParams, $http) {
//     'use strict';

//     var playListControllers = {
//         test: 1,
//         getData: function() {
//             $http.get("http://services.groupkt.com/state/get/IND/UP")
//             .then(function(response) {
//                 $scope.data = response.data;
//                 console.log($scope.data);
//             });
//         }
//     };
//     return playListControllers;
// });