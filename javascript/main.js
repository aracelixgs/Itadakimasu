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

const rightMovementSumo = (event) => {
    if(event.code === "Numpad6") {
        game.sumo.moveRightSumo()
    }
}
const leftMovementSumo = (event) => {
    if(event.code === "Numpad4") {
        game.sumo.moveLeftSumo()
    }
}
const upMovementSumo = (event) => {
    if(event.code === "Numpad8") {
        game.sumo.moveUpSumo()
    }
}
const downMovementSumo = (event) => {
    if(event.code === "Numpad2") {
        game.sumo.moveDownSumo()
    }
}
const downRightMovementSumo = (event) => {
    if(event.code === "Numpad3") {
        game.sumo.moveDownRight()
    }
}
const downLeftMovementSumo = (event) => {
    if(event.code === "Numpad1") {
        game.sumo.moveDownLeft()
    }
}
const upRightMovementSumo = (event) => {
    if(event.code === "Numpad9") {
        game.sumo.moveUpRight()
    }
}
const upLeftMovementSumo = (event) => {
    if(event.code === "Numpad7") {
        game.sumo.moveUpLeft()
    }
}


startBtnDOM.addEventListener("click", startGame)
restartBtnDOM.addEventListener("click", startGame)

window.addEventListener("keydown", rightMovementSumo)
window.addEventListener("keydown", leftMovementSumo)
window.addEventListener("keydown", upMovementSumo)
window.addEventListener("keydown", downMovementSumo)
window.addEventListener("keydown", downRightMovementSumo)
window.addEventListener("keydown", downLeftMovementSumo)
window.addEventListener("keydown", upRightMovementSumo)
window.addEventListener("keydown", upLeftMovementSumo)

