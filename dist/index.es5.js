'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var loadScript = _interopDefault(require('tiny-load-script'));
var Console = _interopDefault(require('console-class'));

var console = new Console('FB API', false);
console.color = '#3b5998';
// logging.on() or logging.off();

var API = void 0;

/**
 * Facebook API getter
 * @return {Promise} Once resolved it will yield the Facebook API object, FB
 * @example
 * loadAPI().then(FB => console.log('FB has loaded'))
 */

function index () /* loadAPI */{
	API = API || new Promise(function (resolve) {
		function apiReady() {
			console.log('Ready');
			resolve(window.FB);
		}
		if (window.FB && window.FB.init) {
			apiReady();
		} else {
			console.log('Waiting to be ready');
			window.fbAsyncInit = apiReady;
			if (!document.querySelector('script[src*="connect.facebook.net"]')) {
				console.warn('Facebook SDK script not found, loading now. Add this in the document to have the API available sooner: \n <script src="//connect.facebook.net/en_US/sdk.js" async></script> ');
				loadScript('//connect.facebook.net/en_US/sdk.js');
			}
		}
	});
	return API;
}

exports.logging = console;
exports['default'] = index;