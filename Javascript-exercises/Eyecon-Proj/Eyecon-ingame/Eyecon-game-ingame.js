var minute = document.getElementById("minute");
var second = document.getElementById("second");
var tileRem = document.getElementById("tileRem");


/* ---- Timer ---*/
var Clock = function() {
    var time = 120;
    this.start = function() {
        var runTime = setInterval(function() {
            if (time <= 0) {
                clearInterval(runTime);
            } else {
                time--;
                minute.innerHTML = parseInt(time / 60);
                if (time % 60 < 10) {
                    second.innerHTML = "0" + time % 60;
                } else {
                    second.innerHTML = time % 60;
                }
            };
        }, 1000);
    }
}
var clock = new Clock();
clock.start();
/* --- Timer --- */


//Declare prototypes
var Tile = function(img, zIndex) {
    var randomImg = Math.floor(Math.random() * 37);
    this.img = tileSet[randomImg];
    this.zIndex;
};




/* GAMEBOARD OFFICIAL CONTINUED */

var tileSet = [
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-0.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-1.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-2.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-3.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-4.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-5.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-6.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-7.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-8.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-9.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-10.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-11.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-12.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-13.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-14.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-15.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-16.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-17.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-18.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-19.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-20.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-21.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-22.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-23.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-24.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-25.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-26.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-27.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-28.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-29.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-30.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-31.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-32.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-33.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-34.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-35.jpg",
    "../eyecon-game-assets/images/eyecons/set6/set6-tile-36.jpg"
];

//  Add 56 divs to board (in a loop in javascript)
//    - id=index, data-count=0

$(document).ready(function() {
    for (i = 0; i < 56; i++) {
        $("#board").append('<div id=' + i + ' " class="tileSpaces" data-count="0" />');
        //$("#" + i).css("z-index", "0");
    }
    console.log(i);
});

//  Create array with 50 pairs of tiles (you can make each tile a div)
var allTiles = [];
var fiftyTiles = [];

var newTiles = function() {
    for (i = 0; i < 50; i++) {
        fiftyTiles.push(new Tile());
    };
};

newTiles();
var doubleFiftyTiles = function() {
    allTiles.push(fiftyTiles);
    allTiles.push(fiftyTiles);
};

doubleFiftyTiles();

console.log(allTiles);


//  Loop through array...
//  for each item (div) in array
//    randomNumber = generateRandomBetween0and55() (you will need to make this function)
//
//    get data-count of game board div with id=randomNumber
//    if data-count < 3
//      append this div to the game board div
//      set z-index = data-count
//      set left and top position to data-count * -2
//      set data-count attribute to data-count + 1
//    else
//      get a new random number and repeat this process
//      USE FUNCTIONS to encapsulate this
//    end
//

// loop through Tile Array, and randomly place on board if data count is less than 3
// than increment board data-count by 1 and
// set z-index = data-count
// set left and top position to data-count * -2
// set data-count attribute to data-count + 1

var randomSelection = function() {
  for(var i = 0, i < 56; i++) {
    var randomNum = Math.floor(Math.random() * 55);
     $("#" + i) = randomNum
    if($("#" + i).data("count") < 3) {
          this.data("count", 1++);
        $("#" + i).append("<div z-index="newCount"/>")
      }
      // else {
      //
      // }
    }
  };

  randomSelection();


//
//
//
//
//
//
//
