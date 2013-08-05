function key(options) {
	this.id = options.id;
	this.ts = options.ts;
	var msg = options.data;
		
	var e = document.getElementById(this.id);
	if (!e) {
		alert('Invalid element identified by ' + this.id);
		return;
	}
	
	if (typeof(window.jQuery) == 'undefined') {
		alert('Can not find jQuery libarary');
		return;
	}
	
	e.draggable = "true";
	e.ondragstart = dragstart;
	
	if (this.ts) { //target select element
		var tss = window.jQuery(this.ts);
		for (var len = 0; len < tss.length; len++) {
			var e = tss[len];
			e.ondragover = allowDrop;
			e.ondrop = drop;
		}
	}
	
	function dragstart(ev) {
		ev.dataTransfer.setData('msg', msg);
		if (options.drag)
			options.drag(ev);
	}
	
	function drop(ev) {
		ev.preventDefault();
		if (options.drop)
			options.drop(ev);
	}
	
	function allowDrop(ev) {
		if (options.allowDrop) {
			if (options.allowDrop(ev)) {
				ev.preventDefault();
			}
		}
	}
}