// GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")

let startBtnDOM = document.querySelector("#start-btn")
let startScreenDOM = document.querySelector("#start-screen")

let restartBtnDOM = document.querySelector("#restart-btn")
let gameoverScreenDOM = document.querySelector("#gameover-screen")

let game;




// state management functions

const startGame = () => {

    startScreenDOM.style.display = "none";
    canvas.style.display = "block";

    game = new Game()
   


    // 3. iniciar el juego (el game loop)
    game.gameLoop()
}
const sumoMovement = (event) => {
    if(event.code === "Numpad6") {
        game.sumo.moveRightSumo()
    }
    if(event.code === "Numpad4") {
        game.sumo.moveLeftSumo()
    }
    if(event.code === "Numpad8") {
        game.sumo.moveUpSumo()
    }
    if(event.code === "Numpad2") {
        game.sumo.moveDownSumo()
    }
    if(event.code === "Numpad3") {
        game.sumo.moveDownRight()
    }
    if(event.code === "Numpad1") {
        game.sumo.moveDownLeft()
    }
    if(event.code === "Numpad9") {
        game.sumo.moveUpRight()
    }
    if(event.code === "Numpad7") {
        game.sumo.moveUpLeft()
    }
    if(event.code === "Numpad5") {
        game.disparoSumo()
    }
}




startBtnDOM.addEventListener("click", startGame)
restartBtnDOM.addEventListener("click", startGame)

window.addEventListener("keydown", sumoMovement)

//window.addEventListener("keydown", disparar)
