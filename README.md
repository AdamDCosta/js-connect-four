# Connect Four

A game written with vanilla javascript, styled with SCSS and using BEM naming conventions

## Aim of the game

Get a row, column or diagonal of four tokens before your opponent.

![Connect Four Homepage](/assets/connect-four-homepage.jpg "Connect Four Homepage")

![Connect Four Game Board](/assets/connect-four-gameboard.jpg "Connect Four Game Board")



### Elements needed

Intro pop-up with instructions
Start game button
7 x 6 Grid -> empty at start -> dynamically generated?
Header
x2 tokens - one for each player
Winner alert
Play again button

### How it should work

Load page 
-> intro with instructions and start game button
Press start game 
-> home pages disappears
Empty 7x6 grid revealed
Message 
-> Playerone to go first

Class ->
2 players 
-> red and yellow
Playerone goes 
-> chooses a column/grid cell which is empty and has a taken cell below it
Method that handles moves 
-> who's turn is it 
-> which cell?
eg -> if playerones turn -> add red token
update who's turn
else add a yellow token
update who's turn
This repeats until a winning condition is met -> or no further cells empty
x4 red or yellow tokens horizontal
x4 red or yellow tokens vertical
x4 red or yellow tokens diagonal
An array of winning combinations?




