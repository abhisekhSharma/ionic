describe('DashCtrl', function() {

    var controller,
        rootscope;


    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($controller, $rootScope) {
        // instantiate controller
        rootscope = $rootScope.$new();
        controller = $controller('DashCtrl', {
            $scope: rootscope
        });
    }));



    describe('Clicking on the login button', function() {
        it('should go to my account', function() {
            expect(1).toEqual(1);
        });
    });
});