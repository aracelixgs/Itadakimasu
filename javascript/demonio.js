class Demonio {

    constructor(yPos, demonioImage, speed) {
    
        this.x = canvas.width;
        this.y = yPos;
        this.w = 60;
        this.h = 60;
        this.speed = speed;
        this.image = new Image()
        this.image.src = demonioImage;
        this.isDemonioDead = false;
        this.directionX = 1;
        this.directionY = 1;
    }
    
    drawDemonio = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveDemonio = () => {
        this.x -=this.speed
    }

}
  

    class BigDemonio {

        constructor(yPos) {
    
            this.x = canvas.width;
            this.y = yPos;
            this.w = 100;
            this.h = 100;
            this.speed = 1.5;
            this.image = new Image()
            this.image.src = "./images/demonio.png"
            this.live = 3;
        }
        
        drawBigDemonio = () => {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        }
        
        moveBigDemonio = () => {
            this.x -=this.speed
        }
        
    }