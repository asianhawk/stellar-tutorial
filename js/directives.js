"use strict";

angular.module('MyApp').directive('rdLoading', rdLoading);
function rdLoading() {
	var directive = {
		restrict : 'AE',
		template : '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
	};
	return directive;
};


angular.module('MyApp').directive('rdWidgetBody', rdWidgetBody);
function rdWidgetBody() {
	var directive = {
		requires : '^rdWidget',
		scope : {
			loading : '@?',
			classes : '@?'
		},
		transclude : true,
		template : '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
		restrict : 'E'
	};
	return directive;
};

angular.module('MyApp').directive('rdWidgetFooter', rdWidgetFooter);
function rdWidgetFooter() {
	var directive = {
		requires : '^rdWidget',
		transclude : true,
		template : '<div class="widget-footer" ng-transclude></div>',
		restrict : 'E'
	};
	return directive;
};

angular.module('MyApp').directive('rdWidgetHeader', rdWidgetTitle);
function rdWidgetTitle() {
	var directive = {
		requires : '^rdWidget',
		scope : {
			title : '@',
			icon : '@'
		},
		transclude : true,
		template : '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
		restrict : 'E'
	};
	return directive;
};

angular.module('MyApp').directive('rdWidget', rdWidget);
function rdWidget() {
	var directive = {
		transclude : true,
		template : '<div class="widget" ng-transclude></div>',
		restrict : 'EA'
	};
	return directive;

	function link(scope, element, attrs) {
		/* */
	}
};