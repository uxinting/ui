!function($) {
	$(function() {
	
		//Back to top icon functions
		$(document).scroll(function() {
			if ($(this).scrollTop() > 0) {
				$('.icon-backtop').show();
			} else {
				$('.icon-backtop').hide();
			}
		});
		
		$('.icon-backtop').click(function() {
			var id = setInterval(moveTop, 10);
			function moveTop() {
				$(document).scrollTop($(document).scrollTop() / 1.2);
				if ($(document).scrollTop() < 1)
					clearInterval(id);
			}
		});
		
		//tag p highlight
		$(document).mousemove(function(e) {
			var yy = e.clientY;
			var y = e.pageY;
			if ($('.article').data('highlight') != true) return;
			
			var ps = $('.article').find('p');
			for (var i = 0; i < ps.length; i++) {
				var ot = ps[i].offsetTop;
				if (y > ot && y < ot + ps[i].clientHeight) {
					$(ps[i]).addClass('highlight').css('background-position', '0px ' + yy + 'px');
				} else {
					$(ps[i]).removeClass('highlight');
				}
			}
		});
	});
}(window.jQuery);