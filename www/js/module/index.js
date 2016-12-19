define([
    './module',
    './controller/dash',
    './controller/playlist'
], function(module,dash,playlist) {
    'use strict';
    module.controller('DashCtrl',dash); 
    module.controller('PlaylistCtrl',playlist);    
    console.log('controller binder'); 
});