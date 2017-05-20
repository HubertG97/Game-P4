/// <reference path="circle.ts"/>
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext("2d");
        this.ball = new Circle(0, 0, 20);
        console.log('constructor');
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
            console.log('Game instance made');
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        console.log('loop');
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 1280, 720);
        this.ball.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
// load
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
