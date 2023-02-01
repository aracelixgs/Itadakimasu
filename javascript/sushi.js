class Sushi {

        constructor(xPos) {
        
            this.x = xPos;
            this.y = -50;
            this.w = 60;
            this.h = 60;
            this.speed = 2;

            this.image = new Image()
            this.image.src = "./images/sushi.png"

        }
        
        drawSushi = () => {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
        
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
