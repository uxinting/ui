function colorPicker(options) {
	this.id = options.id;
	var that = this;
	
	var red = 0;
	var green = 0;
	var blue = 0;
	
	//if can't find the element return
	var ele = document.getElementById(this.id);
	if (!ele) {
		alert("Can't find element identified by '" + this.id + "'");
		return;
	}
	
	//resize element
	resize(280, 255);
	
	fillColorGB(getContext(), 0, 0, 5);
	fillColorR(getContext(), 260, 0, 5);
	
	ele.onmousemove = mousemove;
	ele.onclick = click;
	ele.onmouseleave = mouseleave;
	
	function mousemove(e) {
		var rs = getColor(e);
		if (options.onmousemove) {
			options.onmousemove(rgb(rs['red'], rs['green'], rs['blue']));
		}
	};
	
	function click(e) {
		var rs = getColor(e);
		red = rs['red']
		green = rs['green']
		blue = rs['blue']
				
		var r = document.getElementById('canvas_r');
		r.style.top = red - red%5;
		var gb = document.getElementById('canvas_gb');
		gb.style.left = green - green%5;
		gb.style.top = blue - blue%5;
		
		if (options.onclick) {
			options.onclick(rgb(red, green, blue));
		};
	};
	
	function mouseleave(e) {
		var r = document.getElementById('canvas_r');
		var gb = document.getElementById('canvas_gb');
		
		r.style.top = red;
		gb.style.left = green;
		gb.style.top = blue;
		
		if (options.onclick) {
			options.onclick(rgb(red, green, blue));
		}
	};
	
	function getColor(e) {
		var eRect = ele.getBoundingClientRect();
		var x = e.clientX - eRect.left;
		var y = e.clientY - eRect.top;
		
		var rs = {};
		rs['red'] = red;
		rs['green'] = green;
		rs['blue'] = blue;
		
		//red
		if (x >= 260) {
			rs['red'] = y;
		} else if (x > 255) {
			mouseleave(e);
		}
		
		//green and blue
		if ( x <= 250) {
			rs['green'] = x;
			rs['blue'] = y;
		}
		return rs;
	};
	
	//resize the element to 280*260
	function resize(w, h) {
		ele.style.width = w;
		ele.style.height = h;
		ele.style.position = 'relative';
		ele.innerHTML = '<canvas style="float: left;"></canvas>' + 
					'<div style="border: 1px solid white; width: 5px; height: 5px; position: absolute;" id="canvas_gb"></div>' + 
					'<div style="border: 1px solid white; width: 20; height: 5; position: absolute; left: 260px;" id="canvas_r"></div>';
		ele.firstChild.width = w;
		ele.firstChild.height = h;
	};
	
	//return the canvas's context
	function getContext() {
		return ele.firstChild.getContext('2d');
	};
	
	//colors
	function fillColorGB(context, x, y, side) {
		context
		for (var g = x; g < 255; g+=side) {
			for (var b = y; b < 255; b+=side) {
				context.fillStyle = rgb(0, g, b);
				context.fillRect(g, b, side, side);
			}
		};
	};
	
	function fillColorR(context, x, y, side) {
		for (var r = y; r < 255; r+=side) {
			context.fillStyle = rgb(r, 0, 0);
			context.fillRect(x, r, 20, side);
		};
	};
	
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