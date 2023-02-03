class LuckyCat {
    constructor(xPos, yPos) {
        
        this.x = xPos;
        this.y = yPos;
        this.w = 60;
        this.h = 80;
        //this.speed = 4;

        this.image = new Image()
        this.image.src = "./images/luckycat.png"

       this.canLuckyCatAppear = false;
        setInterval(() => {
        this.canLuckyCatAppear = true;
       }, 16000);
    }
    
    drawLuckyCat = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
   // moveLuckyCat = () => {
  //      this.y -=this.speed
  //  }
    
    }