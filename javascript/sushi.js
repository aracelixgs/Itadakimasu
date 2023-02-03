class Sushi {

        constructor(xPos, yPos, sushiImage) {
            this.x = xPos;
            this.y = yPos;
            this.w = 40;
            this.h = 40;
            this.speed = 2;

            this.sushiType,

            this.image = new Image()
            this.image.src = sushiImage;

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
        this.w = 60;
        this.h = 60;
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
