"use strict";
var app = app || {};


//arrays of level objects
var ltp = [];	
var lev1 = [];
var lev2 = [];	
var lev3 = [];	
var lev4 = [];
var lev5 = [];	
var border = [];		
var bounds = [];			
	
	//LTP
	
	ltp.push({
		x: 0,
		y: 550,
		width: 900,
		height: 60
	});
	//LEVEL 1
	lev1.push({
		x: 0,
		y: 550,
		width: 900,
		height: 60
	});
	lev1.push({
		x: 700,
		y: 200,
		width: 300,
		height:550
	});
	
	//level 2
	lev2.push({
		x: 0,
		y: 188,
		width: 358,
		height: 30
	});
	
	lev2.push({
		x: 586,
		y: 0,
		width: 29,
		height: 400
	});
	lev2.push({
		x: 615,
		y: 109,
		width: 134,
		height:30
	});
	lev2.push({
		x: 0,
		y: 569,
		width: 142,
		height: 31
	});
	lev2.push({
		x: 650,
		y: 569,
		width: 300,
		height:31
	});
	
	//level 3
	
	lev3.push({
	    x: 0,
		y: 260,
		width: 117,
		height:440
	});

	lev3.push({
	    x: 783,
		y: 260,
		width: 117,
		height:340
	});
	lev3.push({
	    x: 0,
		y: 530,
		width: 900,
		height:70
	});
	//level 4
	
	lev4.push({
		x: 0,
		y: 550,
		width: 900,
		height: 60
	});
	
	
	//level 5
	
	lev5.push({
		x: 500,
		y: 130,
		width: 400,
		height: 17
	});
	lev5.push({
		x: 0,
		y: 240,
		width: 628,
		height: 25
	});
	lev5.push({
		x: 0,
		y: 550,
		width: 900,
		height: 70
	});
	lev5.push({
		x: 213,
		y: 375,
		width:404,
		height: 26
	});
	
	
	lev5.push({
		x: 877,
		y: 76,
		width: 23,
		height: 524
	});

	//border
	border.push({
		x: 0,
		y: 0,
		width: 7,
		height:600
	});
	border.push({
		x:893,
		y: 0,
		width: 7,
		height:600
	});
	border.push({
		x: 0,
		y: 0,
		width: 900,
		height:7
	});
	border.push({
		x: 0,
		y: 593,
		width: 900,
		height:7
	});
	
	

app.map = {
	//vars
	player:undefined,
	darkGray: "#787878",
	brown:"#6E3F19",
	black: "#1F1F1F",
	main: undefined,
	image: undefined,
	//init maps
	init: function (){
	
		this.player = app.player;
		this.main = app.main;
	}, 
	//draw the border
	drawBorder: function (ctx){
		app.draw.rect(ctx,border[1].x, border[1].y, border[1].width, border[1].height,"blue");
		app.draw.rect(ctx,border[0].x, border[0].y, border[0].width, border[0].height,"blue");
		app.draw.rect(ctx,border[2].x, border[2].y, border[2].width, border[2].height,"blue");
		app.draw.rect(ctx,border[3].x, border[3].y, border[3].width, border[3].height,"blue");
		this.player.grounded = false;
		for(var i =0; i< border.length; i++){
			var dir = this.colCheck(this.player, border[i]);
			
			if (dir === "l" ){
			
			this.player.x +=20;
			
			}

			if(	dir === "r") {
			this.player.x -=20;
			
			}
			this.player.jumping = false;
		     if (dir === "b") {
					this.player.y +=20;
              }this.player.jumping = false;
			  if (dir === "t") {
				
			
			}
		}
	
	},
	
	//draw learn to play
	drawLTP: function (ctx){
		
		
		ctx.drawImage(this.image,0,0,900,91, ltp[0].x, ltp[0].y, ltp[0].width, ltp[0].height);
		
		app.draw.text(ctx,"Press left and right arrow keys to move", 100, 100,15,"white");
		app.draw.text(ctx,"Press the up Key to Jump", 100, 120,15,"white");
		app.draw.text(ctx,"Hold Space along with, either left, right, or up to Dash", 100, 150,15,"white");
		app.draw.text(ctx,"Get the Bomb to go to continue", 100, 200,15,"white");
		this.player.grounded = false;
		for(var i =0; i< ltp.length; i++){
				var dir = this.colCheck(this.player, ltp[i]);
			
			if (dir === "l" || dir === "r") {
			this.player.velX = 0;
				this.player.jumping = false;
			} else if (dir === "b") {
			 this.player.grounded = true;
               this.player.jumping = false;
			} else if (dir === "t") {
			this.player.velY *= -1;
			//this.player.grounded = true;
			}
		}
		
	
	},
	//draw level 1
	drawLevel1: function (ctx){
		//this.player.x = 50;
		//this.player.y = 540;
		//this.player.draw(ctx);
		//for(var i =0; i< lev1.length; i++){
		ctx.drawImage(this.image,672,256,228,344, lev1[1].x, lev1[1].y, lev1[1].width, lev1[1].height);
		ctx.drawImage(this.image,0,0,900,91, lev1[0].x, lev1[0].y, lev1[0].width, lev1[0].height);
		
			
		this.player.grounded = false;
		for(var i =0; i< lev1.length; i++){
				var dir = this.colCheck(this.player, lev1[i]);
			
			if (dir === "l" || dir === "r") {
			this.player.velX = 0;
				this.player.jumping = false;
			} else if (dir === "b") {
			 this.player.grounded = true;
               this.player.jumping = false;
			} else if (dir === "t") {
			this.player.velY *= -1;
			//this.player.grounded = true;
			}
		}
		
	
	},
	//draw level 2
	drawLevel2: function (ctx){
		
		ctx.drawImage(this.image,0,0,900,91,lev2[0].x, lev2[0].y, lev2[0].width, lev2[0].height);
		ctx.drawImage(this.image,15,157,65,443,lev2[1].x, lev2[1].y, lev2[1].width, lev2[1].height);
		ctx.drawImage(this.image,0,0,900,91,lev2[2].x, lev2[2].y, lev2[2].width, lev2[2].height);
		ctx.drawImage(this.image,0,0,900,91,lev2[4].x, lev2[4].y, lev2[4].width, lev2[4].height);
		ctx.drawImage(this.image,0,0,900,91,lev2[3].x, lev2[3].y, lev2[3].width, lev2[3].height);
		this.player.grounded = false;
		for(var i =0; i< lev2.length; i++){
				var dir = this.colCheck(this.player, lev2[i]);
			
			if (dir === "l" || dir === "r") {
			this.player.velX = 0;
				this.player.jumping = false;
			} else if (dir === "b") {
			 this.player.grounded = true;
               this.player.jumping = false;
			} else if (dir === "t") {
			this.player.velY *= -1;
			//this.player.grounded = true;
			}
		}
	},
	//draw level 3
	drawLevel3 : function(ctx){
			ctx.drawImage(this.image,15,157,65,443,lev3[0].x, lev3[0].y, lev3[0].width, lev3[0].height);
			ctx.drawImage(this.image,15,157,65,443,lev3[1].x, lev3[1].y, lev3[1].width, lev3[1].height);
			ctx.drawImage(this.image,0,0,900,91,lev3[2].x, lev3[2].y, lev3[2].width, lev3[2].height);
		
			this.player.grounded = false;
			for(var i =0; i< lev3.length; i++){
				var dir = this.colCheck(this.player, lev3[i]);
			
			if (dir === "l" || dir === "r") {
			
				this.player.jumping = false;
			} else if (dir === "b") {
			 this.player.grounded = true;
               this.player.jumping = false;
			} else if (dir === "t") {
			this.player.velY *= -1;
			//this.player.grounded = true;
			}
		}
	},
	drawLevel4 : function(ctx){
			
			ctx.drawImage(this.image,0,0,900,91,lev4[0].x, lev4[0].y, lev4[0].width, lev4[0].height);
			
			
		
			this.player.grounded = false;
			for(var i =0; i< lev4.length; i++){
				var dir = this.colCheck(this.player, lev4[i]);
			
			if (dir === "l" || dir === "r") {
			
				this.player.jumping = false;
			} else if (dir === "b") {
			 this.player.grounded = true;
               this.player.jumping = false;
			} else if (dir === "t") {
			
			}
		}
	},
	drawLevel5 : function(ctx){
			
			ctx.drawImage(this.image,0,0,900,91,lev5[0].x, lev5[0].y, lev5[0].width, lev5[0].height);
			ctx.drawImage(this.image,0,0,900,91,lev5[1].x, lev5[1].y, lev5[1].width, lev5[1].height);
			ctx.drawImage(this.image,0,0,900,91,lev5[2].x, lev5[2].y, lev5[2].width, lev5[2].height);
			ctx.drawImage(this.image,0,0,900,91,lev5[3].x, lev5[3].y, lev5[3].width, lev5[3].height);
			
			ctx.drawImage(this.image,15,157,65,443,lev5[4].x, lev5[4].y, lev5[4].width, lev5[4].height);
			
			
		
			this.player.grounded = false;
			for(var i =0; i< lev5.length; i++){
				var dir = this.colCheck(this.player, lev5[i]);
			
			if (dir === "l" || dir === "r") {
			
				this.player.jumping = false;
			} else if (dir === "b") {
			 this.player.grounded = true;
               this.player.jumping = false;
			} else if (dir === "t") {
			
			}
		}
	},
	
	// collisons 
	colCheck: function(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
	var oX = hWidths - Math.abs(vX),             
		oY = hHeights - Math.abs(vY);   
		
		
		if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oX + shapeA.height/2;
				
            } 
			else{
                colDir = "b";
                shapeA.y -= oY - shapeA.height/2;
				
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX + shapeA.width/2;
            } else {
                colDir = "r";
                shapeA.x -= oX - shapeA.width/2;
            }
        }
    
    return colDir;
	}
	
},


};