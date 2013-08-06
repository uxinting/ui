//For highlight a element's backstage
//params: 
//id
//color default='#f1f1f1'
//height default=100px
//width default=100%
//jquery is nessary
function highLight(options) {
	if (typeof(options) == 'string') {
		this.id = options
	} else {
		this.id = options.id;
	}
	
	var $ = window.jQuery;
	if (!$) {
		alert('jQuery libarary is nessary');
		return;
	}
	
	this.stage = null;
	
	this.offsetTop = function(top) {
		$(this.stage).css({'top': top});
	}
	
	this.offsetLeft = function(left) {
		$(this.stage).css({'left': left});
	}
	
	this.setColor = function(r, g, b) {
		if (typeof(r) == 'undefined' | !r) {
			this.color = '#f1f1f1';
		}
		
		if (typeof(r) == 'string')
			this.color = r;
		
		if (typeof(r) == 'number')
			this.color = rgb(r,g,b);
		
		if (this.stage) {
			$(this.stage).css({backstage: this.color});
		}
	}
	
	this.setHeight = function(h) {
		if (typeof(h) == 'undefined' | !h) {
			h = 100;
		}
		if (typeof(h) == 'number') h = h.toString() + 'px';
		this.height = h.toString();
		
		if (this.stage)
			$(this.stage).css({height: this.height});
	}
	
	this.setWidth = function(w) {
		if (typeof(w) == 'undefined' | !w) w = '100%';
		this.width = w.toString();
		
		if (this.stage)
			$(this.stage).css({width: this.width});
	}
	
	var _this = this;
	this.color = '#f1f1f1';
	this.height = '100px';
	this.width = '100%';
	this.setColor(options.color);
	this.setHeight(options.height);
	this.setWidth(options.width);
	
	var id = this.id;
	var stage = $('<div class="hl-stage"></div>');
	this.stage =stage;
	$('#'+id).append(stage);
	
	$('#'+id+' .hl-ground').mousemove(function(ev) {
		var y = ev.pageY;
		var ot = $(this).offset().top;
		
		if ($('#'+id).data('highlight').toLowerCase() != 'true') {
			$(_this.stage).hide();
			return;
		} else {
			$(_this.stage).show();
		}
		
		$(_this.stage).css({'top': y - ot - parseInt(_this.height)/2 +'px'});
	});
	
	function rgb(r, g, b) {
		var rr = r.toString(16);
		var gg = g.toString(16);
		var bb = b.toString(16);
		
		if (rr.length < 2) rr = '0' + rr;
		if (gg.length < 2) gg = '0' + gg;
		if (bb.length < 2) bb = '0' + bb;
		
		return '#'+rr+gg+bb;
	};
};