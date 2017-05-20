/// <reference path="circle.ts"/>

class Game{

    private static instance : Game;

    public canvas : HTMLCanvasElement;
    public ctx : CanvasRenderingContext2D;

    private ball: Ball;

    private constructor() {

            this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
            this.ctx = this.canvas.getContext("2d");

            this.ball = new Ball();
            console.log('constructor');
            requestAnimationFrame(() => this.gameLoop());

    }


    public static getInstance(){
        if(! Game.instance) {
            Game.instance = new Game();
            console.log('Game instance made');
        }
        return Game.instance
    }

    private gameLoop(){
            console.log('loop');
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(0, 0, 1280, 720);
            this.ball.draw();
            this.ball.move();
            requestAnimationFrame(() => this.gameLoop());
        }

}

// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});
