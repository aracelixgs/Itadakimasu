class Demonio {

    constructor(yPos) {
    
        this.x = canvas.width;
        this.y = yPos;
        this.w = 80;
        this.h = 80;
        this.speed = 4;
        this.image = new Image()
        this.image.src = "./images/demonio.png"
        this.demonioDead = false;
    }
    
    drawDemonio = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveDemonio = () => {
        this.x -=this.speed
    }
   // demonioExplosion(){
   //     this.image.src ="./images/explosion.png";
   //     this.w = 100;
    //    this.h = 100;
   //     this.demonioDead = true;
    //    setTimeout(()=>{
    //      this.x = -100
//
   //      },800);
   // }
    
    }