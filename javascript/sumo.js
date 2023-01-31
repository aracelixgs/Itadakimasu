class Sumo {

constructor() {

    this.x = 200;
    this.y = 200;
    this.w = 140;
    this.h = 180;
    this.speed = 20;
    this.image = new Image()
    this.image.src = "./images/sumo.png"

}
drawSumo = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
}
moveRightSumo = () => {
    if(this.x < canvas.width - this.w) {
    this.x += this.speed
    }
}
moveLeftSumo = () => {
    if(this.x > 0) {
    this.x -= this.speed
    }
}
moveUpSumo = () => {
    if(this.y > 0) {
    this.y -= this.speed
    }
}
moveDownSumo = () => {
    if(this.y < canvas.height - this.h) {
    this.y += this.speed
    }
}
moveDownRight = () => {
    if(this.x < canvas.width - this.w && this.y < canvas.height - this.h ) {
    this.y += this.speed
    this.x += this.speed
    }
}
moveDownLeft = () => {
    if(this.x > 0 && this.y < canvas.height - this.h) {
    this.y += this.speed
    this.x -= this.speed
    }
}
moveUpRight = () => {
    if(this.y > 0 && this.x < canvas.width - this.w) {
    this.y -= this.speed
    this.x += this.speed
    }
}
moveUpLeft = () => {
    if(this.y > 0 && this.x > 0) {
    this.y -= this.speed
    this.x -= this.speed
    }
}

}

class Disparo {
    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
        this.speed = 20;
        this.image = new Image()
        this.image.src = "./images/disparo.png"
    
    }
    
    drawDisparo = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    
    moveDisparo = () => {
        this.x += this.speed
    }
}