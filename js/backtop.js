function backTop(id) {
	var $ = window.jQuery;
	if (!$) {
		alert('jQuery libarary is nessary');
		return;
	}
	
	document.onscroll = function(ev) {
		if ($(document).scrollTop() > 0) {
			$('#'+id).show();
		} else {
			$('#'+id).hide();
		}
	};
	
	$('#'+id).click(function() {
		var moveId = setInterval(function() {
			$(document).scrollTop($(document).scrollTop() / 1.2);
			if ($(document).scrollTop() < 1)
				clearInterval(moveId);
		}, 10);
	});
};