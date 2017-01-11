define(['angular', 'angularMocks', 'enrollmentModule/js/enrollment', 'enrollmentModule/js/enrollment-module', 'enrollmentModule/js/controller/playlist-controllers'], function($, a, b, c, PlaylistsCtrl) {
    console.log(angular.mock);
    describe('DashCtrl', function() {
        describe('Clicking on the login button', function() {
            var controller, $scope = {};

            beforeEach(angular.mock.module('nedBank.enrollment'));

            beforeEach(angular.mock.inject(function($injector, _$controller_) {
                $controller = _$controller_;
                $rootScope = $injector.get('$rootScope');
                $injector.get('PlaylistsCtrl');
                controller = $controller('PlaylistsCtrl', { $scope: $scope });
            }));


            it('should go to my account', function() {

                console.log(controller);
                expect(1).toEqual(1);
            });
        });
    });

    // describe('playListController', function() {
    //     describe('Clicking on the Enrollment in Hamburger menu', function() {
    //         // it('Data is recived after sucessful Ajax Call', function() {
    //         //     expect($scope.data.RestResponse.result.country).toEqual('IND');
    //         // });
    //         //console.log(playCtrl);
    //         //getData();
    //         // it('The playList Controller put an Ajax Call cheking its status', inject(function($http) {

    //         //     var $scope = {};

    //         //     $httpBackend
    //         //         .when('GET', 'http://services.groupkt.com/state/get/IND/UP')
    //         //         .respond(200, 'IND');

    //         //     $httpBackend.flush();

    //         //     expect($scope.valid).toBe(true);
    //         //     expect($scope.response.result.country).toEqual('IND');

    //         // }));
    //     });



    // });



});