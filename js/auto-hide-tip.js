function autoHideTip(id) {
	var $ = window.jQuery;
	if (typeof($) == 'undefined') {
		alert('jQuery libaray is nessary for Auto Hide Tip.');
		return;
	}
	
	$('#'+id).css({
		display: 'block',
		position: 'fixed',
		height: '50px',
		'line-height': '50px',
		padding: '0 10px',
		opacity: 1,
		color: 'blue',
		background: 'rgb(255, 255, 255)',
		top: '200px'
	});
	var offsetLeft = ($(window).width() - $('#'+id).width()) / 2;
	$('#'+id).css({left: offsetLeft+'px'});
	
	this.show = function(time, text) {
		if (typeof(text) == 'string') {
			$('#'+id).text(text);
		}
		$('#'+id).fadeIn(1000);
		setTimeout(function(){
			$('#'+id).fadeOut(1000);
		}, time);	
	}
	
}