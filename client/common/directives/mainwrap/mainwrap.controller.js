"use strict";System.register([],function(_export,_context){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var MainwrapCtrl;return{setters:[],execute:function(){_export("default",MainwrapCtrl=function(){function MainwrapCtrl($scope,$timeout,$state,$mdMedia,$mdSidenav,$sce,Auth,Config){_classCallCheck(this,MainwrapCtrl),this.$scope=$scope,this.$state=$state,this.$timeout=$timeout,this.$mdMedia=$mdMedia,this.$mdSidenav=$mdSidenav,"core"===$state.current.name&&(this.$scope.chapterListExpanded=!0),this.Auth=Auth,this.Config=Config,this.Date=Date,this.profileSubnavOpen=!1,$timeout(function(){_.has(window,"twttr")&&twttr.widgets.load()})}return _createClass(MainwrapCtrl,[{key:"toggleSidenav",value:function(menuId){this.$mdSidenav(menuId).toggle()}},{key:"navIsOpen",value:function(menuId){return this.$mdSidenav(menuId).isOpen()}}]),MainwrapCtrl}())}}});