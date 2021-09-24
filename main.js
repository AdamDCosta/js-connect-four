// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button")

const startPage = document.querySelector("header")

const gameArea = document.querySelector(".game__area")




const startGame = () => {
  startBtn.addEventListener("click", () => {
    console.log(startPage)
    startPage.classList.remove("intro")
    startPage.classList.add("hide-intro")

    console.log("hello")
    
  })
}

startGame();