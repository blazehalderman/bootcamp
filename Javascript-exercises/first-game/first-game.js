var valueGuess = document.getElementById('guess');
var getButton = document.getElementById('submit').addEventListener('click', function() {
  checkGuess(valueGuess.value)
});

var pInput = document.getElementById('display');


var Person = function(id, firstname, lastname) {
  this.id = id,
  this.firstname = firstname,
  this.lastname = lastname,
  this.getInitials = function() {
    return this.firstname.charAt(0) + this.lastname.charAt(0);
  };
}

var Game = function() {
  this.students = [
    new Person(1, "Markham", "Gross"),
    new Person(2, "Ari", "Zamudio"),
    new Person(3, "Liam", "Hurt"),
    new Person(4, "Mike", "McDermott"),
    new Person(5, "Dylan", "Eckert"),
    new Person(6, "Aaron", "Martin"),
    new Person(7, "Markus", "Brun"),
    new Person(8, "Blaze", "Halderman"),
    new Person(9, "Jayson", "Smith"),
    new Person(10, "Svyatoslav", "Safonov")
  ],
  this.start = function () {

    console.log('game starting...');
    this.rightAnswer = Math.floor(Math.random() * 10) + 1;
    this.currentScore = 10;
    this.gameClock = 0;
    this.previousGuesses = [];
    this.gameStart = new Date();
    this.gameRef = setInterval(gameTimer, 1000);
  };
};
var gameTimer = function() {
  checkTime();
}

var checkTime = function() {
  var checkDate = new Date();
  game.gameClock = Math.floor( (checkDate - game.gameStart) / 1000 );

  if (game.gameClock >= 20) {
    clearInterval(game.gameRef);
    pInput.textContent = 'You ran out of time, thanks for playing!';
    game.start();
  }
}

var showPrompt = function() {

  if (valueGuess.value === '') {
    pInput.textContent = 'Not a student. Put initials of student.';
  } else if (valueGuess.value){
    checkGuess( guess.toUpperCase() );
  }
};

var checkGuess = function() {
  checkTime();

  if (game.previousGuesses.indexOf(valueGuess.value) !== -1) {
    wrongAnswer('You already guessed that!');
    return;
  }

  for (i = 0; i < game.students.length; i++) {
      if ( valueGuess.value === game.students[i].getInitials() ) {
        if ( game.students[i].id === game.rightAnswer ) {
          wrongAnswer('You are correct!');
          game.start();
          return;
        } else {
          game.previousGuesses.push(valueGuess.value);
          wrongAnswer('Wrong!  Find the pie!');
          return;
        }
      }
    }

    wrongAnswer('No matching student found.');
  }

  var wrongAnswer = function(message) {
    game.currentScore--;
    pInput.textContent = message;
    //showPrompt();
  }

  var restart = function() {
    game.start();
  }

  var game = new Game();
  game.start();
