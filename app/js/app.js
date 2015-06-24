'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			
		    // mIpsum -> set the function of trigger call
			$('#mIpsumTrigger').on('click', function(event) {
				event.preventDefault();

				// console.log('há!');

				var turns = $('#turns').val(),
					pTagSet = false,
					hTagSet = false;
				mIpsumTrigger(turns, pTagSet, hTagSet);
			});

			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
