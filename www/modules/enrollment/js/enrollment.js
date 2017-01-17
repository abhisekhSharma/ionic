define([
    './enrollment-module',
    './controller/home-controllers',
    './controller/menu-controllers',
    './controller/playlist-controllers',
    './controller/nedBankID-controllers',
    './controller/createNedankID-controllers',
    './controller/createNedbankPassword-controllers'
], function(enrollmentModule, homeCtrl, menuCtrl, PlaylistsCtrl, nedBankID, createNedbankID, createNedankPassword) {
    'use strict';
    enrollmentModule.controller('PlaylistsCtrl', PlaylistsCtrl);
    enrollmentModule.controller('homeCtrl', homeCtrl);
    enrollmentModule.controller('menuCtrl', menuCtrl);
    enrollmentModule.controller('nedBankID', nedBankID);
    enrollmentModule.controller('createNedbankID', createNedbankID);
    enrollmentModule.controller('createNedbankID', createNedankPassword);

    console.log('Enrollemnt Controller Binder');
});