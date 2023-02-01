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
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "block";

    game = new Game()
   


    // 3. iniciar el juego (el game loop)
    game.gameLoop()
}
const sumoMovement = (event) => {
    if(event.code === "KeyD") {
        game.sumo.moveRightSumo()
    }
    if(event.code === "KeyA") {
        game.sumo.moveLeftSumo()
    }
    if(event.code === "KeyW") {
        game.sumo.moveUpSumo()
    }
    if(event.code === "KeyS") {
        game.sumo.moveDownSumo()
    }
    if(event.code === "KeyX") {
        game.sumo.moveDownRight()
    }
    if(event.code === "KeyZ") {
        game.sumo.moveDownLeft()
    }
    if(event.code === "KeyE") {
        game.sumo.moveUpRight()
    }
    if(event.code === "KeyQ") {
        game.sumo.moveUpLeft()
    }
    if(event.code === "Space") {
        game.disparoSumo()
    }
}




startBtnDOM.addEventListener("click", startGame)
restartBtnDOM.addEventListener("click", startGame)

window.addEventListener("keydown", sumoMovement)

//window.addEventListener("keydown", disparar)
