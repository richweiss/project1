# project1

BLACKJACK

create game board
create deck

Game should contain:

1. Deck of Cards (clickable)
2. Dealer Hand (two cards)
3. Player Hand (two cards)
4. Extra Slots for HIT Cards
5. Hit/Stay Button for Player
6. Shuffle Button
7. Reset Button
8. Wins/Losses Counter
9. *Extra* betting component

PseudoCode
Create array for randomized Deck of Cards.

Create objects for Dealer Hand, 
 	- -D <= 16 - HIT ALWAYS
         -D < 16 - STAY ALWAYS

Player Hand
Create If/Else - Player HIT or STAY.
 - Hit will POP or SHIFT from deck.

After player selects STAY, dealer compares total values of Dealer Hand vs Player hand

getWINNER
 total value of Player > total Value of Dealer
	EXCEPT if total value is > 21

Wins/Losses counter tallies results and displays on left-hand side of page. 

Create SHUFFLE button  that will randomize deck. 

- 
Forecasting Problems: 
 Do I default Ace to 11 or 1 or can I have those values switch?

Can I assign images on each of my individual cards?

Can I get deck to shuffle after a few hands?

Project Issues:
 Not enough grasp of syntax to execute game logic. 
 

 
