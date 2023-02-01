class Demonio {

    constructor(yPos) {
    
        this.x = canvas.width;
        this.y = yPos;
        this.w = 80;
        this.h = 80;
        this.speed = 4;
        this.image = new Image()
        this.image.src = "./images/demonio.png"
        this.isDemonioDead = false;
    }
    
    drawDemonio = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveDemonio = () => {
        this.x -=this.speed
        // Enemy move in the Y axis
       // if ( this.y < sumo.y ) {
        //  this.y = this.y + this.speed;
       // } else if ( this.y > sumo.y ) {
      //    this.y = this.y - this.speed;
      //  }
    };
    }
  
    

    class BigDemonio {

        constructor(yPos) {
    
            this.x = canvas.width;
            this.y = yPos;
            this.w = 120;
            this.h = 120;
            this.speed = 1;
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