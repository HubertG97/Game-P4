/// <reference path= "ishape.ts"/>
/// <reference path= "main.ts"/>

class Circle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";
    constructor(x: number, y: number, radius: number, color: string = "red", line_width: number = 2)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    public draw = (): void => {
        let game = Game.getInstance();
        let ctx = game.ctx;
        let canvas = game.canvas;

        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        console.log('drawn')
    }
}