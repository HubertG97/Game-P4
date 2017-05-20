var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext("2d");
        this.ball = new Ball();
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
        this.ball.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Circle = (function () {
    function Circle(x, y, radius, color, line_width) {
        var _this = this;
        if (color === void 0) { color = "red"; }
        if (line_width === void 0) { line_width = 2; }
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.draw = function () {
            var game = Game.getInstance();
            var ctx = game.ctx;
            var canvas = game.canvas;
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            console.log('drawn');
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    return Circle;
}());
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        _super.call(this, 600, 650, 20);
        this.Xspeed = 0;
        this.Yspeed = 0;
    }
    Ball.prototype.move = function () {
        this.Xspeed = 2;
        this.Yspeed = -2;
        this.x += this.Xspeed;
        this.y += this.Yspeed;
    };
    return Ball;
}(Circle));
//# sourceMappingURL=main.js.map