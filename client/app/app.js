System.register(["lodash","angular","angular-animate","angular-material","angular-material/angular-material.min.css!","angular-ui-router","angular-cookies","oclazyload","common/utils/routing","common/services/authBroadcast.service","common/services/authInterceptor.service","common/services/auth.service","config/config","common/directives/loginModal/loginModal","common/directives/loginComponent/loginComponent","common/core.css!","app/home/home"],function(_export){var angular,routing,authBroadcastService,authInterceptorService,authService,configService,loginModal,loginComponent,homeModule,app;return{setters:[function(_lodash){},function(_angular){angular=_angular["default"]},function(_angularAnimate){},function(_angularMaterial){},function(_angularMaterialAngularMaterialMinCss){},function(_angularUiRouter){},function(_angularCookies){},function(_oclazyload){},function(_commonUtilsRouting){routing=_commonUtilsRouting.routing},function(_commonServicesAuthBroadcastService){authBroadcastService=_commonServicesAuthBroadcastService["default"]},function(_commonServicesAuthInterceptorService){authInterceptorService=_commonServicesAuthInterceptorService["default"]},function(_commonServicesAuthService){authService=_commonServicesAuthService["default"]},function(_configConfig){configService=_configConfig["default"]},function(_commonDirectivesLoginModalLoginModal){loginModal=_commonDirectivesLoginModalLoginModal["default"]},function(_commonDirectivesLoginComponentLoginComponent){loginComponent=_commonDirectivesLoginComponentLoginComponent["default"]},function(_commonCoreCss){},function(_appHomeHome){homeModule=_appHomeHome["default"]}],execute:function(){"use strict";app=angular.module("olrpg",["ui.router","oc.lazyLoad","ngMaterial","ngCookies","ngAnimate",authBroadcastService.name,authInterceptorService.name,authService.name,configService.name,loginModal.name,loginComponent.name,homeModule.name]),app.config(routing(app)),app.config(["$urlRouterProvider","$locationProvider","$stateProvider","$httpProvider","$mdThemingProvider","$mdIconProvider",function($urlRouterProvider,$locationProvider,$stateProvider,$httpProvider,$mdThemingProvider,$mdIconProvider){$locationProvider.html5Mode({enabled:!0,requireBase:!1}),$httpProvider.useApplyAsync(!0),$urlRouterProvider.otherwise("/"),$mdThemingProvider.theme("default").primaryPalette("purple",{"default":"700","hue-1":"300","hue-2":"500","hue-3":"50"}).accentPalette("light-green"),$mdThemingProvider.theme("dark").primaryPalette("purple",{"default":"700","hue-1":"300","hue-2":"500","hue-3":"50"}).dark(),$mdIconProvider.defaultIconSet("assets/svg/sprite.stack.svg"),$stateProvider.state("logout",{url:"/logout",controller:["$scope","$state","Auth",function($scope,$state,Auth){Auth.logout(),$scope.$evalAsync(function(){$state.go("login",{},{reload:!0})})}],authenticate:!1})}]),app.run(["$rootScope","$state","$timeout","Auth",function($rootScope,$state,$timeout,Auth){$rootScope.$on("$stateChangeStart",function(event,next){"login"===next.name||"logout"===next.name||next["abstract"]||Auth.setNextRoute(next),next.authenticate&&Auth.isLoggedInAsync(function(loggedIn){next.authenticate&&!loggedIn?(event.preventDefault(),$state.go("login",{},{reload:!0})):next.authenticate&&loggedIn&&next.name!==Auth.getNextRoute().name&&$state.go(next.name,{},{reload:!1})})})}]),angular.element(document).ready(function(){angular.bootstrap(document.body,[app.name],{})}),_export("default",app)}}});