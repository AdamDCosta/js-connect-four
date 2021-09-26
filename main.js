// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button");

const startPage = document.querySelector("header");

const gameArea = document.querySelector(".game__area");

const gridHTML = document.querySelectorAll(".game__area--cell");

const gridArray = Array.from(gridHTML)
console.log(gridArray[48])

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

  // createArray(cells) {
  //   const gridArray = Array.from(this.cells)
  //   console.log(gridArray)
  // }

  playerTurn() {
    this.cells.forEach(gridCell => {
      gridCell.addEventListener("click", () => {
        
        console.log("boom")
        this.handlePlayersTurn(gridCell)
        // this.checkWin();
        })
    })
  }

  handlePlayersTurn(clickedCell) {
    if (clickedCell.textContent) {
      return;
    }
    
    if (this.isPlayerOnesTurn )  {
      clickedCell.textContent = "X";
      this.isPlayerOnesTurn = false;
      this.isPlayerTwosTurn = true;
    }
    else {
        clickedCell.textContent = "O";
        this.isPlayerOnesTurn = true;
        this.isPlayerTwosTurn = false;
      
    }
  }

  
}

const game = new Game(gridHTML)



game.startGame();

game.playerTurn()

