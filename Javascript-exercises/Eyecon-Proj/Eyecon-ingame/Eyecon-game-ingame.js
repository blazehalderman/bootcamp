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

var pairTotal = function() {
    //total tiles on board
    var pairCount = 50;

    //match pairCount with tiles on board


    //Take total pairCount, decrement by user input(-2) pairs


    //
}




/* GAMEBOARD OFFICIAL CONTINUED */
var tileSet = [
    "..\assets\images\eyecons\set6\set6-tile-0.jpg",
    "..\assets\images\eyecons\set6\set6-tile-1.jpg",
    "..\assets\images\eyecons\set6\set6-tile-2.jpg",
    "..\assets\images\eyecons\set6\set6-tile-3.jpg",
    "..\assets\images\eyecons\set6\set6-tile-4.jpg",
    "..\assets\images\eyecons\set6\set6-tile-5.jpg",
    "..\assets\images\eyecons\set6\set6-tile-6.jpg",
    "..\assets\images\eyecons\set6\set6-tile-7.jpg",
    "..\assets\images\eyecons\set6\set6-tile-8.jpg",
    "..\assets\images\eyecons\set6\set6-tile-9.jpg",
    "..\assets\images\eyecons\set6\set6-tile-10.jpg",
    "..\assets\images\eyecons\set6\set6-tile-11.jpg",
    "..\assets\images\eyecons\set6\set6-tile-12.jpg",
    "..\assets\images\eyecons\set6\set6-tile-13.jpg",
    "..\assets\images\eyecons\set6\set6-tile-14.jpg",
    "..\assets\images\eyecons\set6\set6-tile-15.jpg",
    "..\assets\images\eyecons\set6\set6-tile-16.jpg",
    "..\assets\images\eyecons\set6\set6-tile-17.jpg",
    "..\assets\images\eyecons\set6\set6-tile-18.jpg",
    "..\assets\images\eyecons\set6\set6-tile-19.jpg",
    "..\assets\images\eyecons\set6\set6-tile-20.jpg",
    "..\assets\images\eyecons\set6\set6-tile-21.jpg",
    "..\assets\images\eyecons\set6\set6-tile-22.jpg",
    "..\assets\images\eyecons\set6\set6-tile-23.jpg",
    "..\assets\images\eyecons\set6\set6-tile-24.jpg",
    "..\assets\images\eyecons\set6\set6-tile-25.jpg",
    "..\assets\images\eyecons\set6\set6-tile-26.jpg",
    "..\assets\images\eyecons\set6\set6-tile-27.jpg",
    "..\assets\images\eyecons\set6\set6-tile-28.jpg",
    "..\assets\images\eyecons\set6\set6-tile-29.jpg",
    "..\assets\images\eyecons\set6\set6-tile-30.jpg",
    "..\assets\images\eyecons\set6\set6-tile-31.jpg",
    "..\assets\images\eyecons\set6\set6-tile-32.jpg",
    "..\assets\images\eyecons\set6\set6-tile-33.jpg",
    "..\assets\images\eyecons\set6\set6-tile-34.jpg",
    "..\assets\images\eyecons\set6\set6-tile-35.jpg",
    "..\assets\images\eyecons\set6\set6-tile-36.jpg"

];

var Tile = function(img, Index) {
  var randomImg = Math.floor(Math.random() * 37);
    this.img = tileSet[randomImg];
    this.Index;
}


var allTiles = [];
var fiftyTiles = function() {
  for(i = 0; i < 50; i++) {
    allTiles.push(new Tile());
  };
};
fiftyTiles();
console.log(allTiles);

$(document).ready(function() {
  for(i = 0; i < 56; i++) {
    var idName = "tileSpot" + i;
    $("#board").append('<div id='+ idName +' " class="tileSpaces" data-count="0" />');
      $("#" + idName).css("z-index", "0");
      // for(j = 0; j < 3; j++) {
      //   if(j = 1) {
      //     $("#" + idName).css("z-index", "1");
      //   }
      //   if(j = 2) {
      //     $("#" + idName).css("z-index", "2");
      //   }
      //   if(j = 3) {
      //     $("#" + idName).css("z-index", "3");
      //   }
      // }
    }
});


// var setBlanks = function() {
//     var blanks = Math.floor(Math.random() * 68);
//     for (i = 0; i < blanks; i++) {
//         var blankSpot = Math.floor(Math.random() * 55);
//         while (allTiles[blankSpot] === "blank") {
//             var blankSpot = Math.floor(Math.random() * 55);
//         }
//         allTiles[blankSpot] = "blank";
//         allTiles[blankSpot + 56] = "blank";
//         allTiles[blankSpot + 112] = "blank";
//     }
//
// }
//
// var tilePopulate = function() {
//   for(var i = 0; i < 3; i++) {
//     for(var j = 0; j < 56; j++) {
//       if(allTiles[(56 * i)+ j] !== "blank") {
//         allTiles[(56 * i) + j] = new Tile();
//       }
//     }
//   }
// }
//
// tilePopulate();
// console.log(allTiles);

// -------- Clock --------

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
