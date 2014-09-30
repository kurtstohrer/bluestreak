"use strict";
var app = app || {};

app.player = {
	x: 30,
	y: 50,
    height: 66,
	width: 54,
	color: "blue",
	speed: 250,
	jumping:false,
	grounded:false,
	jumpSpeed:120,
	dashSpeed:20,
	image: undefined,
	velX: 1,
    velY: 1,
	sx:5,
	sy:27,
	sw:105,
	sh:132,
	frame:1,
	ticksperframe: 12,
	tickCount:0,

	
	
	draw: function(ctx){
		
			var halfW = this.width/2;
			var halfH = this.height/2;
			
			//ctx.fillStyle = "#001EFF";
			//ctx.fillRect(this.x - halfW,this.y - halfH,this.width,this.height);
			
			if(!this.image){
				app.draw.rect(ctx, this.x - halfW, this.y - halfH,
				this.width, this.height, this.color);
			}
			else{
				ctx.drawImage(this.image,this.sx,this.sy,this.sw,this.sh,this.x - halfW, this.y - halfH, this.width, this.height);
			
			}
			
			
	
	
	},
	//animate when rrunning right
	animateR: function (){
	//console.log(this.frame);
	this.tickCount ++;
	if(this.tickCount > this.ticksperframe){
		this.tickCount = 0;
		this.frame ++;
	
	
	}
	
	
	if(this.frame == 1){
		this.sx = 116;
		this.sy = 27;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame == 2){
		this.sx =  233;
		this.sy = 27;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame == 3){
		this.sx = 349;
		this.sy = 27;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame == 4){
		this.sx = 475;
		this.sy = 27;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame >= 5){
	
		this.frame = 1;
	
	}
	
	
	},
	//animate when running left
	animateL: function (){
	//console.log(this.frame);
	this.tickCount ++;
	if(this.tickCount > this.ticksperframe){
		this.tickCount = 0;
		this.frame ++;
	
	
	}
	
	
	if(this.frame == 1){
		this.sx = 368;
		this.sy = 192;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame == 2){
		this.sx =  243;
		this.sy = 192;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame == 3){
		this.sx =125;
		this.sy = 192;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame == 4){
		this.sx = 6;
		this.sy = 192;
		this.sw = 105;
		this.sh = 132;
	
	
	}
	if(this.frame >= 5){
	
		this.frame = 1;
	
	}
	
	
	},
	//move left
	moveLeft: function(dt){
		this.x -= this.speed * dt;
	
	},
	//move right
	moveRight: function(dt){
		this.x += this.speed * dt;
	
	},
	//jump
	jump: function(){
	
		this.y -= this.jumpSpeed;
		
		
	},
	//player dash left
	dashLeft: function() {
	
		this.x -= this.dashSpeed;
	},
	//player dash right
	dashRight: function(){
		this.x += this.dashSpeed;
	
	},
	//player dash up
	dashUp: function() {
	
		this.y -= this.dashSpeed;
	},
	




};