/// <reference path="circle.ts"/>
/// <reference path="rectangle.ts"/>

class Game{

    private static instance : Game;
    public static canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('gameCanvas');
    public static ctx: CanvasRenderingContext2D = Game.canvas.getContext("2d");

    // public canvas : HTMLCanvasElement;
    // public ctx : CanvasRenderingContext2D;

    private ball: Ball;
    private paddle : Paddle;

    private constructor() {

            // this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
            // this.ctx = this.canvas.getContext("2d");
            this.ball = new Ball();
            this.paddle = new Paddle();
            requestAnimationFrame(() => this.gameLoop());

    }

    //singleton pattern
    public static getInstance(){
        if(! Game.instance) {
            Game.instance = new Game();
            //console.log('Game instance made');
        }
        return Game.instance
    }
    //gameloop
    private gameLoop(){

            Game.ctx.fillStyle = "black";
            Game.ctx.fillRect(0, 0, 1050, 500);
            this.ball.move();
            this.ball.bounce();
            this.paddle.move();
            this.paddle.draw();
            requestAnimationFrame(() => this.gameLoop());
        }

}

// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});
