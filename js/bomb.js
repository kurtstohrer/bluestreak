"use strict";
var app = app || {};
var b1 = [];
var b2 = [];
var b3 = [];
var b4 = [];
var b5 = [];
var b0 = [];

//Level 2
b0.push({
		x: 450,
		y: 50,
		width: 50,
		height: 50
	});
b1.push({
		x: 840,
		y: 155,
		width: 50,
		height: 50
	});
b2.push({
		x: 624,
		y: 62,
		width: 50,
		height: 50
	});
b3.push({
		x: 849,
		y: 210,
		width: 50,
		height: 50
	});
b4.push({
		x: 830,
		y: 491,
		width: 50,
		height: 50
	});
b5.push({
		x: 828,
		y: 70,
		width: 50,
		height: 50
	});

app.bomb = {
	
	image:undefined,
	sx:0,
	sy:0,
	sw:51,
	sh:50,
	frame:1,
	ticksperframe: 15,
	tickCount:0,
	player: undefined,
	main: undefined,
	
	
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
		this.sw = 50;
		this.sh = 50;
	
	
	}
	if(this.frame == 2){
		this.sx = 0;
		this.sy = 0;
		this.sw = 50;
		this.sh = 50;
	
	
	}
	if(this.frame == 3){
		this.sx =  50;
		this.sy = 0;
		this.sw = 50;
		this.sh = 50;
	
	
	}
	if(this.frame == 4){
		this.sx = 0;
		this.sy = 0;
		this.sw = 50;
		this.sh = 50;
	
	
	}
	if(this.frame >= 5){
	
		this.frame = 1;
	
	}
	
	
	},
	draw0: function(ctx){
		
			ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b0[0].x,b0[0].y,b0[0].width,b0[0].height);	
			//ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[1].x,b2[1].y,b2[1].width,b2[1].height);
			for(var s =0; s< b0.length; s++){
			this.colCheck(this.player, b0[s]);
		}
			
			
	
	
	},
	draw1: function(ctx){
		
			ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b1[0].x,b1[0].y,b1[0].width,b1[0].height);	
			//ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[1].x,b2[1].y,b2[1].width,b2[1].height);
			for(var s =0; s< b1.length; s++){
			this.colCheck(this.player, b1[s]);
		}
			
			
	
	
	},
	draw2: function(ctx){
		
			ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[0].x,b2[0].y,b2[0].width,b2[0].height);	
			//ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[1].x,b2[1].y,b2[1].width,b2[1].height);
			for(var s =0; s< b2.length; s++){
			this.colCheck(this.player, b2[s]);
		}
	
	
	},
	draw3: function(ctx){
		
			ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b3[0].x,b3[0].y,b3[0].width,b3[0].height);	
			//ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[1].x,b2[1].y,b2[1].width,b2[1].height);
			for(var s =0; s< b3.length; s++){
			this.colCheck(this.player, b3[s]);
		}
	
	
	},
	draw4: function(ctx){
		
			ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b4[0].x,b4[0].y,b4[0].width,b4[0].height);	
			//ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[1].x,b2[1].y,b2[1].width,b2[1].height);
			for(var s =0; s< b4.length; s++){
			this.colCheck(this.player, b4[s]);
		}
	
	
	},
	draw5: function(ctx){
		
			ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b5[0].x,b5[0].y,b5[0].width,b5[0].height);	
			//ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh, b2[1].x,b2[1].y,b2[1].width,b2[1].height);
			for(var s =0; s< b5.length; s++){
			this.colCheck(this.player, b5[s]);
		}
	
	
	},
	
	colCheck: function(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width )),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height )),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
	var oX = hWidths - Math.abs(vX),             
		oY = hHeights - Math.abs(vY);   
		this.player.jumping = false;
		
		if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
				
					if(this.main.gameState ==1){
						this.player.x= 50;
						this.player.y= 580;
			   
					}
				if(this.main.gameState ==2){
						this.player.x= 50;
						this.player.y= 500;
			   
					}
					this.main.gameState = 13;
				
            } else {
                colDir = "b";
				
					if(this.main.gameState ==1){
						this.player.x= 50;
						this.player.y= 580;
			   
					}
				if(this.main.gameState ==2){
						this.player.x= 50;
						this.player.y= 500;
			   
					}
					this.main.gameState = 13;
            }
        } 
		else {
            if (vX > 0) {
                colDir = "l";
				
					if(this.main.gameState ==1){
						this.player.x= 50;
						this.player.y= 580;
			   
					}
				if(this.main.gameState ==2){
						this.player.x= 50;
						this.player.y= 500;
			   
					}
					this.main.gameState = 13;
            } else {
                colDir = "r";
				
				
					if(this.main.gameState ==1){
						this.player.x= 50;
						this.player.y= 580;
			   
					}
				if(this.main.gameState ==2){
						this.player.x= 50;
						this.player.y= 500;
			   
					}
					this.main.gameState = 13;
			}
        }
    
    return colDir;
}
}

	



};