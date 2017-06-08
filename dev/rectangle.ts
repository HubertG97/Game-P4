/// <reference path= "ishape.ts"/>
/// <reference path= "main.ts"/>

class Rectangle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public rHeight = 10;
    public rWidth = 84;
    public lineWidth: number = 0;
    public color: string = "blue";
    constructor(x: number, y: number, rHeight: number, rWidth : number,  color: string = "blue", line_width: number = 0)
    {
        this.x = x;
        this.y = y;
        this.rHeight = rHeight;
        this.rWidth = rWidth;
        this.color = color;
        this.lineWidth = line_width;
        this.draw();
    }

    //draw rectangle
    public draw = (): void => {

        let ctx = Game.ctx;
        let canvas = Game.canvas;


        ctx.beginPath();
        ctx.rect(this.x, canvas.height-this.rHeight, this.rWidth, this.rHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        //console.log("rectangle drawn")
    }


}