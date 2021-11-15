# Connect Four

A game written with vanilla javascript, styled with SCSS and using BEM naming conventions. Created in week five of the *_nology* web development course.

## Aim of the game

Get a row, column or diagonal of four tokens before your opponent.


![Connect Four Game Board](https://github.com/AdamDCosta/js-connect-four/blob/main/Assets/connect-four-gameboard.JPG?raw=true "Connect Four Game Board")



## Tech stack

- vanilla Javascript
- HTML
- Sass

## How it works

The functionality is contained within a class - which takes the game board's cells as the constructor. I focused on adding, removing and checking SCSS class names as the way to add tokens, check if a player can add a token to the selected cell and whether the game has been won or drawn.    

For example checking for a horizontal win for player one:

```
checkWin() {
    

    for ( let i = 0; i < this.cellsArray.length; i++) {
      
      if (this.isPlayerTwosTurn) {
        // check horizontal win for playerone
        if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 1].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 2].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 3].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              winAlert.classList.toggle("game-end__active")
              
```

When player one adds a token to the board that cell is given a class name of "game__area--playerone", so that I can use this to check for a win. To check for a draw:

```
  checkDraw() {
    let isDraw = false
    for ( let i = 0; i < this.cellsArray.length; i++) {
      if (!this.cellsArray[i].classList.contains("taken")) {
        isDraw = false;
        break;
      }
      else {
        isDraw = true;
      }
    }
    if (isDraw) {
      drawAlert.classList.toggle(".game-draw__active")
    }
  } 
```

When a player adds a token, as well as the player specific class name, I also add a "taken" class name so that after each turn the checkDraw function runs, looping through the grid and if all the cells have a "taken" class name then toggles a drawn game modal.



