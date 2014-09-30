// Menu.js
// dependencies: app.draw module
// description: singleton object
"use strict";
var app = app || {};

app.complete = {
color:"#00D5FF",
image: undefined,	
	
	draw1: function(ctx){
			
			
			app.draw.border(ctx,378, 443, 201, 68, this.color);
			
		},
	draw2: function(ctx){
			
			
			app.draw.border(ctx,602, 443, 201, 68, this.color);
			
		},
	drawBG: function (ctx){
	
		ctx.drawImage(this.image,0, 0, 900, 600);
	}

	
	
};