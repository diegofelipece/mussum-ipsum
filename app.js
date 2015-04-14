$(document).ready(function() {

    // set the function of trigger call
	$('#mIpsumTrigger').on('click', function(event) {
		event.preventDefault();

		// console.log('há!');

		var turns = $('#turns').val(),
			pTagSet = false,
			hTagSet = false;
		mIpsumTrigger(turns, pTagSet, hTagSet);
	});
});