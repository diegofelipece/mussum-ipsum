'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();

		    // mIpsum -> set the function of trigger call
			$('#mIpsumTrigger').on('click', function(event) {
				event.preventDefault();

				// console.log('há!');

				var turns = $('#turns').val(),
					pTagSet = false,
					hTagSet = false;
				mIpsumTrigger(turns, pTagSet, hTagSet);
			});

		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();
