"use strict";

var app = app || {};

app.main = {
	
	// CONSTANT properties
    	WIDTH : 900, 
    	HEIGHT: 600,
		    dt: 1/60.0,

    	
		// variable properties
		canvas : undefined,
		ctx :  undefined,
		player: undefined,
		map: undefined,
		menu: undefined,
		ls: undefined,
		spikes: undefined,
		pulsar: undefined,
		bomb: undefined,
		complete: undefined,
		cannon: undefined,
		
		Bullets: [],
		gravity: 7,
		power: 200,
		powerColor:"blue",
		dashCost: 2,
		regenRate: .4,
		candash: true,
		
		
		
		//cooldowns
		jumpCD:0,
		EnterCD: 0,
		selectCD:0,
		coolDown:0,
		
		//states
		menuState:0,
		CmenuState:0,
		lsState:0,
		gameState:0,
		/*0- main menu	
		  10- Level Select
		  11- instructions
		  12- credits
		  13 - level over
		  1- Level 1
		  2- Level 2
		  3- Level 3
		  4- Level 4
		  5- Level 5
		 */
	init: function () {
		this.canvas = document.querySelector('canvas');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
			
			// the canvas context enables us to 
			// interact with the canvas api
		this.ctx = this.canvas.getContext('2d');
		this.pulsar = new app.Emitter();
		
		//streak effect
		this.pulsar.minXspeed = this.pulsar.minYspeed = -0.25;
		this.pulsar.maxXspeed = this.pulsar.maxYspeed = 0.25;
		this.pulsar.lifetime = 500;
		this.pulsar.expansionRate = 0.05;
		this.pulsar.numParticles = 100;
		this.pulsar.xRange=1;
		this.pulsar.yRange=1;
		this.pulsar.useCircles = false;
		this.pulsar.useSquares = true;
		this.pulsar.createParticles({x:0, y:0});
		
		//set names
		this.bomb = app.bomb;
		this.menu = app.menu;
		this.ls = app.levelSelect;
		this.map = app.map;
		this.player = app.player;
	    this.spikes = app.spikes;
		this.complete = app.complete;
		this.cannon = app.cannon;
		//init
		this.spikes.init();
		this.map.init();
		this.bomb.init();
		
		//images
		var image = new Image();
			
		image.src = app.IMAGES['bs'];
		this.player.image = image;
		
		var image = new Image();
		image.src = app.IMAGES['mainBG'];
		this.menu.image = image;
		
	    var image = new Image();
		image.src = app.IMAGES['lsBG'];
		this.ls.image = image;
		
		
		
		var image = new Image();
		image.src = app.IMAGES['spikes'];
		this.spikes.image = image;
		
		var image = new Image();
		image.src = app.IMAGES['complete'];
		this.complete.image = image;
		
		var image = new Image();
		image.src = app.IMAGES['bomb'];
		this.bomb.image = image;
		
		var image = new Image();
		image.src = app.IMAGES['en'];
		this.map.image = image;
		
		var image = new Image();
		image.src = app.IMAGES['cannon'];
		this.cannon.image = image;
		
		//init games states
		this.gamestate = 0;
		this.menuState = 2;
		this.CmenuState = 1;
		this.lsState = 0;
		this.update();
		
	
	},
	
	//sets starting Loc of player
	playerPos:function (){
		if(this.gameState == 1){
		
		if(this.player.y >= this.HEIGHT){
		
			this.player.y = 530;
			this.player.x = 40;
			}
		}
		if(this.gameState == 2){
		
		if(this.player.y >= 530){
		
			this.player.y = 500;
			
			
		}
		}
		if(this.gameState == 3){
		
		if(this.player.y >= 600){
		
			this.player.y = 20;
			this.player.x = 20;
			
		}
		}
		if(this.gameState == 4){
		
		if(this.player.y >= 600){
		
			this.player.y = 50;
			this.player.x = 20;
			
		}
		}
		if(this.gameState == 5){
		
		if(this.player.y >= 600){
		
			this.player.y = 400;
			this.player.x = 30;
			
		}
		}
		if(this.gameState == 11){
		
		if(this.player.y >= 600){
		
			this.player.y = 400;
			this.player.x = 450;
			
		}
		}
		
	},
	//main menu controls
	MainMenuScroll: function (){
	
		if(this.gameState == 0){
			if(this.selectCD <= 0){
				if(app.keydown[app.KEYBOARD.KEY_DOWN]){
					this.menuState ++;
					this.selectCD = 20;
					
			}
			if(app.keydown[app.KEYBOARD.KEY_UP]){
					this.menuState --;
					this.selectCD = 20;
					
			}
			if(this.EnterCD <= 0){
				if(app.keydown[app.KEYBOARD.KEY_ENTER]){
				this.EnterCD = 50;
						if(this.menuState == 1){
							this.gameState = 11;
							
						}
						if(this.menuState == 0){
							this.gameState = 10;
							
						}
						
			   }
			  }
			 
			 }
			}
		if(this.gameState == 12){
			if(app.keydown[app.KEYBOARD.KEY_ENTER]){
				this.EnterCD = 50;
				this.gameState = 0;
				
				
		}
		
	}
		
	},
	//level complete controls
	CompleteScroll: function (){
	
		if(this.gameState == 13){
			if(this.selectCD <= 0){
				if(app.keydown[app.KEYBOARD.KEY_RIGHT]){
					this.CmenuState ++;
					this.selectCD = 20;
					
			}
			if(app.keydown[app.KEYBOARD.KEY_LEFT]){
					this.CmenuState --;
					this.selectCD = 20;
					
			}
			if(this.EnterCD <= 0){
				if(app.keydown[app.KEYBOARD.KEY_ENTER]){
				this.EnterCD = 50;
						if(this.CmenuState == 0){
							this.gameState = 10;
							
						}
						if(this.CmenuState == 1){
							this.gameState = 0;
							
						}
			   }
			  }
			 }
			}
		
		
	},
	//level select controls
	LevelSelectControl: function (){
		if(this.gameState == 10){
		
			if(this.selectCD <= 0){
				if(app.keydown[app.KEYBOARD.KEY_LEFT]){
					this.lsState --;
					this.selectCD = 20;
					
			}
			if(app.keydown[app.KEYBOARD.KEY_RIGHT]){
					this.lsState ++;
					this.selectCD = 20;
						
			}
			}
			
		}
				
			
		if(this.EnterCD <= 0){
			if(app.keydown[app.KEYBOARD.KEY_ENTER]){
				this.EnterCD = 50;
				if(this.lsState == 0){
					this.gameState = 1;
						
					
				}
				if(this.lsState == 1){
					this.gameState = 2;
					
				}
				if(this.lsState == 2){
					this.gameState = 3;
					
				}
				if(this.lsState == 3){
					this.gameState = 4;
					
				}
				if(this.lsState == 4){
					this.gameState = 5;
					
				}
				}
		}
		
		
	
	},
	update: function(){
    	// clear screen
    	
    	app.draw.clear(this.ctx,0,0,this.WIDTH,this.HEIGHT);
		app.draw.backgroundGradient(this.ctx,this.WIDTH, this.HEIGHT);
		// PAUSED?
		this.EnterCD--;
		this.jumpCD--;
		this.selectCD --;
		this.playerPos();
		// UPDATE
		// move sprites
		//player animation
		this.player.sx = 5;
		this.player.sy = 27;
		this.player.sw = 105;
		this.player.sh = 132;
		this.pulsar.al = 0;
		this.pulsar.lr = 20;
		this.pulsar.up = 20;
		
		//change gravity back to 7 after streak
		this.gravity = 7;
		this.moveSprites();
		//console.log(this.player.x);
		
		//animate cannon and bomb
		this.cannon.animate();
		this.bomb.animate();
		
		//regen power
		this.power += this.regenRate;
		// CHECK FOR COLLISIONS	
	   this.pulsar.updateAndDraw(this.ctx,{x:this.player.x - this.player.width/4,y:this.player.y - this.player.height/4});
		//make sure menus goes back to top
		if(this.menuState >1){
			this.menuState = 0;
		
		}
		if(this.menuState < 0){
			this.menuState = 1;
		}
		if(this.lsState >= 5){
			this.lsState = 0;
		
		}
		if(this.lsState < 0){
			this.lsState = 5;
		
		}
		if(this.player.grounded){
			this.player.velY = 0;
			
			}
		if(this.CmenuState < 0){
			this.CmenuState = 1;
		
		
		}
		if(this.CmenuState > 1){
			this.CmenuState = 0;
		
		
		}
	
		// DRAW	
		// i) draw background
		//app.draw.backgroundGradient(this.ctx,this.WIDTH,this.HEIGHT);
		
		// ii) draw sprites
		//implement gravity
		 this.player.y += this.gravity;
		//update Power
		
		this.updatePower();
		//this.updatePower();
		this.ctx.globalAlpha = 1.0;
		
		

		this.draw();
		 //player has run out of power
		this.powerOut();
		
		// iii) draw HUD
		this.ctx.globalAlpha = 1.0;
		//console.log(this.player.grounded);
		//drawHUD();
		//this.drawHUD();
		// LOOP
		// this calls the update() function 60 FPS
		// what happens is we don't use bind?
		app.animationID = requestAnimationFrame(this.update.bind(this));
	},
	
	//draw depending on the game state
	draw: function (){
	//main menu
	if(this.gameState == 0){
		this.drawMain();
		
		this.MainMenuScroll();
		
		
	}
	
	//level select
	if(this.gameState == 10){
		this.ls.drawBG(this.ctx);
		this.drawLS();
		this.LevelSelectControl();
		
	}
	//level complete 
	if(this.gameState == 13){
	
		
		this.drawComplete();
		this.CompleteScroll();
	
	}
	//Learn to play
	if(this.gameState == 11){
	
		
		this.drawLTP();
		
	
	}
	
	//level 1
	if(this.gameState == 1){
	
		this.drawLevel1();
		
	
	}
	//level 2
	if(this.gameState == 2){
	
		this.drawLevel2();
		
	
	}
	//level 3
	if(this.gameState == 3){
	
		this.drawLevel3();
		
	
	}
	//level 4
	if(this.gameState == 4){
	
		this.drawLevel4();
		
	
	}
	//level 5
	if(this.gameState == 5){
	
		this.drawLevel5();
		
	
	}
	
	//draw the border
	this.map.drawBorder(this.ctx);
	},
	//draws the border for the level select menu
	drawLS: function (){
	
		if(this.lsState == 0){
			this.ls.draw1(this.ctx);
		}
		if(this.lsState == 1){
			this.ls.draw2(this.ctx);
		}
		if(this.lsState == 2){
			this.ls.draw3(this.ctx);
		}
		if(this.lsState == 3){
			this.ls.draw4(this.ctx);
		}
		if(this.lsState == 4){
			this.ls.draw5(this.ctx);
		}
		
	
	},
	//draws borders for main menu buttons
	drawMain: function (){
		
		this.menu.drawBG(this.ctx);
		if(this.menuState == 0){
		//this.menu.drawBG(this.ctx);
			this.menu.drawLS(this.ctx);
		}
		if(this.menuState == 1){
		//this.menu.drawBG(this.ctx);
		
			this.menu.drawLTP(this.ctx);
		}
		
		
	
	},
	//draws borders for complete menu
	drawComplete: function(){
	
		this.complete.drawBG(this.ctx);
		if(this.CmenuState == 0){
			this.complete.draw1(this.ctx);
		}
		if(this.CmenuState == 1){
			this.complete.draw2(this.ctx);
		}
	
	},
	//draw the power bar
	powerBar: function (){
	
	//power bar border
	app.draw.rect(this.ctx, 18, 18, 105, 25, "black");
	//power bar
	app.draw.rect(this.ctx, 20, 20, this.power, 20, this.powerColor);
	
	},
	//draw the player
	initplayer: function (){
	
		this.player.draw(this.ctx);
		
		this.powerBar();
	},
	
	drawLevel1: function () {
	
	//level 1
	
	this.map.drawLevel1(this.ctx);
	
	this.spikes.drawLevel1(this.ctx);
	//player
	this.bomb.draw1(this.ctx);
	this.initplayer();
	
	},
	drawLevel2: function () {
	
	

	this.map.drawLevel2(this.ctx);
	this.spikes.drawLevel2(this.ctx);
	
	
	this.bomb.draw2(this.ctx);
	
	this.initplayer();
	
	},
	
	drawLevel3: function () {
	
	
	this.cannon.draw3(this.ctx);
	this.map.drawLevel3(this.ctx);
	this.bomb.draw3(this.ctx);
	
	
	
	this.initplayer();
	//bullets
	for(var i=0; i< this.Bullets.length; i++){
			this.Bullets[i].draw(this.ctx);
			this.spikes.colCheckSpike(this.player, this.Bullets[i]);
		}
	
	},
	drawLevel4: function () {
	
	
	this.spikes.drawLevel4(this.ctx);
	this.map.drawLevel4(this.ctx);
	
	
	this.bomb.draw4(this.ctx);
	

	
	this.initplayer();
	},
	drawLevel5: function () {
	
	
	this.cannon.draw5(this.ctx);
	this.map.drawLevel5(this.ctx);
	
	
	this.bomb.draw5(this.ctx);
	for(var i=0; i< this.Bullets.length; i++){
			this.Bullets[i].draw(this.ctx);
			this.spikes.colCheckSpike(this.player, this.Bullets[i]);
		}
	this.initplayer();
	
	
	},
	//draw learn to play screen
	drawLTP: function (){
	
	this.bomb.draw0(this.ctx);
	this.map.drawLTP(this.ctx);
	
	this.initplayer();
	},
	//if the player uses all of their power make them wait to be able to dash again
	powerOut: function (){
		if(this.power <= this.dashCost){
			this.candash = false;
		
		
		
		}
		if (this.power > 40){
		
			this.candash = true;
		}
	
	
	},
	//shoot bullets
	shoot:function (x,y) {
		
		this.Bullets.push(new app.Bullet(x, y, 200));
	
	},
	
	//move sprites on screen
	moveSprites: function () {
	//move left
	if(app.keydown[app.KEYBOARD.KEY_LEFT]){
			this.player.moveLeft(this.dt);
			this.player.x -= this.player.velX;
			this.player.animateL();
		}
		//move right
	if(app.keydown[app.KEYBOARD.KEY_RIGHT]){
			this.player.moveRight(this.dt);
			this.player.x += this.player.velX;
			this.player.animateR();
			
		}	
		//jump
	if(app.keydown[app.KEYBOARD.KEY_UP]){
			//no double jumps
			if(this.jumpCD <=0){
				this.player.y += this.player.velY;
				this.player.jump();
				this.jumpCD = 20;
				this.player.sx = 51;
			this.player.sy = 354;
			this.player.sw = 105;
			this.player.sh = 134;
				
			}
				
			
	
	}
	//create and move bullets for level 3
	if(this.gameState == 3){

		this.coolDown --;
		if(this.coolDown <= 0){
		
				this.shoot(this.cannon.x + this.cannon.w/2 - 2,this.cannon.y);
				this.shoot(this.cannon.x2 + this.cannon.w/2 - 2,this.cannon.y2);
				this.shoot(this.cannon.x3 + this.cannon.w/2 - 2,this.cannon.y2);
				this.coolDown = 50;                                                                                      
		}
		for(var i=0; i < this.Bullets.length; i++){
			this.Bullets[i].update(this.dt);
		}
		
		this.Bullets =  this.Bullets.filter(function(bullet){
			return bullet.active;
		});
	
	
	
	}
	//create and move bullets for level 5
	if(this.gameState == 5){
	//debugger;
		this.coolDown --;
		if(this.coolDown <= 0){
		
				this.shoot(this.cannon.x4 + this.cannon.w/2 - 2,this.cannon.y4);
				this.shoot(this.cannon.x5 + this.cannon.w/2 - 2,this.cannon.y5);
				this.shoot(this.cannon.x6 + this.cannon.w/2 - 2,this.cannon.y6);
				this.shoot(this.cannon.x7+ this.cannon.w/2 - 2,this.cannon.y6);
				this.coolDown = 120;                                                                                      
		}
		for(var i=0; i < this.Bullets.length; i++){
			this.Bullets[i].update(this.dt);
		}
		
		this.Bullets =  this.Bullets.filter(function(bullet){
			return bullet.active;
		});
	
	
	
	}
	//give the player the dash ability if they have the power to do it
	if(this.candash == true){
	//dash left
	if(app.keydown[app.KEYBOARD.KEY_LEFT] && app.keydown[app.KEYBOARD.KEY_SPACE]){
		if(this.power >= this.dashCost){
			this.player.dashLeft();
			this.power -= this.dashCost;
			this.pulsar.al =1;
			this.pulsar.lr = 40;
			//this.gravity = 0;
			this.gravity = .5;
			createjs.Sound.play("dash");
		  }
		 
		}
		
		
	//dash right
	if(app.keydown[app.KEYBOARD.KEY_RIGHT] && app.keydown[app.KEYBOARD.KEY_SPACE]){
		if(this.power >= this.dashCost){
			this.player.dashRight();
			this.power -= this.dashCost;
			this.pulsar.al =1;
			this.pulsar.lr = 40;
			this.gravity = .5;
			this.player.sx = 116;
			this.player.sy = 27;
			this.player.sw = 105;
			this.player.sh = 132;
			createjs.Sound.play("dash");
		}
		
		}
	//up dash
	if(app.keydown[app.KEYBOARD.KEY_UP] && app.keydown[app.KEYBOARD.KEY_SPACE]){
		if(this.power >= this.dashCost){
			this.player.dashUp();
			this.power -= this.dashCost;
			this.pulsar.al =1;
			this.pulsar.up = 40;
			this.gravity = 0;
			this.player.grounded = false;
			this.player.sx = 51;
			this.player.sy = 354;
			this.player.sw = 105;
			this.player.sh = 134;
			createjs.Sound.play("dash");
		}
		
		}
	
	}
	
	
	
	
	// keep in bounds
	//left/right
	if(this.player.x >= this.WIDTH- this.player.width/2){
		this.player.x = this.WIDTH - this.player.width;
		
	}else if(this.player.x < 0 + this.player.width/2){
		this.player.x = 0 + this.player.width/2;
	}
	
	//bottom
	if(this.player.y >= this.HEIGHT- this.player.height/2){
		this.player.y = this.HEIGHT - this.player.height/2;
		
	
	}
	if(this.player.y <0 + this.player.height/2){
		this.player.y = 0 + this.player.height/2;
	
	}

	
	
	
 },

 
 
 
//make sure power cant go below 1
 updatePower: function (){
	if(this.power < 0){
		this.power = 1;
	
	}
	if(this.power >=100){
		this.power = 100;
	
	}
	
	
 },
 //sounds
  startSoundtrack: function(){
	createjs.Sound.stop();
	createjs.Sound.play("soundtrack",{loop:-1, volume: 0.5});
 
 },
 
 

};