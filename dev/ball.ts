/// <reference path= "circle.ts"/>

class Ball extends Circle{

    private Xspeed : number = 2;
    private Yspeed : number = -2;
    constructor(){
        super(600, 650, 20);



    }

    public move(){

        this.x += this.Xspeed;
        this.y += this.Yspeed;

    }
    public bounce(){
        let game = Game.getInstance();
        let ctx = game.ctx;
        let canvas = game.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();

        if (this.x + this.Xspeed > canvas.width - this.radius || this.x + this.Xspeed < this.radius) {
            this.Xspeed = -this.Xspeed;
            console.log('bounce');
        }
        if (this.y + this.Yspeed > canvas.height - this.radius || this.y + this.Yspeed < this.radius) {
            this.Yspeed = -this.Yspeed;
            console.log('bounce');
        }
    }

}
setInterval(this.move, 10);