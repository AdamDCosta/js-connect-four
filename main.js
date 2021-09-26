// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button")

const startPage = document.querySelector("header")

const gameArea = document.querySelector(".game__area")

const gridHTML = document.querySelectorAll(".game__area--cell")


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
      console.log("hello")
    })
  }

  createGrid(rows, cols){ 
    gameArea.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");
    gameArea.style.setProperty("grid-template-columns", "repeat(" + cols + ", 1fr)");
    for ( let i = 0; i < 42; i++ ) { 
    let cell = document.createElement("div") 
    gameArea.appendChild(cell).className = "game__area--cell game__area--cell" + i;
    }
}

  firstTurn() {
    this.cells.forEach(cell => {
      square.addEventListener("click", () => {
        this.handlePlayersTurn(cell)
        this.checkWin();
        })
    })
  }

}
const game = new Game(gridHTML)

game.startGame();
game.createGrid(7, 6);