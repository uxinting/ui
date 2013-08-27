function page(len, id) {
	this.id = id;
	this.len = len;

	var $ = window.jQuery;
	if (typeof($) == 'undefined') {
		alert('jQuery is necessary');
		return;
	}
	
	var trs = $('#'+id).find('tr');
	this.__current = 1;
	this.__first = 1;
	this.__last = parseInt(trs.length / len) + 1;
	
	update(this.__current);
	
	
	this.nextPage = function() {
		this.__current = this.__current + 1;
		if (this.__current > this.__last) this.__current = this.__first;
		update(this.__current);
	}
	
	this.prevPage = function() {
		this.__current = this.__current - 1;
		if (this.__current < this.__first) this.__current = this.__last;
		
		update(this.__current);
	}
	
	this.toPage = function(pg) {
		if (pg > this.__last) pg = this.__last;
		if (pg < this.__first) pg = this.__first;
		this.__current = pg;
		update(this.__current);
	}
	
	function update(p) {
		var cur_f = (p-1) * len;
		var cur_l = p*len;
		
		for (var i = 0; i < trs.length; i++) {
			if (cur_f <= i && cur_l > i) {
				$(trs[i]).show();
			} else {
				$(trs[i]).hide();
			}
		}
	}
}