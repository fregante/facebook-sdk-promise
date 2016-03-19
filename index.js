'use strict';
import loadScript from 'tiny-load-script';
import Console from 'console-class';
const console = new Console('FB API', false);
console.color = '#3b5998';
export {console as logging}; // logging.on() or logging.off();

let API;

/**
 * Facebook API getter
 * @return {Promise} Once resolved it will yield the Facebook API object, FB
 * @example
 * loadAPI().then(FB => console.log('FB has loaded'))
 */

export default function /* loadAPI */ () {
	API = API || new Promise(function (resolve) {
		function apiReady () {
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