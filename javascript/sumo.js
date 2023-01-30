class Sumo {

constructor() {

    this.x = 200;
    this.y = 200;
    this.w = 150;
    this.h = 180;
    this.speed = 20;
    this.image = new Image()
    this.image.src = "./images/sumo.png"
}

drawSumo = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
}

moveRightSumo = () => {
    this.x += this.speed
}
moveLeftSumo = () => {
    this.x -= this.speed
}
moveUpSumo = () => {
    this.y -= this.speed
}
moveDownSumo = () => {
    this.y += this.speed
}
moveDownRight = () => {
    this.y += this.speed
    this.x += this.speed
}
moveDownLeft = () => {
    this.y += this.speed
    this.x -= this.speed
}
moveUpRight = () => {
    this.y -= this.speed
    this.x += this.speed
}
moveUpLeft = () => {
    this.y -= this.speed
    this.x -= this.speed
}


}