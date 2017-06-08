var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            var ctx = Game.ctx;
            var canvas = Game.canvas;
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();
            ctx.restore();
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
        _super.call(this, 500, 50, 20);
        this.Xspeed = 2;
        this.Yspeed = -2;
    }
    Ball.prototype.move = function () {
        this.x += this.Xspeed;
        this.y += this.Yspeed;
    };
    Ball.prototype.bounce = function () {
        var ctx = Game.ctx;
        var canvas = Game.canvas;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        if (this.x + this.Xspeed > canvas.width - this.radius || this.x + this.Xspeed < this.radius) {
            this.Xspeed = -this.Xspeed;
        }
        if (this.y + this.Yspeed > canvas.height - this.radius || this.y + this.Yspeed < this.radius) {
            this.Yspeed = -this.Yspeed;
        }
    };
    return Ball;
}(Circle));
setInterval(this.move, 10);
var Rectangle = (function () {
    function Rectangle(x, y, rHeight, rWidth, color, line_width) {
        var _this = this;
        if (color === void 0) { color = "blue"; }
        if (line_width === void 0) { line_width = 0; }
        this.x = 0;
        this.y = 0;
        this.rHeight = 10;
        this.rWidth = 84;
        this.lineWidth = 0;
        this.color = "blue";
        this.draw = function () {
            var ctx = Game.ctx;
            var canvas = Game.canvas;
            ctx.beginPath();
            ctx.rect(_this.x, canvas.height - _this.rHeight, _this.rWidth, _this.rHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        };
        this.x = x;
        this.y = y;
        this.rHeight = rHeight;
        this.rWidth = rWidth;
        this.color = color;
        this.lineWidth = line_width;
        this.draw();
    }
    return Rectangle;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.ball = new Ball();
        this.paddle = new Paddle();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        Game.ctx.fillStyle = "black";
        Game.ctx.fillRect(0, 0, 1050, 500);
        this.ball.move();
        this.ball.bounce();
        this.paddle.move();
        this.paddle.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.canvas = document.getElementById('gameCanvas');
    Game.ctx = Game.canvas.getContext("2d");
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle() {
        var _this = this;
        _super.call(this, 532, 0, 10, 84);
        this.rightPress = false;
        this.leftPress = false;
        this.keyDownHandler = function (e) {
            if (e.keyCode == 39) {
                _this.rightPress = true;
            }
            else if (e.keyCode == 37) {
                _this.leftPress = true;
            }
        };
        this.keyUpHandler = function (e) {
            if (e.keyCode == 39) {
                _this.rightPress = false;
            }
            else if (e.keyCode == 37) {
                _this.leftPress = false;
            }
        };
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }
    Paddle.prototype.move = function () {
        var ctx = Game.ctx;
        var canvas = Game.canvas;
        if (this.rightPress && this.x < canvas.width - this.rWidth) {
            this.x += 7;
        }
        else if (this.leftPress && this.x - this.rWidth >= -this.rWidth) {
            console.log(this.x);
            this.x -= 7;
        }
    };
    return Paddle;
}(Rectangle));
//# sourceMappingURL=main.js.map