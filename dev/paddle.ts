/// <reference path= "rectangle.ts"/>

class Paddle extends Rectangle{

    private rightPress = false;
    private leftPress = false;

    constructor(){
        super(532, 0, 10, 84);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    private keyDownHandler = (e) => {
        if (e.keyCode == 39) {
            this.rightPress = true;
        }
        else if (e.keyCode == 37) {
            this.leftPress = true;
        }
    };

    private keyUpHandler = (e) => {
        if (e.keyCode == 39) {
            this.rightPress = false;
        }
        else if (e.keyCode == 37) {
            this.leftPress = false;
        }

    };

    //padle movement 
    public move(){

        let ctx = Game.ctx;
        let canvas = Game.canvas;



        if(this.rightPress && this.x < canvas.width-this.rWidth) {
            this.x += 7;
        }
        else if(this.leftPress && this.x - this.rWidth >= -this.rWidth) {
            console.log(this.x);
            this.x -= 7;



        }

    }


}
