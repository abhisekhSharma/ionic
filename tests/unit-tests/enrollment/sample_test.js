
define(['../../../www/js/app.js'], function(app) {
    
    describe('DashCtrl', function() {
        
        beforeEach(angular.mock.module('nedBank.enrollment'));
       
       var controller
        beforeEach(angular.mock.inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('homeCtrl', {$scope: scope});
        }));
        

        describe('home controller', function() {
            it('should have the scope variable', function() {
                expect(controller.pageName).toEqual('firstPage');


            });
        });
    });

});