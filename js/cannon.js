"use strict";
var app = app || {};







app.cannon = {
	
	image:undefined,
	sx:0,
	sy:0,
	sw:47,
	sh:50,
	frame:1,
	ticksperframe: 15,
	tickCount:0,
	player: undefined,
	main: undefined,
	x: 437,
	y: 519,
	w: 46,
	h: 50,
	x2: 602,
	y2: 521,
	
	x3: 283,
	y3: 520,
	
	x4:712,
	y4:526,
	
	x5:754,
	y5:526,
	
	x6:665,
	y6:526,
	
	x7:620,
	y7:526,
	
	
	
	init: function (){
	
		this.player = app.player;
		this.main = app.main;
	
	},
	animate: function (){
	//console.log(this.frame);
	this.tickCount ++;
	if(this.tickCount > this.ticksperframe){
		this.tickCount = 0;
		this.frame ++;
	
	
	}
	
	if(this.frame == 1){
		this.sx = 0;
		this.sy = 0;
		this.sw = 47;
		this.sh = 50;
	
	
	}
	if(this.frame > 2){
		this.sx = 47;
		this.sy = 0;
		this.sw = 47;
		this.sh = 50;
	
	
	}
	
	if(this.frame >= 4){
	
		this.frame = 1;
	
	}
	
	
	},
	
	draw1: function(ctx){
		
			
			
			
	
	
	},
	draw2: function(ctx){
		
		
	
	
	},
	draw3: function(ctx){
	
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x,this.y,this.w,this.h);	
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x2,this.y2,this.w,this.h);
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x3,this.y3,this.w,this.h);
	
	
	},
	draw5: function(ctx){
	
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x4,this.y4,this.w,this.h);	
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x5,this.y5,this.w,this.h);	
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x6,this.y6,this.w,this.h);	
		ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, this.x7,this.y7,this.w,this.h);	
	
	
	}
	
	
	



};