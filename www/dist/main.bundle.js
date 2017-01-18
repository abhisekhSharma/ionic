/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    'use strict';
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), 
	        __webpack_require__(10),
	        __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    // Ionic Starter App

	    // angular.module is a global place for creating, registering and retrieving Angular modules
	    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	    // the 2nd parameter is an array of 'requires'
	    // 'starter.controllers' is found in controllers.js
	    angular.module('nedBank', ['ionic', 'nedBank.enrollment', 'nedBank.onBoarding','nedBank.route'])

	    .run(function($ionicPlatform) {
	        $ionicPlatform.ready(function() {
	            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	            // for form inputs)
	            if (window.cordova && window.cordova.plugins.Keyboard) {
	                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	                cordova.plugins.Keyboard.disableScroll(true);

	            }
	            if (window.StatusBar) {
	                // org.apache.cordova.statusbar required
	                StatusBar.styleDefault();
	            }
	        });
	    });

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(4),
	    __webpack_require__(5),
	    __webpack_require__(6),
	    __webpack_require__(7),
	    __webpack_require__(16),
	    __webpack_require__(9),
	    __webpack_require__(14),
	    __webpack_require__(17),
	    __webpack_require__(18),
	    __webpack_require__(19)

	], __WEBPACK_AMD_DEFINE_RESULT__ = function(enrollmentModule, homeCtrl, menuCtrl, PlaylistsCtrl, nedBankID, createNedbankID, createNedbankPassword, nedBankOTP, createDeviceName, termsAndConditions, createDevicePin) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return angular.module('nedBank.enrollment', []);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope) {
	        $scope.a = 'Ionic' ;  
	        var vm = this;
	        vm.pageName="firstPage";
	        //console.log('Home Ctrl', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(require, factory) {
	    'use strict';
	    return function($scope, $stateParams, $http) {   
	        console.log('Menu Ctrl');
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    'use strict';

	    function playListControllers($scope, $stateParams, $http) {
	        $scope.name = 'Sudhanshu';  
	        $http.get("http://services.groupkt.com/state/get/IND/UP")
	            .then(function(response) {
	                $scope.data = response.data;
	                console.log($scope.data);
	            });
	    }

	    return playListControllers;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope) {
	        var vm = this;
	        vm.pageName = "NedBank ID";
	        console.log('NedBank ID', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $state) {
	        var vm = this;
	        vm.pageName = "Create NedBank Password";
	        vm.goToNextPage = function(password) {
	            debugger;
	            $state.go('app.nedBankOTP');
	        };
	        console.log('Create NedBank Password', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(11),
	    __webpack_require__(12)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(onboardingModule, onboardingCtrl) {
	    'use strict';
	    onboardingModule.controller('onboardingCtrl', onboardingCtrl);
	    console.log('Onboarding Controller Binder');
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return angular.module('nedBank.onBoarding', []);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $stateParams, $http) {   
	        console.log('onboardingCtrl Ctrl');
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  

	    return angular.module('nedBank.route', [])
	        .config(function($stateProvider, $urlRouterProvider) {
	            $stateProvider
	                .state('app', {
	                    url: '/app',
	                    templateUrl: 'modules/enrollment/templates/menu.html',
	                    abstract: true
	                })

	            .state('app.home', {
	                    url: '/home',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/home.html',
	                            controller: 'homeCtrl as vm'
	                        }
	                    }
	                })
	                .state('app.nedBankID', {
	                    url: '/nedBankID',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/ned-bank-id.html',
	                            controller: 'nedBankID as vm'
	                        }
	                    }
	                })
	                .state('app.createNedbankID', {
	                    url: '/createNedbankID',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/create-ned-bank-id.html',
	                            controller: 'createNedbankID as vm'
	                        }
	                    }
	                })
	                .state('app.createNedbankPassword', {
	                    url: '/createNedbankPassword',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/create-ned-bank-password.html',
	                            controller: 'createNedbankPassword as vm'
	                        }
	                    }
	                })
	                .state('app.nedBankOTP', {
	                    url: '/nedBankOTP',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/ned-bank-otp.html',
	                            controller: 'nedBankOTP as vm'
	                        }
	                    }
	                })
	                .state('app.createDeviceName', {
	                    url: '/createDeviceName',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/create-device-name.html',
	                            controller: 'createDeviceName as vm'
	                        }
	                    }
	                })
	                .state('app.termsAndConditions', {
	                    url: '/termsAndConditions',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/terms-and-conditions.html',
	                            controller: 'termsAndConditions as vm'
	                        }
	                    }
	                })
	                .state('app.createDevicePin', {
	                    url: '/createDevicePin',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/create-device-pin.html',
	                            controller: 'createDevicePin as vm'
	                        }
	                    }
	                })
	                .state('app.congrats', {
	                    url: '/congrats',
	                    views: {
	                        'menuContent': {
	                            templateUrl: 'modules/enrollment/templates/congrats.html'
	                        }
	                    }
	                })

	            .state('app.onboarding', {
	                url: '/onboarding',
	                views: {
	                    'menuContent': {
	                        templateUrl: 'modules/onboarding/templates/onboarding.html',
	                        controller: 'onboardingCtrl'
	                    }
	                }
	            })

	            .state('app.playlists', {
	                url: '/playlists',
	                views: {
	                    'menuContent': {
	                        templateUrl: 'modules/enrollment/templates/playlists.html',
	                        controller: 'PlaylistsCtrl'
	                    }
	                }
	            });



	            // if none of the above states are matched, use this as the fallback
	            $urlRouterProvider.otherwise('/app/home');
	        });


	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $state) {
	        var vm = this;
	        vm.pageName = "NedBank OTP page";
	        vm.goToNextPage = function() {
	            $state.go('app.nedBankOTP');
	        };
	        console.log('NedBank OTP page', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $state) {
	        var vm = this;
	        vm.pageName = "Create NedBank ID page";
	        vm.goToPasswordPage = function(userName) {
	            debugger;
	            $state.go('app.createNedbankPassword');
	        };

	        console.log('Create NedBank ID', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $state) {
	        var vm = this;
	        vm.pageName = "Create NedBank Device Name";
	        console.log('Create NedBank Device Name', $scope, vm);
	        vm.goToNextPage = function() {
	            $state.go('app.termsAndConditions');
	        };
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $state) {
	        var vm = this;
	        vm.pageName = "NedBank Terms and Conditions page";

	        console.log('NedBank Terms and Conditions page', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $state) {
	        var vm = this;
	        vm.pageName = "Create NedBank Password";
	        vm.goToNextPage = function(devicePin) {
	            debugger;
	            $state.go('app.nedBankOTP');
	        };
	        console.log('Create NedBank Password', $scope, vm);

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);