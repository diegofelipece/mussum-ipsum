'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			
		    // mIpsum -> set the function of trigger call
		    $('#mipsum').on('submit', function(event) {
		    	event.preventDefault();

		    	var turns = $(this).find('#turns').val(),
					pTagSet = false,
					hTagSet = false;

				// console.log(turns);

				mIpsumTrigger(turns, pTagSet, hTagSet);
		    });

		    // one at load
			mIpsumTrigger(1, false, false);

			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
