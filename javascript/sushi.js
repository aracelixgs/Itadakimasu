class Sushi {

        constructor(xPos) {
        
            this.x = xPos;
            this.y = 0;
            this.w = 120;
            this.h = 120;
            this.speed = 2;

            this.sushiImg = new Image()
            this.sushiImg.src = "./images/sushi.png"

            this.ramenImg = new Image()
            this.ramenImg.src = "./images/ramen.png"

            this.foodElements = [this.sushiImg, this.ramenImg]
        }
        
        drawSushi = () => {
            for(let i=0; i<=this.foodElements.length; i++) {
            ctx.drawImage(this.foodElements[i], this.x, this.y, this.w, this.h)
            }
            this.drawSushi(this.foodElements)
        }
        
        moveSushi = () => {
            this.y +=this.speed
        }
        
        }