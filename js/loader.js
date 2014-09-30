/*
loader.js
variable app is in global scope - i.e. a property of window.
app is our single global object literal - all other functions and properties of 
the bubbles game will be properties of app.
*/
"use strict";

// if app exists use the existing copy
// else create a new object literal
var app = app || {};

// CONSTANTS
app.KEYBOARD = {
	"KEY_LEFT": 37, 
	"KEY_UP": 38, 
	"KEY_RIGHT": 39, 
	"KEY_DOWN": 40,
	"KEY_SPACE": 32,
	"KEY_ENTER": 13,
	
};

app.IMAGES = {
   bs: "images/test1.png",
   mainBG: "images/menuBG.jpg",
   lsBG: "images/lsBG.jpg",
   spikes: "images/spikes.png",
   complete: "images/complete.jpg",
   bomb: "images/bombsheet.png",
   en: "images/enviorment.png",
   cannon: "images/cannon.png",
 };


// properties of app that will be accessed by the blastem.js module
app.animationID = undefined;
app.paused = false;

// app.keydown array to keep track of which keys are down
// this is called a "key daemon"
// blastem.js will "poll" this array every frame
// this works because JS has "sparse arrays" - not every language does
app.keydown = [];

// the Modernizr object is from the modernizr.custom.js file
Modernizr.load(
	{ 
		// load all of these files
		load : [
			'js/polyfills.js',
			'js/main.js',
			'js/draw.js',
			'js/player.js',
			'js/map.js',
			'js/menu.js',
			'js/LevelSelect.js',
			'js/emitter.js',
			'js/utilities.js',
			
			'js/spikes.js',
			'js/bomb.js',
			'js/complete.js',
			'js/cannon.js',
			'js/bullet.js',
			
			
			app.IMAGES['bs'],
			app.IMAGES['mainBG'],
			app.IMAGES['lsBG'],
			//app.IMAGES['streak'],
			app.IMAGES['spikes'],
			app.IMAGES['complete'],
			app.IMAGES['bomb'],
			app.IMAGES['en'],
			app.IMAGES['cannon'],
		],
		
		// when the loading is complete, this function will be called
		complete: function(){
			
			// set up event handlers
			window.onblur = function(){
				app.paused = true;
				cancelAnimationFrame(app.animationID);
				app.keydown = []; // clear key daemon
				// call update() so that our paused screen gets drawn
				app.main.update();
				createjs.Sound.stop();
				
			};
			
			window.onfocus = function(){
				app.paused = false;
				cancelAnimationFrame(app.animationID);
				// start the animation back up
				app.main.update();
				app.main.startSoundtrack();
			};
			
			// event listeners
			window.addEventListener("keydown",function(e){
				//console.log("keydown=" + e.keyCode);
				app.keydown[e.keyCode] = true;
			});
				
			window.addEventListener("keyup",function(e){
				//console.log("keyup=" + e.keyCode);
				app.keydown[e.keyCode] = false;
			});
			
			createjs.Sound.alternateExtensions = ["mp3"];
			createjs.Sound.registerSound({id:"dash", src: "sounds/swoosh.ogg"});
			createjs.Sound.registerSound({id:"soundtrack", src: "sounds/mixdown.ogg"});
			
			createjs.Sound.addEventListener("fileload", handleFileLoad);
			
			function handleFileLoad(e){
				if(e.src == "sounds/mixdown.ogg")app.main.startSoundtrack();
			
			}
			// start game
			app.main.init();
		} // end complete
		
	} // end object
); // end Modernizr.load
