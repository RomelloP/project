let images = [ 
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png"

]

let dice = document.querySelectorAll("img");

let rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to play a round of craps
function playCraps() {
  var point = 0;
  var roll = rollDice() + rollDice();

  // Check for immediate win or loss
  if (roll === 7 || roll === 11) {
    console.log("You win!");
    return;
  } else if (roll === 2 || roll === 3 || roll === 12) {
    console.log("You lose!");
    return;
  } else {
    console.log("Point is " + roll);
    point = roll;
  }

  // Continue rolling until the point is made or a 7 is rolled
  while (true) {
    roll = rollDice() + rollDice();
    console.log("You rolled " + roll);

    if (roll === point) {
      console.log("You win!");
      return;
    } else if (roll === 7) {
      console.log("You lose!");
      return;
    }
  }
}

// Button 1 click event
let button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
  // console.log("Button 1 clicked");
});

// Button 2 click event
let button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
  // console.log("Button 2 clicked");
});

// Dice elements
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");

// Roll button click event
let rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", function() {
  let dice1Value = rollDice();
  let dice2Value = rollDice();

  dice1.style.backgroundImage = "url('dice_images/dice-" + dice1Value + ".png')";
  dice2.style.backgroundImage = "url('dice_images/dice-" + dice2Value + ".png')";

  // Call the playCraps function here to play the game
  playCraps();
});

