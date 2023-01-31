class Game {

    // PROPIEDADES

    constructor() {

        // --------- ELEMENTS ---------- //

        this.background = new Image();
        this.background.src = "./images/japofondo.png"
        this.backgroundArr = [];


        this.sumo = new Sumo()

        this.disparoArr = [];
        this.puedeDisparar = true;

        this.sushi = new Sushi()
        this.sushiArr = [];

        this.ramen = new Ramen()
        this.ramenArr = [];

        this.demonio = new Demonio()
        this.demonioArr = [];

        this.luckyCat = new LuckyCat()
        this.luckyCatArr = [];

        // --------- SOUND ---------- //

        this.soundGame = new Audio("./sounds/kotojuego.mp3")
        this.soundGame.volume = 0.05
        this.soundGameOver = new Audio("./sounds/gong.mp3")
        this.soundGameOver.volume = 0.1
        this.soundPoint = new Audio("./sounds/point.mp3")
        this.soundPoint.volume = 0.1
        this.soundSumoDemonio = new Audio("./sounds/arg.mp3")
        this.soundSumoDemonio.volume = 0.1
        this.soundDemonioDisparo = new Audio("./sounds/punch.mp3")
        this.soundDemonioDisparo.volume = 0.1

        

        // --------- OTHER ---------- //

        this.isGameOn = true;

        this.score = 0;
        this.lives = 0;

        this.frames = 1;
    
    }

    // ------------- METODOS --------------- //

    // AÑADIR ELEMENTOS

    foodAparece = ()=>{
        if(this.sushiArr.length === 0 || this.frames % 120 === 0) {
            let randomPosXSushi = Math.random() * (canvas.width-100)
            let randomSushi = new Sushi(randomPosXSushi)
            this.sushiArr.push(randomSushi)
        }
        if(this.ramenArr.length === 0 || this.frames % 320 === 0) {
            let randomPosXRamen = Math.random() * (canvas.width-100)
            let randomRamen = new Ramen(randomPosXRamen)
            this.ramenArr.push(randomRamen)
        }
    }
    demonioAparece = ()=>{
        if(this.demonioArr.length === 0 || this.frames % 320 === 0) {
            let randomPosY = Math.random() * (canvas.height-this.demonio.h)
            let randomDemonio = new Demonio(randomPosY)
            this.demonioArr.push(randomDemonio)

        }
    }
    disparoSumo = () => {
        if(this.puedeDisparar){
            let newDisparo = new Disparo(this.sumo.x, this.sumo.y)
            this.disparoArr.push(newDisparo);
            this.puedeDisparar = false;
            setTimeout(()=>{
                this.puedeDisparar = true;
            },500);
            //setTimeout(() =>{
                //this.sumo.image.src = "./images/sumodisparo.png"
           // },100)
        }
    }
    luckyCatAparece = () => {
        if(this.luckyCatArr.length === 0 || this.frames % 120 === 0) {
            let randomPosXluckyCat = Math.random() * (canvas.width-100)
            let randomluckyCat = new LuckyCat(randomPosXluckyCat)
            this.luckyCatArr.push(randomluckyCat)
            }
    }

    // ELIMINACIÓN DE ELEMENTOS
    removeFood = () => {
        if(this.sushiArr[0].x + this.sushiArr[0].w < 0) {
            this.sushiArr.shift()
        }
        if(this.ramenArr[0].x + this.ramenArr[0].w < 0) {
            this.ramenArr.shift()
        }
    }
    removeDemonios = () => {
        if(this.demonioArr[0].y + this.demonioArr[0].h < 0) {
            this.demonioArr.shift()
        }
    }

    // COLISIONES
    colisionSumoDemonio = () => {
        this.demonioArr.forEach ((eachDemonio, index) => {
        if (
            eachDemonio.x < this.sumo.x + this.sumo.w &&
            eachDemonio.x + eachDemonio.w > this.sumo.x &&
            eachDemonio.y < this.sumo.y + this.sumo.h &&
            eachDemonio.h + eachDemonio.y > this.sumo.y
          ) {
            this.demonioArr.splice(index, 1)
            this.score -=10
            this.soundSumoDemonio.play()
            if(this.score <= 0) {
                this.gameOver()
            }
         }
          })
    }
    colisionSumoFood = () => {
        this.sushiArr.forEach ((eachSushi, index) => {
        if (
            eachSushi.x < this.sumo.x + this.sumo.w &&
            eachSushi.x + eachSushi.w > this.sumo.x &&
            eachSushi.y < this.sumo.y + this.sumo.h &&
            eachSushi.h + eachSushi.y > this.sumo.y
          ) {
            this.sushiArr.splice(index, 1)
            this.score +=5
            this.soundPoint.play()
         }
        })
        this.ramenArr.forEach ((eachRamen, index) => {
         if (
            eachRamen.x < this.sumo.x + this.sumo.w &&
            eachRamen.x + eachRamen.w > this.sumo.x &&
            eachRamen.y < this.sumo.y + this.sumo.h &&
            eachRamen.h + eachRamen.y > this.sumo.y
          ) {
            this.ramenArr.splice(index, 1)
            this.score +=10
            this.soundPoint.play()
         }
          })
    
    }
    colisionDemonioDisparo = () =>{
        this.demonioArr.forEach ((eachDemonio, indexDemonio) => {
        this.disparoArr.forEach((eachDisparo, indexDisparo) => {
            if (
                eachDemonio.x < eachDisparo.x + eachDisparo.w &&
                eachDemonio.x + eachDemonio.w > eachDisparo.x &&
                eachDemonio.y < eachDisparo.y + eachDisparo.h &&
                eachDemonio.h + eachDemonio.y > eachDisparo.y
              ) {
                this.demonioArr.splice(indexDemonio, 1)
                this.disparoArr.splice(indexDisparo, 1)
                this.soundDemonioDisparo.play()
             }
              })
            })
    }

    // DIBUJADO DE ELEMENTOS ADICIONALES Y LIMPIEZA CANVAS

    drawScore = () => {
        ctx.font = "30px shangai";
        ctx.fillText('Score: ' + this.score, 50, 50)
        ctx.fillStyle = "#000000"
    }
    drawLives = () => {
        ctx.font = "30px shangai";
        ctx.fillText('Lives: ' + this.lives, 50, 100)
        ctx.fillStyle = "#000000"
    }
    gameOver = () => {
        this.soundGameOver.play()
        this.soundGame.pause()
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreenDOM.style.display = "flex";
    }
    drawBackground = ()  => {
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }
    clearCanvas =() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    


    // FUNCIÓN DE RECURSIÓN

    gameLoop = () => {
        this.frames++
        this.soundGame.play()

        // LIMPAR CANVAS
        this.clearCanvas()


        // MOVIMIENTOS Y ACCIONES

        // ------- Food -------- //
        this.foodAparece()
        this.removeFood()

        this.sushiArr.forEach((eachSushi) => {
            eachSushi.moveSushi()
        })
        
        this.ramenArr.forEach((eachRamen) => {
            eachRamen.moveRamen()
        })

        // -------- Demonio --------- //
        this.demonioAparece()
        this.demonioArr.forEach((eachDemonio) => {
            eachDemonio.moveDemonio()
        })
        this.removeDemonios()

        // -------- Disparos --------- //
        this.disparoArr.forEach((eachDisparo) =>{
            eachDisparo.moveDisparo()
        })

        // ------- Lucky Cat --------- //
        this.luckyCatAparece()
        this.luckyCatArr.forEach((eachCat) => {
            eachCat.moveLuckyCat()
        })
        
        // COLISIONES
        this.colisionSumoDemonio()
        this.colisionSumoFood()
        this.colisionDemonioDisparo()
        


        // DIBUJADO ELEMENTOS
        this.drawBackground()
        this.sumo.drawSumo()
        this.drawScore()
        this.drawLives()

        this.sushiArr.forEach((eachSushi) => {
            eachSushi.drawSushi()
        })
        this.ramenArr.forEach((eachRamen) => {
            eachRamen.drawRamen()
        })
        this.demonioArr.forEach((eachDemonio) => {
            eachDemonio.drawDemonio()
        })
        this.disparoArr.forEach((eachDisparo) => {
            eachDisparo.drawDisparo()
        })
        this.luckyCatArr.forEach((eachCat) => {
            eachCat.drawLuckyCat()
        })




        // 4. recursión y control
        if(this.isGameOn === true){
        requestAnimationFrame(this.gameLoop)
        }


    }
}