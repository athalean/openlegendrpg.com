System.register(["angular","angular-material","common/directives/mainwrap/mainwrap","config/config","./commercialTerms.controller","./commercialTerms.tpl","./commercialTerms.css!"],function(_export){var angular,mainwrap,configService,CommercialTermsCtrl,commercialTermsModule;return{setters:[function(_angular){angular=_angular["default"]},function(_angularMaterial){},function(_commonDirectivesMainwrapMainwrap){mainwrap=_commonDirectivesMainwrapMainwrap["default"]},function(_configConfig){configService=_configConfig["default"]},function(_commercialTermsController){CommercialTermsCtrl=_commercialTermsController["default"]},function(_commercialTermsTpl){},function(_commercialTermsCss){}],execute:function(){"use strict";commercialTermsModule=angular.module("commercialTerms",[mainwrap.name,configService.name,"app/commercialTerms/commercialTerms.tpl.html"]),commercialTermsModule.config(["$stateProvider",function($stateProvider){$stateProvider.state("commercialTerms",{url:"/commercial-terms",templateUrl:"app/commercialTerms/commercialTerms.tpl.html",controller:CommercialTermsCtrl,controllerAs:"commercialTermsCtrl"})}]),_export("default",commercialTermsModule)}}});