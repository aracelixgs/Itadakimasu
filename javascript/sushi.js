class Sushi {

        constructor(xPos) {
        
            this.x = xPos;
            this.y = -50;
            this.w = 60;
            this.h = 60;
            this.speed = 2;

            this.sushiType,

            this.image = new Image()
            this.image.src = "./images/sushi.png"
           // this.maki = "./images/sushi.png"
           // this.nigiri = "./images/nigiri.png"
           // this.uramaki = "./images/uramaki.png"
           // this.multipleSushi = [this.maki, this.nigiri, this.uramaki]

        }
        
        drawSushi = () => {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
       // drawSushi(){
      //      for(let i = 0; i<this.multipleSushi.length; i++){
          //      this.sushiType = new Image();
         //       this.sushiType.src = this.multipleSushi[i]
          //      this.ctx.drawImage(this.sushiType, this.x, this.y, this.w, this.h)
         //   }
       // }
        moveSushi = () => {
            this.y +=this.speed
        }
        
        }

class Ramen {
    constructor(xPos) {
        
        this.x = xPos;
        this.y = -70;
        this.w = 80;
        this.h = 80;
        this.speed = 4;

        this.image = new Image()
        this.image.src = "./images/ramen.png"

    }
    
    drawRamen = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveRamen = () => {
        this.y +=this.speed
    }
    
    }

class LuckyCat {
    constructor(xPos) {
        
        this.x = xPos;
        this.y = canvas.height;
        this.w = 60;
        this.h = 80;
        this.speed = 4;

        this.image = new Image()
        this.image.src = "./images/luckycat.png"

    }
    
    drawLuckyCat = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveLuckyCat = () => {
        this.y -=this.speed
    }
    
    }
