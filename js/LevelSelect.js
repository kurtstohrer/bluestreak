
// dependencies: app.draw module

"use strict";
var app = app || {};

app.levelSelect = {
color:"#00D5FF",
image: undefined,	
	//draw borders for each level on menu
	draw1: function(ctx){
			
			
			app.draw.border(ctx,50, 70, 200, 148, this.color);
			
		},
	draw2: function(ctx){
			
			
			app.draw.border(ctx,350, 70, 200, 148, this.color);
			
		},
	draw3: function(ctx){
			
			
			app.draw.border(ctx,650, 70, 200, 148, this.color);
			
		},
	draw4: function(ctx){
			
			
			app.draw.border(ctx,201, 278, 201, 148, this.color);
			
		},
	draw5: function(ctx){
			
			
			app.draw.border(ctx,501, 279, 199, 149, this.color);
			
	},
	
	drawBG: function (ctx){
	
		ctx.drawImage(this.image,0, 0, 900, 600);
		
		app.draw.text(ctx,"Use Left and Right to navigate press enter to select", 150, 500,20,"white");
	}
	
	
};