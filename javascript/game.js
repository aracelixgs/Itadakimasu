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

        this.bigDemonio = new BigDemonio()
        this.bigDemonioArr = [];

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
        this.soundLive = new Audio("./sounds/live.mp3")
        this.soundLive.volume = 0.1

        

        // --------- OTHER ---------- //

        this.isGameOn = true;

        this.score = 0;
        this.lives = 3;

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
    bigDemonioAparece = ()=>{
        if(this.bigDemonioArr.length === 0 || this.frames % 600 === 0) {
            let randomPosY = Math.random() * (canvas.height-this.bigDemonio.h)
            let randomBigDemonio = new BigDemonio(randomPosY)
            this.bigDemonioArr.push(randomBigDemonio)

        }
    }
    disparoSumo = () => {
        if(this.puedeDisparar){
            let newDisparo = new Disparo(this.sumo.x, this.sumo.y+(this.sumo.h/2))
            this.disparoArr.push(newDisparo);
            this.puedeDisparar = false;
            setTimeout(()=>{
                this.puedeDisparar = true;
            },500);
            setTimeout(() =>{
                this.sumo.image.src = "./images/sumo.png"
            },100)
            
        }
        this.sumo.image.src = "./images/sumodisparo.png"
    }
    luckyCatAparece = () => {
        if(this.luckyCatArr.length === 0 || this.frames % 500 === 0) {
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
            this.score -=20
            this.soundSumoDemonio.play()
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
        
        this.disparoArr.forEach((eachDisparo) => {
        this.demonioArr.forEach ((eachDemonio, indexDemonio) => {
            let contadorDisparos=0;
            if (
                eachDisparo.x < eachDemonio.x + eachDemonio.w &&
                eachDisparo.x + eachDisparo.w > eachDemonio.x &&
                eachDisparo.y < eachDemonio.y + eachDemonio.h &&
                eachDisparo.h + eachDisparo.y > eachDemonio.y
              ) {
                contadorDisparos +=1;
                
                this.demonioArr.splice(indexDemonio, 1)
                eachDisparo.image.src = "./images/humo.png"
                eachDisparo.w = 120;
                eachDisparo.h = 120;
                this.soundDemonioDisparo.play()
                console.log(contadorDisparos) 
             }
              
              })
            })
         
    }
    colisionBigDemonioDisparo = () =>{
        this.bigDemonioArr.forEach ((eachBigDemonio) => {
        this.disparoArr.forEach((eachDisparo, indexDisparo) => {
            //let contadorDisparos = 0;
            if (
                eachBigDemonio.x < eachDisparo.x + eachDisparo.w &&
                eachBigDemonio.x + eachBigDemonio.w > eachDisparo.x &&
                eachBigDemonio.y < eachDisparo.y + eachDisparo.h &&
                eachBigDemonio.h + eachBigDemonio.y > eachDisparo.y
              ) {
                //contadorDisparos +=1;
                this.disparoArr.splice(indexDisparo, 1)
                eachBigDemonio.image.src = "./images/demonioverde.png"
                this.soundDemonioDisparo.play() 
               
              }
               // if(contadorDisparos === 3) {
              //  this.bigDemonioArr.splice(indexBigDemonio, 1)
           //  }
           //  console.log(contadorDisparos)
           })
            })
            
    }
    colisionSumoLuckyCat = () => {
        this.luckyCatArr.forEach ((eachluckyCat, index) => {
        if (
            eachluckyCat.x < this.sumo.x + this.sumo.w &&
            eachluckyCat.x + eachluckyCat.w > this.sumo.x &&
            eachluckyCat.y < this.sumo.y + this.sumo.h &&
            eachluckyCat.h + eachluckyCat.y > this.sumo.y
          ) {
            this.luckyCatArr.splice(index, 1)
            this.lives +=1
            this.soundLive.play()
            }
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
    
    drawBackground = ()  => {
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }
    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    gameOver = () => {
        this.soundGameOver.play()
        this.soundGame.pause()
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreenDOM.style.display = "flex";
    }
    scoreAndLife = () => {
        if(this.score <= 0 && this.lives === 0) {
            this.gameOver()
        }
        if(this.score < 0) {
            this.lives -=1;
            this.score = 0;
        }
        
    }
   


    // FUNCIÓN DE RECURSIÓN

    gameLoop = () => {
        this.frames++
        this.soundGame.play()
        this.scoreAndLife()

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
        this.bigDemonioAparece()
        this.bigDemonioArr.forEach((eachBigDemonio) => {
            eachBigDemonio.moveBigDemonio()
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
        this.colisionBigDemonioDisparo()
        this.colisionSumoLuckyCat()
        


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
        this.bigDemonioArr.forEach((eachBigDemonio) => {
            eachBigDemonio.drawBigDemonio()
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