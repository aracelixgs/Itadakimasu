# Itadakimasu

## [¡Comienza tu juego aquí!](https://aracelixgs.github.io/Itadakimasu/)

# Descripción

Itadakimasu es un juego dinámico en el que un Sumo gordito es el protagonista y tiene que ir consiguiendo comida para aumentar su puntuación.

Pero no todo es tan sencillo.. Los Onis (demonios japoneses) aparecerán de repente para evitar que te lo comas todo. ¡Cuidado con ellos! Pueden llegar a ser muy rápidos y si te chocas con ellos te restarán vidas.

Gracias al Gato de la Suerte podrás recuperar vidas, pero.. ¡corre para atraparlo! Ya que aparece y desaparece cuando menos te lo esperas.
Consigue acumular el mayor número de puntos posibles siempre y cuando tengas vidas, sino habrás perdido. ¡Suerte!

# Funciones principales

- El juego tiene un sumo como protagonista.
- Tiene a los Onis como enemigos, hay 3 colores y 2 tamaños.
- La colisión con los Onis te resta una vida.
- Para deshacerte de los Onis tienes que lanzarles una bola.
- Los Onis grandes necesitan más de un disparo para desaparecer.
- La comida suma puntos.
- Los gatos de la suerte que aparecen de forma esporádica aumentan una vida.

# Funciones secundarias

- La dificultad va aumentando.
- Los efectos de sonido van acorde al nivel.

# Proyect Structure

## main.js

- startGame() {}
- goHome() {}
- sumoMovement() {}
- restartGame () {}
- DOM manipulation
- addEventListeners

## game.js

- foodAparece () {}
- demonioAparece () {}
- bigDemonioAparece () {}
- disparoSumo () {}
- luckyCatAparece () {}
- demonioVerdeAparece () {}
- demonioNaranjaAparece () {}
- removeFood () {}
- removeDemonios () {}
- colisionSumoDemonio () {}
- olisionBigDemonioDisparo () {}
- colisionSumoLuckyCat () {}
- drawScore () {}
- drawLives () {}
- drawBackground () {}
- clearCanvas () {}
- gameOver () {}
- scoreAndLife () {}
- levelSpeed () {}
- gameLoop () {}

## sumo.js
- class Sumo {
- constructor () {
  this.image;
  this.image.src;
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  }
- drawSumo () {}
- moveRightSumo () {}
- moveLeftSumo () {}
- moveUpSumo () {}
- moveDownSumo () {}
- moveDownRight () {}
- moveDownLeft () {}
- moveUpRight () {}
- moveUpLeft () {}
}
- class Disparo {
- constructor () {

this.x;
this.y;
this.w;
this.h;
this.speed;
this.image
this.image.src
 }
    
- drawDisparo() {}
- moveDisparo() {}
}

## sushi.js

- class Sushi () {
- constructor () {
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.sushiType;
  this.image;
  this.image.src;
  }
- drawSushi () {}
- moveSushi () {}
}

- class Ramen () {
- constructor () {
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.image;
  this.image.src;
  }
- drawRamen () {}
- moveRamen () {}
}

## luckycat.js

- class LuckyCat () {
- constructor () {
  this.x;
  this.y;
  this.w;
  this.h;
  this.image;
  this.image.src;
  this.canLuckyCatAppear
  }
- drawLuckyCat () {}

## demonio.js

- class Demonio () {
- constructor () {
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.image;
  this.image.src;
  }
- drawDemonio () {}
- moveDemonio () {}
}
- class BigDemonio () {
- constructor () {
  this.x;
  this.y;
  this.w;
  this.h;
  this.speed;
  this.image;
  this.image.src;
  this.live;
  }
- drawBigDemonio () {}
- moveBigDemonio () {}
}

# Transiciones de pantalla

- Start Screen
- Game Screen
- Game Over Screen

