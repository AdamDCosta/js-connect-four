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

  createGrid(){ 
    for ( let i = 0; i < 42; i++ ) { 
    let cell = document.createElement("div") 
    gameArea.appendChild(cell).className = "game__area--cell game__area--cell" + i;
    }

}
}
const game = new Game(gridHTML)

game.startGame();
game.createGrid();