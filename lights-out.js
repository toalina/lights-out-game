
// ======= LIGHTS OUT SOLUTION BY ALINA TO ====== //


/* Lights Out is a classic puzzle game.
 * (https://en.wikipedia.org/wiki/Lights_Out_%28game%29)
 * The rules are as follows:
 *
 * 1. Player is presented with a board with a random
 *    arrangement of on and off lights.
 *
 * 2. Each time player presses a light, it toggles that
 *    light's state as well as the state of the lights
 *    immediately above, below, left, and right of it.
 *    For example, given this board:
 *
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◼︎ ◻︎ ◼︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◼︎ ◼︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *
 *    Pressing on the light in the second column of the
 *    second row results in:
 *
 *    ◻︎ ◼︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◼︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◼︎ ◼︎ ◼︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *
 *    The toggling of lights does not "wrap around" the
 *    board. So, for instance, now pressing the light in the
 *    second column of the top row only toggles four lights:
 *
 *    ◼︎ ◻︎ ◼︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◼︎ ◼︎ ◼︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *
 * 3. When the player successfully turns off all the lights
 *    they win.
 *
 * Your task today is to implement a simple 5x5 version of
 * this game. We've provided the HTML and styles for it.
 * You will need to write javascript that will:
 *
 * 1. Toggle the appropriate 3 to 5 lights. (Change their class
 *    from `off` to `on`.)
 * 2. Check if all the lights are off. If they are, call
 *    `victory();`
 * 3. Set up the board with a random arrangement of lights.
 *
 * Guidelines:
 *
 * - Feel free to use jQuery or just vanilla javascript.
 * - Don't worry about browser compatibility. We'll check
 *   your work in any modern browser of your choice.
 * - Feel free to use javascript documentation; just don't
 *   reference other implementations of Lights Out.
 *   (Chances are other implementations will be more
 *   complicated than we're looking for here anyway.)
 *
 */

// ======= LIGHTS OUT SOLUTION BY ALINA TO ====== //
// ======= code starts here ======= //

function victory () {
  alert('Victory!');
  setUp();
}

function setUp() {
  // This should set up the board with a random arrangement
  // of on and off lights. Note that not all Lights Out
  // boards are solvable. An easy way to generate solvable
  // boards is by simulating random clicks.

  for (i = 0; i < 24; i++) {
    document.getElementsByClassName("square off")[Math.floor(Math.random() * 24)].setAttribute("class", "square on");
  }
}

function checkBoard() {
  // count how many OFF squares
  var offSquares = document.querySelectorAll('#lightsout .off').length;
  console.log(offSquares);

  // call victory() if 25 squares are OFF;
  if (offSquares == 25) {
    victory();
  }
}


// Write the code to handle clicking on the lights here.
$(document).ready(function() {
  // when click on div with class containing "square"
  $("div[class~='square']").click(function(){

    // Set up variables for toggle squares
    var $target = $(this);
    var xTarget = $target.data("row"); // current X (data-row)
    var yTarget = $target.data("col"); // current Y (data-col)
    var xAbove = xTarget - 1;  // above X
    var xBelow = xTarget + 1;  // below X
    var xRight = $target.next().data("row"); // to right X
    var yRight = $target.next().data("col"); // to right y
    var xLeft = $target.prev().data("row"); // to left X
    var yLeft = $target.prev().data("col"); // to left Y

    // toggle current
    if (xTarget && yTarget) {
      $target.toggleClass("on off");
    }

    // toggle the next, to the RIGHT
    if (xTarget = xRight && yTarget < yRight) {
      $target.next().toggleClass("on off");
    }

    // toggle to prev, to the LEFT
    if (xTarget = xLeft && yTarget > yLeft) {
      $target.prev().toggleClass("on off");
    }

    // toggle ABOVE
    if (xAbove && yTarget) {
      $('[data-row="' + xAbove +'"][data-col="'+ yTarget + '"]').toggleClass("on off");
    }

    // toggle BELOW
    if (xBelow && yTarget) {
      $('[data-row="' + xBelow +'"][data-col="'+ yTarget + '"]').toggleClass("on off");
    }

    checkBoard(); // count offSquares everytime user clicks

  });
});

// Start the game:
setUp();


