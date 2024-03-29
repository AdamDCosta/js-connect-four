// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button");

const startPage = document.querySelector("header");

const gameArea = document.querySelector(".game__area");

const gridHTML = document.querySelectorAll(".square");

const restartBtns = document.getElementsByClassName("game__reset");

const gamePlayer = document.querySelector(".game__player");

const gamePlayerText = document.querySelector(".game__current-player")

const gameWinner = document.querySelector(".game__winner")

const winAlert = document.querySelector(".game-end")

const drawAlert = document.querySelector(".game-draw")

const quitBtns = document.querySelectorAll(".game__quit")



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
      gamePlayerText.classList.remove("game__current-player2")
      // this.createGrid(7, 7);
      
      
    })
  }

  //------couldn't manage to find a way to interact with a dynamically  created grid but the function below does work------//

  // createGrid(rows, cols){ 
  //   gameArea.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");
  //   gameArea.style.setProperty("grid-template-columns", "repeat(" + cols + ", 1fr)");
  //   for ( let i = 0; i < 42; i++ ) { 
  //     let cell = document.createElement("div") 
  //     gameArea.appendChild(cell).className = "game__area--cell square"
  //   }
  //   for ( let i = 0; i >= 42; i++ ) {
  //     let cell = document.createElement("div") 
  //     gameArea.appendChild(cell).className = "game__area--block square taken";
  //   }
  // }

  

  playerTurn() {
    
    for ( let i = 0; i < this.cellsArray.length; i++) {
      this.cellsArray[i].addEventListener("click", (event) => {
        event.preventDefault();
        
        
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
              gamePlayerText.classList.add("game__current-player2")
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
                gamePlayerText.classList.remove("game__current-player2")
            }}
          }
        this.checkWin();
        this.checkDraw();
      }})
    }
  } 
  
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
              
        }
        // check vertical win for playerone
        else if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 7].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 14].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 21].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              winAlert.classList.toggle("game-end__active")
              
        }
        // check diagonal (left to right) win for playerone
        else if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 8].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 16].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 24].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              winAlert.classList.toggle("game-end__active")
        } 
        // check diagonal (right to left) win for playerone
        else if (this.cellsArray[i].classList.contains("game__area--playerone") && 
            this.cellsArray[i + 6].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 12].classList.contains("game__area--playerone") &&
            this.cellsArray[i + 18].classList.contains("game__area--playerone")) {
              gameWinner.innerHTML = "Player One";
              winAlert.classList.toggle("game-end__active")
        }
      }
        
      if (this.isPlayerOnesTurn) {
        // check horizontal win for playertwo
        if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 1].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 2].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 3].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              winAlert.classList.toggle("game-end__active")
        }
        // check vertical win for playertwo
        else if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 7].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 14].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 21].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              winAlert.classList.toggle("game-end__active")
        }
        // check diagonal (left to right) win for playertwo
        else if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 8].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 16].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 24].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              winAlert.classList.toggle("game-end__active")
        }
  
        // check diagonal (right to left) win for playertwo
        else if (this.cellsArray[i].classList.contains("game__area--playertwo") && 
            this.cellsArray[i + 6].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 12].classList.contains("game__area--playertwo") &&
            this.cellsArray[i + 18].classList.contains("game__area--playertwo")) {
              gameWinner.innerHTML = "Player Two";
              winAlert.classList.toggle("game-end__active")
        }
      }
    }
  }

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


  reset() {
  
    for ( let i = 0; i < restartBtns.length; i++) {
      restartBtns[i].addEventListener("click", () => {
        
        for ( let j = 0; j < 42; j++) {

          this.cellsArray[j].classList.remove("game__area--playerone") 
          this.cellsArray[j].classList.remove("game__area--playertwo")
          this.cellsArray[j].classList.remove("taken")
          this.cellsArray[j].classList.add("game__area--cell") 

            
            if (winAlert.classList.contains("game-end__active")) {
              winAlert.classList.toggle("game-end__active")
              
            }

            if (drawAlert.classList.contains("game-end__active")) {
              drawAlert.classList.toggle(".game-draw__active")
                
            }
        }
    
      }) 
    }
  }  

  quitTheGame () {
    for ( let i = 0; i < quitBtns.length; i++) {
      quitBtns[i].addEventListener("click", () => {
        console.log("hi")
        startPage.classList.add("intro")
        startPage.classList.remove("hide-intro")

        for ( let j = 0; j < 42; j++) {
          this.cellsArray[j].classList.remove("game__area--playerone") 
          this.cellsArray[j].classList.remove("game__area--playertwo")
          this.cellsArray[j].classList.remove("taken")
          this.cellsArray[j].classList.add("game__area--cell") 
          
          if (winAlert.classList.contains("game-end__active")) {
            winAlert.classList.toggle("game-end__active")
            
          }

          if (drawAlert.classList.contains("game-end__active")) {
            drawAlert.classList.toggle(".game-draw__active")
              
          }
      }
        
      }
    )}  
    
  }
}



const game = new Game(gridHTML)


game.reset();

game.quitTheGame();

game.startGame();

game.playerTurn();

setTimeout(game.checkWin(), 3000);

game.checkDraw();

