define([
    './enrollment-module',
    './controller/home-controllers',
    './controller/menu-controllers',
    './controller/playlist-controllers'
], function(enrollmentModule, homeCtrl, menuCtrl, PlaylistsCtrl) {
    'use strict';
    enrollmentModule.controller('PlaylistsCtrl', PlaylistsCtrl);
    enrollmentModule.controller('homeCtrl', homeCtrl);
    enrollmentModule.controller('menuCtrl', menuCtrl);
    console.log('Enrollemnt Controller Binder');
});