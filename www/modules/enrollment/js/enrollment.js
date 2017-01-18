define([
    './enrollment-module',
    './controller/home-controllers',
    './controller/menu-controllers',
    './controller/playlist-controllers',
    './controller/nedBankID-controllers',
    './controller/createNedbankID-controllers',
    './controller/createNedbankPassword-controllers',
    './controller/nedBankOTP-controllers',
    './controller/createDeviceName-controllers',
    './controller/termsAndConditions-controllers',
    './controller/createDevicePin-controllers'

], function(enrollmentModule, homeCtrl, menuCtrl, PlaylistsCtrl, nedBankID, createNedbankID, createNedbankPassword, nedBankOTP, createDeviceName, termsAndConditions, createDevicePin) {
    'use strict';
    enrollmentModule.controller('PlaylistsCtrl', PlaylistsCtrl);
    enrollmentModule.controller('homeCtrl', homeCtrl);
    enrollmentModule.controller('menuCtrl', menuCtrl);
    enrollmentModule.controller('nedBankID', nedBankID);
    enrollmentModule.controller('createNedbankID', createNedbankID);
    enrollmentModule.controller('createNedbankPassword', createNedbankPassword);
    enrollmentModule.controller('nedBankOTP', nedBankOTP);
    enrollmentModule.controller('createDeviceName', createDeviceName);
    enrollmentModule.controller('termsAndConditions', termsAndConditions);
    enrollmentModule.controller('createDevicePin', createDevicePin);
    console.log('Enrollemnt Controller Binder');
});