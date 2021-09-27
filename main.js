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
    this.cellsArray = Array.from(gridHTML)
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
    // const cellsArray = Array.from(gridHTML)
    console.log(this.cellsArray)
    for ( let i = 0; i < this.cellsArray.length; i++) {
      this.cellsArray[i].addEventListener("click", (event) => {
        event.preventDefault();
        console.log(this.cellsArray[i])
        
        if (!this.cellsArray[i + 7].classList.contains('taken')) {
          return;
        }

        else {

          if (this.isPlayerOnesTurn )  {
            if (this.cellsArray[i].classList.contains('taken')) {
              return;
            }
            else {
              this.cellsArray[i].classList.remove("game__area--cell")
              this.cellsArray[i].classList.add("game__area--playerone")
              this.cellsArray[i].classList.add("taken")
              console.log(this.cellsArray[i])
              this.isPlayerOnesTurn = false;
              this.isPlayerTwosTurn = true;
              gamePlayer.innerHTML = "Player Two"

            }
          }
        
          else {
            if (this.isPlayerTwosTurn )  {
              if (this.cellsArray[i].classList.contains('taken')) {
                return;
              }
            else {
              this.cellsArray[i].classList.remove("game__area--cell")
              this.cellsArray[i].classList.add("game__area--playertwo")
              this.cellsArray[i].classList.add("taken")
                this.isPlayerOnesTurn = true;
                this.isPlayerTwosTurn = false;
                gamePlayer.innerHTML = "Player One"
            }}
          }
        this.checkWin();
      }})
    }
  } 
  
  checkWin() {
    const gameWinner = document.querySelector(".game__winner")

    const winAlert = document.querySelector(".game-end")

    for ( let i = 0; i < this.cellsArray.length; i++) {
      
      if (this.isPlayerTwosTurn) {
        // check horizontal win for playerone
        if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 1].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 2].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 3].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              winAlert.classList.remove("game-end")
              winAlert.classList.add("game-end__active")
              // return alert("Player One wins!")
        }
        // check vertical win for playerone
        else if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 7].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 14].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 21].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              return alert("Player One wins!")
        }
        // check diagonal (left to right) win for playerone
        else if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 8].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 16].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 24].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              return alert("Player One wins!")
        } 
        // check diagonal (right to left) win for playerone
        else if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 6].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 12].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 18].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              return alert("Player One wins!")
        }
      }
        
      if (this.isPlayerOnesTurn) {
        // check horizontal win for playertwo
        if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 1].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 2].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 3].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              return alert("Player Two wins!")
        }
        // check vertical win for playertwo
        else if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 7].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 14].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 21].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              return alert("Player Two wins!")
        }
        // check diagonal (left to right) win for playertwo
        else if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 8].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 16].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 24].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              return alert("Player Two wins!")
        }
  
        // check diagonal (right to left) win for playertwo
        else if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 6].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 12].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 18].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              return alert("Player Two wins!")
        }
      }
      

  }


}

}

const game = new Game(gridHTML)



game.startGame();

game.playerTurn();

