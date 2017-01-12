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
	        __webpack_require__(7),
	        __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
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
	    __webpack_require__(6)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(enrollmentModule, homeCtrl, menuCtrl, PlaylistsCtrl) {
	    'use strict';
	    enrollmentModule.controller('PlaylistsCtrl', PlaylistsCtrl);
	    enrollmentModule.controller('homeCtrl', homeCtrl);
	    enrollmentModule.controller('menuCtrl', menuCtrl);
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
	    return function($scope, $stateParams, $http) { 
	        
	        $scope.name="abhi";  
	        $http.get("http://services.groupkt.com/state/get/IND/UP")
	            .then(function(response) {
	                $scope.data = response.data;
	                console.log($scope.data);
	            });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(8),
	    __webpack_require__(9)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(onboardingModule, onboardingCtrl) {
	    'use strict';
	    onboardingModule.controller('onboardingCtrl', onboardingCtrl);
	    console.log('Onboarding Controller Binder');
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return angular.module('nedBank.onBoarding', []);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {  
	    'use strict';  
	    return function($scope, $stateParams, $http) {   
	        console.log('onboardingCtrl Ctrl');
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
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

/***/ }
/******/ ]);