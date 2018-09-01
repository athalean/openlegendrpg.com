"use strict";System.register(["angular"],function(_export,_context){var angular,fileTypeModule;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){fileTypeModule=angular.module("fileType.js",[]),fileTypeModule.factory("FileType",function(){var map={folder:{name:"Folder",icon:"folder"},image:{name:"Image",icon:"file-image"},video:{name:"Video",icon:"file-video"},pdf:{name:"PDF",icon:"file-pdf"},file:{name:"File",icon:"file"}},getType=function(item){return"scala:folder"===item.primaryType?map.folder:"scala:file"===item.primaryType?/\.jpg|\.jpeg|\.png|\.gif/.test(item.name)?map.image:/\.mpg|\.mpeg|\.mp4|\.mov/.test(item.name)?map.video:/\.pdf/.test(item.name)?map.pdf:map.file:void 0};return{map:map,getType:getType,getName:function(item){return getType(item).name},getIcon:function(item){return getType(item).icon}}}),_export("default",fileTypeModule)}}});