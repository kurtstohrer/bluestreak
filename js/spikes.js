"use strict";
var app = app || {};


var lev1Spikes = [];	
var Spikes2 = [];		
var Spikes3 = [];
var Spikes4 = [];	
var Spikes4b = [];		
	
	lev1Spikes.push({
		x:648,
		y:500,
		width: 52,
		height:42
		
	
	});
	
	//Level2
	
	Spikes2.push({
		x:144,
		y:520,
		width: 175,
		height:90
		
	
	});
	Spikes2.push({
		x:319,
		y:520,
		width: 200,
		height:90
		
	
	});
	
	Spikes2.push({
	
	//<--
		x:549,
		y:28,
		width: 40,
		height:175
		
	
	});
	Spikes2.push({
	//<--
		x:549,
		y:150,
		width: 40,
		height:175
		
	
	});
	Spikes2.push({
	//<--
		x:854,
		y:396,
		width: 40,
		height:175
		
	
	});
	Spikes2.push({
		x:854,
		y:221,
		width: 40,
		height:175
		
	
	});
	Spikes2.push({
		x:854,
		y:46,
		width: 40,
		height:175
		
	
	});
	Spikes2.push({
		x:854,
		y:0,
		width: 40,
		height:220
		
	
	});
	
	//level 4
	Spikes4.push({
		x:177,
		y:0,
		width: 29,
		height:200
		
	
	});
	Spikes4.push({
		x:314,
		y:200,
		width: 30,
		height:200
		
	
	});
	Spikes4.push({
		x:573,
		y:200,
		width: 30,
		height:200
		
	
	});
	Spikes4.push({
		x:459,
		y:0,
		width: 29,
		height:200
		
	
	});
	Spikes4.push({
		x:709,
		y:0,
		width: 30,
		height:200
		
	
	});
	Spikes4b.push({
		x:177,
		y:130,
		width: 29,
		height:200
		
	
	});
	Spikes4.push({
		x:314,
		y:374,
		width: 30,
		height:200
		
	
	});
	Spikes4.push({
		x:573,
		y:374,
		width: 30,
		height:200
		
	
	});
	Spikes4b.push({
		x:459,
		y:130,
		width: 29,
		height:200
		
	
	});
	Spikes4b.push({
		x:709,
		y:130,
		width: 30,
		height:200
		
	
	});
	

app.spikes = {
	
	player:undefined,
	darkGray: "#787878",
	brown:"#6E3F19",
	main:undefined,
	image:undefined,
	ticksperframe: 30,
	tickCount:0,
	
	frame: 1,
	
	
	init: function (){
	
		this.player = app.player;
		this.main = app.main;
	}, 
	
	/*SpikeSheet Locations
	
		bottom ^ 5,102,176,44
		top - 5,146,176,44
		right wall <---  180,11,44,176
		left wall -->   216,11,44,176
	
	
	*/
	drawLevel1: function (ctx){
		
		ctx.drawImage(this.image,33,1,47,39,lev1Spikes[0].x, lev1Spikes[0].y, lev1Spikes[0].width, lev1Spikes[0].height);
		for(var s =0; s< lev1Spikes.length; s++){
			this.colCheckSpike(this.player, lev1Spikes[s]);
			
		}
	
	},
	drawLevel2: function (ctx){
	
	//ctx.drawImage(this.image,, Spikes2[].x,Spikes2[].y,Spikes[].width,Spikes[].height);
			ctx.drawImage(this.image,5,102,176,44, Spikes2[0].x,Spikes2[0].y,Spikes2[0].width,Spikes2[0].height);
			ctx.drawImage(this.image,5,102,176,44, Spikes2[1].x,Spikes2[1].y,Spikes2[1].width,Spikes2[1].height);
			
			ctx.drawImage(this.image,182,11,44,176, Spikes2[3].x,Spikes2[3].y,Spikes2[3].width,Spikes2[3].height);
			ctx.drawImage(this.image,182,11,44,176, Spikes2[4].x,Spikes2[4].y,Spikes2[4].width,Spikes2[4].height);
			ctx.drawImage(this.image,182,11,44,176, Spikes2[5].x,Spikes2[5].y,Spikes2[5].width,Spikes2[5].height);
			ctx.drawImage(this.image,182,11,44,176, Spikes2[2].x,Spikes2[2].y,Spikes2[2].width,Spikes2[2].height);
			ctx.drawImage(this.image,182,11,44,176, Spikes2[6].x,Spikes2[6].y,Spikes2[6].width,Spikes2[6].height);
			ctx.drawImage(this.image,5,102,176,44, 420,520,200,90);
			ctx.drawImage(this.image,182,11,44,176, 549,220,40,175);
			for(var s =0; s< Spikes2.length; s++){
			this.colCheckSpike(this.player, Spikes2[s]);
			
		}
	},
	drawLevel4: function (ctx){
	
	
	
	//ctx.drawImage(this.image,, Spikes2[].x,Spikes2[].y,Spikes[].width,Spikes[].height);
			ctx.drawImage(this.image,181,13,76,174, Spikes4[0].x,Spikes4[0].y,Spikes4[0].width,Spikes4[0].height);
			ctx.drawImage(this.image,181,13,76,174, Spikes4[1].x,Spikes4[1].y,Spikes4[1].width,Spikes4[1].height);
			
			ctx.drawImage(this.image,181,13,76,174, Spikes4[3].x,Spikes4[3].y,Spikes4[3].width,Spikes4[3].height);
			ctx.drawImage(this.image,181,13,76,174, Spikes4[4].x,Spikes4[4].y,Spikes4[4].width,Spikes4[4].height);
		
			ctx.drawImage(this.image,181,13,76,174, Spikes4[2].x,Spikes4[2].y,Spikes4[2].width,Spikes4[2].height);
			
			ctx.drawImage(this.image,181,13,76,174, Spikes4b[0].x,Spikes4b[0].y,Spikes4b[0].width,Spikes4b[0].height);
			ctx.drawImage(this.image,181,13,76,174, Spikes4b[1].x,Spikes4b[1].y,Spikes4b[1].width,Spikes4b[1].height);
			
			ctx.drawImage(this.image,181,13,76,174, Spikes4b[2].x,Spikes4b[2].y,Spikes4b[2].width,Spikes4b[2].height);
			ctx.drawImage(this.image,181,13,76,174, Spikes4[5].x,Spikes4[5].y,Spikes4[4].width,Spikes4[4].height);
		
			ctx.drawImage(this.image,181,13,76,174, Spikes4[6].x,Spikes4[6].y,Spikes4[6].width,Spikes4[6].height);
		
		
			for(var s =0; s< Spikes4.length; s++){
			this.colCheckSpike(this.player, Spikes4[s]);
			
		}
	},
	

colCheckSpike: function(shapeA, shapeB) {
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
			 if(this.main.gameState == 3){
               	this.player.y = 20;
			this.player.x = 20;
			   
			 }
			  if(this.main.gameState == 4){
               	this.player.y = 40;
			this.player.x = 40;
			   
			 }
			 if(this.main.gameState == 5){
				this.player.y = 400;
				this.player.x = 30;
			
			}
				
            } else {
                colDir = "b";
			if(this.main.gameState ==1 ){
               this.player.x= 50;
			   this.player.y= 580;
			  }
			  if(this.main.gameState ==2){
               this.player.x= 50;
			   this.player.y= 500;
			   
			 }
			 if(this.main.gameState == 3){
            	this.player.y = 20;
			this.player.x = 20;
			 }
			  if(this.main.gameState == 4){
               	this.player.y = 40;
			this.player.x = 40;
            }
			if(this.main.gameState == 5){
				this.player.y = 400;
			this.player.x = 30;
			
			}
			}
        } else {
            if (vX > 0) {
                colDir = "l";
			if(this.main.gameState ==1 ){
                this.player.x= 50;
			    this.player.y= 580;
			  }
			  if(this.main.gameState ==2){
               this.player.x= 50;
			   this.player.y= 500;
			   
			 }
			 if(this.main.gameState == 3){
               	this.player.y = 20;
			this.player.x = 20;
			   
			 }
			  if(this.main.gameState == 4){
               	this.player.y = 40;
			this.player.x = 40;
			}
			if(this.main.gameState == 5){
				this.player.y = 400;
			this.player.x = 30;
			
			}
            } else {
                colDir = "r";
			if(this.main.gameState ==1 ){
               this.player.x= 50;
			   this.player.y= 580;
            }
			if(this.main.gameState ==2){
               this.player.x= 50;
			   this.player.y= 500;
			   
			 }
			 if(this.main.gameState == 3){
              	this.player.y = 20;
			this.player.x = 20;
			   
			 }
			  if(this.main.gameState == 4){
               	this.player.y = 40;
			this.player.x = 40;
			}
			if(this.main.gameState == 5){
				this.player.y = 400;
			this.player.x = 30;
			
			}
		}
        }
    
    return colDir;
}
}


};