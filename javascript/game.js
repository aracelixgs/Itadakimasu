class Game {

    // PROPIEDADES

    constructor() {
        this.background = new Image();
        this.background.src = "./images/japofondo.jpg"

        this.sumo = new Sumo()

        this.sushi = new Sushi()
        this.sushiArr = [];
        console.log(this.sushiArr)

        this.demonio = new Demonio()
        this.demonioArr = [];
        console.log(this.demonioArr)

        this.isGameOn = true;

        this.score = 2;

        this.frames = 1;
    
    }

    // METODOS
    drawScore = () => {
        ctx.font = "30px Arial";
        ctx.fillText('Score: ' + this.score, 100, 100)
        ctx.fillStyle = "#000000"
    }
    gameOver = () => {
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreenDOM.style.display = "flex";
    }
    colisionSumoDemonio = () => {
        this.demonioArr.forEach ((eachDemonio, index) => {
        if (
            eachDemonio.x < this.sumo.x + this.sumo.w &&
            eachDemonio.x + eachDemonio.w > this.sumo.x &&
            eachDemonio.y < this.sumo.y + this.sumo.h &&
            eachDemonio.h + eachDemonio.y > this.sumo.y
          ) {
            this.demonioArr.splice(index, 1)
            this.score -=1
            if(this.score <= 0) {
                this.gameOver()
            }
         }
          })
    }
 
   
    removeDemonios = () => {
        if(this.demonioArr[0].y + this.demonioArr[0].h < 0) {
            this.demonioArr.shift()
        }
    }
    demonioAparece = ()=>{
        if(this.demonioArr.length === 0 || this.frames % 320 === 0) {
            let randomPosY = Math.random() * (canvas.height)
            let randomDemonio = new Demonio(randomPosY)
            this.demonioArr.push(randomDemonio)

        }
    }
    removeSushi = () => {
        if(this.sushiArr[0].x + this.sushiArr[0].w < 0) {
            this.sushiArr.shift()
        }
    }
    sushiAparece = ()=>{
        if(this.sushiArr.length === 0 || this.frames % 120 === 0) {
            let randomPosX = Math.random() * (canvas.width)
            let randomSushi = new Sushi(randomPosX)
            this.sushiArr.push(randomSushi)

        }
    }
    drawBackground = ()  => {
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }
    clearCanvas =() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    



    gameLoop = () => {

        this.frames++

        // 1. limpiar canvas
        this.clearCanvas()


        // 2. movimientos y acciones de elementos
        this.sushiAparece()
        this.sushiArr.forEach((eachSushi) => {
            eachSushi.moveSushi()
        })
        this.removeSushi()

        this.demonioAparece()
        this.demonioArr.forEach((eachDemonio) => {
            eachDemonio.moveDemonio()
        })
        this.removeDemonios()

        this.colisionSumoDemonio()
        


        // 3. dibujado de elementos
        this.drawBackground()
        this.sumo.drawSumo()
        this.drawScore()

        this.sushiArr.forEach((eachSushi) => {
            eachSushi.drawSushi()
        })
        this.demonioArr.forEach((eachDemonio) => {
            eachDemonio.drawDemonio()
        })


        // 4. recursión y control
        if(this.isGameOn === true){
        requestAnimationFrame(this.gameLoop)
        }


    }
}