// GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")

let startBtnDOM = document.querySelector("#start-btn")
let startScreenDOM = document.querySelector("#start-screen")

let restartBtnDOM = document.querySelector("#restart-btn")
let gameoverScreenDOM = document.querySelector("#gameover-screen")

let goHomeBtnDOM = document.querySelector("#gohome-btn")

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

const goHome = () =>{
    startScreenDOM.style.display = "flex"
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "none";
}
const sumoMovement = (event) => {
    if(event.code === "KeyD" || event.code === "Numpad6") {
        game.sumo.moveRightSumo()
    }
    if(event.code === "KeyA" || event.code === "Numpad4") {
        game.sumo.moveLeftSumo()
    }
    if(event.code === "KeyW" || event.code === "Numpad8") {
        game.sumo.moveUpSumo()
    }
    if(event.code === "KeyS" || event.code === "Numpad2") {
        game.sumo.moveDownSumo()
    }
    if(event.code === "KeyX" || event.code === "Numpad3") {
        game.sumo.moveDownRight()
    }
    if(event.code === "KeyZ" || event.code === "Numpad1") {
        game.sumo.moveDownLeft()
    }
    if(event.code === "KeyE" || event.code === "Numpad9") {
        game.sumo.moveUpRight()
    }
    if(event.code === "KeyQ" || event.code === "Numpad7") {
        game.sumo.moveUpLeft()
    }
    if(event.code === "Space" || event.code === "Numpad5") {
        game.disparoSumo()
    }
}




startBtnDOM.addEventListener("click", startGame)
restartBtnDOM.addEventListener("click", startGame)
goHomeBtnDOM.addEventListener("click", goHome)

window.addEventListener("keydown", sumoMovement)

//window.addEventListener("keydown", disparar)
