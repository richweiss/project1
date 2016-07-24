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


function CheckforWin () {
  if
}
