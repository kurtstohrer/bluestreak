// Menu.js
// dependencies: app.draw module

"use strict";
var app = app || {};

app.menu = {
color:"#00D5FF",
image: undefined,
	
	
	drawLS: function(ctx){
			
			
			app.draw.border(ctx,110, 389, 280, 56, this.color);
			
		},
	drawLTP: function(ctx){
			
			
			app.draw.border(ctx,110, 456, 280, 56, this.color);
			
		},
	drawBG: function (ctx){
	
		ctx.drawImage(this.image,0, 0, 900, 600);
		
		app.draw.text(ctx,"Created by Kurt Stohrer", 550, 50,20,"Blue");
		app.draw.text(ctx,"Navigate with up and down arrows", 490, 70,20,"Blue");
		app.draw.text(ctx,"Press Enter to Select", 550, 90,20,"Blue");
	},
	
	
};