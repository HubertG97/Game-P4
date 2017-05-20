/// <reference path= "circle.ts"/>

class Ball extends Circle{

    private Xspeed : number;
    private Yspeed : number;
    constructor(){
        super(600, 650, 20);

        this.Xspeed = 0;
        this.Yspeed = 0;


    }

    public move(){

        this.Xspeed = 2;
        this.Yspeed = -2;

        this.x += this.Xspeed;
        this.y += this.Yspeed;

    }
}