System.register(["angular"],function(_export){var angular,configServiceModule;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";configServiceModule=angular.module("config.js",[]),configServiceModule.factory("Config",function(){return{timestamp:1473906809440,urlBase:""+window.location.protocol+"//"+window.location.host+"/"}}),_export("default",configServiceModule)}}});