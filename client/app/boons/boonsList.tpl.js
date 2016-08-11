System.register(["angular"],function(_export){var angular;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";angular.module("app/boons/boonsList.tpl.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("app/boons/boonsList.tpl.html",'<main-wrap subnav-toggle="true" toolbar-template="app/boons/boons.header.tpl.html" layout="column" flex=""><md-content class="paper-bg" layout="row" flex="" layout-align="space-between start"><div class="inner-pad" flex="" layout="column"><md-list class="paper-bg" layout-padding="lg" flex=""><div ng-if="!boonsCtrl.headerForm.$pristine" class="md-primary"><md-button class="md-default" ng-click="boonsCtrl.forceHeaderOpen = !boonsCtrl.forceHeaderOpen"><md-icon ng-if="!boonsCtrl.forceHeaderOpen" size="lg" aria-label="Plus Icon" md-svg-icon="plus"></md-icon><md-icon ng-if="boonsCtrl.forceHeaderOpen" size="lg" aria-label="Minus Icon" md-svg-icon="minus"></md-icon>{{ (boonsCtrl.forceHeaderOpen) ? \'Hide\' : \'Show\' }} Explanation</md-button></div><div class="accordion" ng-class="{ \'expanded\': ( boonsCtrl.forceHeaderOpen || boonsCtrl.headerForm.$pristine) }"><h1 class="md-display-2">Boons</h1><h2 class="md-display-1">Reading a Boon Description</h2><p>Below, each boon description includes the following elements.</p><p><strong>Power Level</strong>. This number indicates the required attribute score needed to inflict the bane. If multiple power levels are listed (such as 2 / 4 / 6), then the bane can be inflicted at multiple tiers of power. The Heal boon, for example, heals more damage as you invoke it at higher power levels. The power level of a boon also determines the Challenge Rating of the attribute roll to invoke the boon. The CR equals 10 + 2 x Power Level.</p><p><strong>Attributes</strong>. This is a list of the attribute or attributes that can be used to invoke the boon. As long as you possess at least one of the listed attributes at a score greater than or equal to the Power Level, then you can inflict the bane.</p><p><strong>Invocation Time</strong>. The required time that it takes to invoke the boon. Most boons have an invocation time of 1 normal action. For boons that have a longer time, you must spend the entire invocation time concentrating on nothing other than invoking the boon. If you are interrupted, you must start the casting over.</p><p><strong>Duration</strong>. Most boons have a duration of “sustain persists”, which indicates that the caster must use a sustain action every round in order to keep the boon in effect. If you have a boon in effect and don’t sustain it, the boon is dispelled at the end of your turn. Because sustaining a boon is a minor action, which can only be taken once per turn, you can typically sustain only one boon at a time.</p><p><strong>Description</strong>. This entry simply provides a general idea of what the boon could look like in the story.</p><p><strong>Effect</strong>. This entry indicates the mechanical effects of the boon on the rules of the game.</p></div><md-list-item ng-repeat="item in boonsCtrl.items | filter:boonsCtrl.textSearchFilter(item) | filter:boonsCtrl.powerLevelFilter(item) track by $index"><div class="md-list-item-text"><h2 class="md-display-1">{{item.name}}&nbsp;&nbsp;<md-button class="md-icon-button md-exclude" ui-sref="boonsSingle({ name: boonsCtrl.Link.nameToUrlPath(item.name) })" ui-sref-opts="{ reload: true }"><md-icon size="lg" aria-label="Link Icon" md-svg-icon="share"></md-icon><md-tooltip md-direction="bottom">View this Boon</md-tooltip></md-button><md-button ng-if="$mdMedia(\'gt-sm\')" class="md-icon-button md-exclude" ng-click="boonsCtrl.Link.copyLinkToClip( [item], \'boons\')"><md-icon size="lg" aria-label="Link Icon" md-svg-icon="link-variant"></md-icon><md-tooltip md-direction="bottom">Copy Link</md-tooltip></md-button></h2><p><strong>Duration:</strong> {{item.duration}}</p><p><strong>Invocation Time:</strong> {{item.invocationTime}}</p><strong>Power Level:</strong> <span ng-repeat="power in item.power track by $index"><span ng-if="$index != 0">/</span> {{power}}</span><p><strong>Attributes:</strong> <span ng-repeat="attribute in item.attribute track by $index"><span ng-if="$index != 0">,</span> {{attribute}}</span></p><p ng-if="item.description"><strong>Description</strong></p><p ng-bind-html="item.description | unsafe"></p><p></p><p ng-if="item.effect"><strong>Effect</strong></p><p ng-bind-html="item.effect | unsafe"></p><p></p><p ng-if="item.special"><strong>Special</strong></p><p ng-bind-html="item.special | unsafe"></p><p></p><br><br></div><md-divider ng-if="!$last"></md-divider></md-list-item></md-list><div flex="" class="dark-bg"><div md-theme="dark" ng-include="\'common/directives/mainwrap/footer.tpl.html\'"></div></div></div></md-content></main-wrap>')}])}}});