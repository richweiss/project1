//PSUEDOCODE taken from notes
// BLACKJACK

// *Break down : Data, Presentation, Views, Style, DOM manipulation*

// create game board
// create deck

// Game should contain:

// 1. Deck of Cards (clickable)
// 2. Dealer Hand (two cards)
// 3. Player Hand (two cards)
// 4. Extra Slots for HIT Cards
// 5. Hit/Stay Button for Player
// 6. Shuffle Button
// 7. Reset Button
// 8. Wins/Losses Counter
// 9. *Extra* betting component

// PseudoCode
// Create array for randomized Deck of Cards.

// Create objects for Dealer Hand,
//   - -D <= 16 - HIT ALWAYS
//          -D < 16 - STAY ALWAYS

// Player Hand
// Create If/Else - Player HIT or STAY.
//  - Hit will POP or SHIFT from deck.

// After player selects STAY, dealer compares total values of Dealer Hand vs Player hand

// getWINNER
//  total value of Player > total Value of Dealer
//   EXCEPT if total value is > 21

// Wins/Losses counter tallies results and displays on left-hand side of page.

// Create SHUFFLE button  that will randomize deck.

// Problems:
//  Do I default Ace to 11 or 1 or can I have those values switch?

// Can I assign images on each of my individual cards?

// Can I get deck to shuffle after a few hands?

//create deck//
var deckArray = [
  {
  img: url()
  suit: "hearts";
  value: "two";
  facecard: "false";
  facevalue: "two";
  },
  {
  suit: "hearts";
  value: "three";
  facecard: "false";
  facevalue: "three";
  },
  {
  suit: "hearts";
  value: "four";
  facecard: "false";
  facevalue: "four";
  },
  {
  suit: "hearts";
  value: "five";
  facecard: "false";
  facevalue: "five";
  },
  {
  suit: "hearts";
  value: "six";
  facecard: "false";
  facevalue: "six";
  },
  {
  suit: "hearts";
  value: "seven";
  facecard: "false";
  facevalue: "seven";
  },
  {
  suit: "hearts";
  value: "eight";
  facecard: "false";
  facevalue: "eight";
  },
  {
  suit: "hearts";
  value: "nine";
  facecard: "false";
  facevalue: "nine";
  },
  {
  suit: "hearts";
  value: "ten";
  facecard: "false";
  facevalue: "ten";
  },
  {
  suit: "hearts";
  value: "ten";
  facecard: "true";
  facevalue: "Jack";
  },
  {
  suit: "hearts";
  value: "ten";
  facecard: "true";
  facevalue: "Queen";
  },
  {
  suit: "hearts";
  value: "ten";
  facecard: "true";
  facevalue: "King";
  },
  {
  suit: "diamonds";
  value: "two";
  facecard: "false";
  facevalue: "two";
  },
  {
  suit: "diamonds";
  value: "three";
  facecard: "false";
  facevalue: "three";
  },
  {
  suit: "diamonds";
  value: "four";
  facecard: "false";
  facevalue: "four";
  },
  {
  suit: "diamonds";
  value: "five";
  facecard: "false";
  facevalue: "two";
  },
  {
  suit: "diamonds";
  value: "six";
  facecard: "false";
  facevalue: "six";
  },
  {
  suit: "diamonds";
  value: "seven";
  facecard: "false";
  facevalue: "seven";
  },
  {
  suit: "diamonds";
  value: "eight";
  facecard: "false";
  facevalue: "eight";
  },
  {
  suit: "diamonds";
  value: "nine";
  facecard: "false";
  facevalue: "nine";
  },
  {
  suit: "diamonds";
  value: "ten";
  facecard: "false";
  facevalue: "ten";
  },
  {
  suit: "diamonds";
  value: "ten";
  facecard: "true";
  facevalue: "Jack";
  },
  {
  suit: "diamonds";
  value: "ten";
  facecard: "true";
  facevalue: "Queen";
  },
  {
  suit: "diamonds";
  value: "ten";
  facecard: "true";
  facevalue: "King";
  },
  {
  suit: "spades";
  value: "two";
  facecard: "false";
  facevalue: "two";
  },
  {
  suit: "spades";
  value: "three";
  facecard: "false";
  facevalue: "three";
  },
  {
  suit: "spades";
  value: "four";
  facecard: "false";
  facevalue: "four";
  },
  {
  suit: "spades";
  value: "five";
  facecard: "false";
  facevalue: "five";
  },
  {
  suit: "spades";
  value: "six";
  facecard: "false";
  facevalue: "six";
  },
  {
  suit: "spades";
  value: "seven";
  facecard: "false";
  facevalue: "seven";
  },
  {
  suit: "spades";
  value: "eight";
  facecard: "false";
  facevalue: "eight";
  },
  {
  suit: "spades";
  value: "nine";
  facecard: "false";
  facevalue: "nine";
  },
  {
  suit: "spades";
  value: "ten";
  facecard: "false";
  facevalue: "ten";
  },
  {
  suit: "spades";
  value: "ten";
  facecard: "true";
  facevalue: "Jack";
  },
  {
  suit: "spades";
  value: "ten";
  facecard: "true";
  facevalue: "Queen";
  },
  {
  suit: "spades";
  value: "ten";
  facecard: "true";
  facevalue: "King";
  },
  {
  suit: "clubs";
  value: "two";
  facecard: "false";
  facevalue: "two";
  },
  {
  suit: "clubs";
  value: "three";
  facecard: "false";
  facevalue: "three";
  },
  {
  suit: "clubs";
  value: "four";
  facecard: "false";
  facevalue: "four";
  },
  {
  suit: "clubs";
  value: "five";
  facecard: "false";
  facevalue: "five";
  },
  {
  suit: "clubs";
  value: "six";
  facecard: "false";
  facevalue: "six";
  },
  {
  suit: "clubs";
  value: "seven";
  facecard: "false";
  facevalue: "seven";
  },
  {
  suit: "clubs";
  value: "eight";
  facecard: "false";
  facevalue: "eight";
  },
  {
  suit: "clubs";
  value: "nine";
  facecard: "false";
  facevalue: "nine";
  },
  {
  suit: "clubs";
  value: "ten";
  facecard: "true";
  facevalue: "ten";
  },
  {
  suit: "clubs";
  value: "ten";
  facecard: "true";
  facevalue: "Jack";
  },
  {
  suit: "clubs";
  value: "ten";
  facecard: "true";
  facevalue: "Queen";
  },
  {
  suit: "clubs";
  value: "ten";
  facecard: "true";
  facevalue: "King";
  },
]


//create an ID container for each value to be placed//
var dealerCard1 = getElementbyID("dealerCard1")
var dealerCard2 = getElementbyID("dealerCard2")
var playerCard1 = getElementbyID("playerCard1")
var playerCard2 = getElementbyID("playerCard2")
//create overall value of each hand for checkforWinner//
var dealerValue = (dealerCard1.value) + (dealercard2.value)
var playerValue = (playercard1.value) + (playercard2.value)
//create function to random deal THEN assign values to each ID//
var randomCard = function() {
  var deal = Math.floor(Math.random(deckArray.length);
  return(deal);
}

var getDealerHand = function() {
  dealerCard1("randomCard");
  dealerCard2("randomCard");
}

var getPlayerHand = function() {
  playerCard1("randomCard");
  playerCard2("randomCard");
}

var start = function() {
  getDealerHand();
  getPlayerHand();
}
//add listener and connect to html button - should deal values to each card//
function addPlayListener(){
  var playButton = document.getElementById("start");
  playButton.addEventListener("click");
  return ("playButton")
}


var checkforWin = function () {
  if ()
}
