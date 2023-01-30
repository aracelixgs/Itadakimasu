class Demonio {

    constructor(yPos) {
    
        this.x = canvas.width;
        this.y = yPos;
        this.w = 80;
        this.h = 80;
        this.speed = 4;
        this.image = new Image()
        this.image.src = "./images/demonio.png"
    }
    
    drawDemonio = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveDemonio = () => {
        this.x -=this.speed
    }
    
    }