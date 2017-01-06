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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	angular.module('starter', ['ionic', 'starter.controllers'])

	.run(function($ionicPlatform) {
	    $ionicPlatform.ready(function() {
	        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	        // for form inputs)
	        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	            cordova.plugins.Keyboard.disableScroll(true);

	        }
	        if (window.StatusBar) {
	            // org.apache.cordova.statusbar required
	            StatusBar.styleDefault();
	        }
	    });
	})

	.config(function($stateProvider, $urlRouterProvider) {

	    // Ionic uses AngularUI Router which uses the concept of states
	    // Learn more here: https://github.com/angular-ui/ui-router
	    // Set up the various states which the app can be in.
	    // Each state's controller can be found in controllers.js
	    $stateProvider

	    // setup an abstract state for the tabs directive
	        .state('tab', {
	        url: '/tab',
	        abstract: true,
	        templateUrl: 'templates/tabs.html'
	    })

	    // Each tab has its own nav history stack:

	    .state('tab.dash', {
	        url: '/dash',
	        views: {
	            'tab-dash': {
	                templateUrl: 'templates/tab-dash.html',
	                controller: 'DashCtrl'
	            }
	        }
	    })

	    .state('tab.chats', {
	            url: '/chats',
	            views: {
	                'tab-chats': {
	                    templateUrl: 'templates/tab-chats.html',
	                    controller: 'ChatsCtrl'
	                }
	            }
	        })
	        .state('tab.chat-detail', {
	            url: '/chats/:chatId',
	            views: {
	                'tab-chats': {
	                    templateUrl: 'templates/chat-detail.html',
	                    controller: 'ChatDetailCtrl'
	                }
	            }
	        })

	    .state('tab.account', {
	            url: '/account',
	            views: {
	                'tab-account': {
	                    templateUrl: 'templates/tab-account.html',
	                    controller: 'AccountCtrl'
	                }
	            }
	        })
	        .state('tab.playlists', {
	            url: '/playlists',
	            views: {
	                'tab-account': {
	                    templateUrl: 'templates/playlists.html',
	                    controller: 'PlaylistCtrl'
	                }
	            }
	        })





	    // if none of the above states are matched, use this as the fallback
	    $urlRouterProvider.otherwise('/tab/dash');
	    // $urlRouterProvider.otherwise('/app/playlists');

	});


	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(3),
	    __webpack_require__(4),
	    __webpack_require__(5)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(module,dash,playlist) {
	    'use strict';
	    module.controller('DashCtrl',dash); 
	    module.controller('PlaylistCtrl',playlist);    
	    console.log('controller binder'); 
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    'use strict';
	    return angular.module('starter.controllers', []);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    'use strict';
	    return function($scope) {
	    var vm = this;
	    console.log('dashctrl');
	}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    'use strict';
	    return function($scope, $stateParams, $http) {
	    $http.get("http://services.groupkt.com/state/get/IND/UP")
	        .then(function(response) {
	            $scope.data = response.data;
	            console.log($scope.data);
	        });
	}
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);