var TouchUI = function() {
	this.core.init.call(this);
	this.knockout.viewModel.call(this);
	this.knockout.bindings.call(this);
	return this.core.bridge.call(this);
};

TouchUI.prototype = {
	constructor: TouchUI,
	isActive: ko.observable(false),

	settings: {
		id: "touch",
		version: 0,
		requiredBootloaderVersion: 1,

		isFullscreen: ko.observable(false),
		isTouchscreen: ko.observable(false),

		isEpiphanyOrKweb: (window.navigator.userAgent.indexOf("AppleWebKit") !== -1 && window.navigator.userAgent.indexOf("ARM Mac OS X") !== -1),
		isChromiumArm: (window.navigator.userAgent.indexOf("X11") !== -1 && window.navigator.userAgent.indexOf("Chromium") !== -1 && window.navigator.userAgent.indexOf("armv7l") !== -1 || window.navigator.userAgent.indexOf("TouchUI") !== -1),

		hasFullscreen: ko.observable(document.webkitCancelFullScreen || document.msCancelFullScreen || document.oCancelFullScreen || document.mozCancelFullScreen || document.cancelFullScreen),
		hasLocalStorage: ('localStorage' in window),
		hasTouch: ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0),

		canBoot: {
			resolution: $("#touchui_auto_load_resolution").length > 0,
			touch: $("#touchui_auto_load_touch").length > 0
		},

		whatsNew: ko.observable(false)
	},

	core: {},
	components: {},
	knockout: {},
	plugins: {},
	animate: {
		isHidebarActive: ko.observable(false)
	},
	DOM: {
		create: {},
		move: {},
		overwrite: {}
	},
	scroll: {

		defaults: {
			iScroll: {
				eventPassthrough: 'horizontal',
				scrollbars: true,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: "scale",
				fadeScrollbars: true
			}
		},

		iScrolls: {},
		currentActive: null
	}

}
