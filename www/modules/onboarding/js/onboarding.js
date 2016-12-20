define([
    './onboarding-module',
    './controller/onboarding-controller'
], function(onboardingModule, onboardingCtrl) {
    'use strict';
    onboardingModule.controller('onboardingCtrl', onboardingCtrl);
    console.log('Onboarding Controller Binder');
});