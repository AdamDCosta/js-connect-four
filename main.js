// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button");

const startPage = document.querySelector("header");

const gameArea = document.querySelector(".game__area");

const gridHTML = document.querySelectorAll(".square");

console.log(gridHTML)

// console.log(gridArray[48])

const restart = document.querySelector(".game__reset");

const gamePlayer = document.querySelector(".game__player");

class Game {
  constructor(cells) {
    this.cells = cells;
    this.isPlayerOnesTurn = true;
    this.isPlayerTwosTurn = false;
  }

  startGame() {
    startBtn.addEventListener("click", () => {
      console.log(startPage)
      startPage.classList.remove("intro")
      startPage.classList.add("hide-intro")
      gamePlayer.innerHTML = "Player One"
      // game.createGrid(7, 7);
      
    })
  }

  // createGrid(rows, cols){ 
  //   gameArea.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");
  //   gameArea.style.setProperty("grid-template-columns", "repeat(" + cols + ", 1fr)");
  //   for ( let i = 0; i < 42; i++ ) { 
  //     let cell = document.createElement("div") 
  //     gameArea.appendChild(cell).className = "game__area--cell game__area--cell" + i;
  //   }
  //   for ( let i = 0; i >= 42; i++ ) {
  //     let cell = document.createElement("div") 
  //     gameArea.appendChild(cell).className = "game__area--taken game__area--taken" + i;
  //   }
  // }



  playerTurn() {
    const cellsArray = Array.from(gridHTML)
    console.log(cellsArray)
    for ( let i = 0; i < cellsArray.length; i++) {
      cellsArray[i].addEventListener("click", (event) => {
        event.preventDefault();
        console.log(cellsArray[i])
        // if (cellsArray[i].classList != "game__area--cell") {
        //   console.log(cellsArray[i])
        //   return;
        // }
        // else if (cellsArray[i + 7].classList.contains("cell") ) {
        //   return;
        // }

        if (!cellsArray[i + 7].classList.contains('taken')) {
          return;
        }

        else {

          if (this.isPlayerOnesTurn )  {
            cellsArray[i].classList.remove("game__area--cell")
            cellsArray[i].classList.add("game__area--playerone")
            cellsArray[i].classList.add("taken")
            console.log(cellsArray[i])
            this.isPlayerOnesTurn = false;
            this.isPlayerTwosTurn = true;
            gamePlayer.innerHTML = "Player Two"
          }
        
          else {
            cellsArray[i].classList.remove("game__area--cell")
            cellsArray[i].classList.add("game__area--playertwo")
            cellsArray[i].classList.add("taken")
              this.isPlayerOnesTurn = true;
              this.isPlayerTwosTurn = false;
              gamePlayer.innerHTML = "Player One"
          }
        // this.checkWin();
        }
    })
  }

  

} 
  
}

const game = new Game(gridHTML)



game.startGame();

game.playerTurn();

