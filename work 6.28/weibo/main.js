/**
 * Created by sks on 2016/6/28.
 */

(function () {

    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        this.addRect();
        this._rect = new weibo.Rect(70, 70);
        this.render();

        this.addListeners();
    }

    Main.prototype.addRect = function () {

        this.img = new Image();

        this.img.src = "0.jpg";

    };

    Main.prototype.draw = function (img) {

        this._context2d.drawImage(img, 0, 0);

    };

    Main.prototype.addListeners = function () {
        this._canvas.onmousedown = function (e) {
            if (this._rect.hitTestPoint(e.layerX, e.layerY)) {

                this._rectOffsetX = this._rect.regX - e.layerX;
                this._rectOffsetY = this._rect.regY - e.layerY;

                this._canvas.onmousemove = function (event) {
                
                    this._rect.regX = event.layerX + this._rectOffsetX;
                    this._rect.regY = event.layerY + this._rectOffsetY;
                }.bind(this);
            }
        }.bind(this);

        window.onmouseup = function () {
            this._canvas.onmousemove = null;
        }.bind(this);
    };

    Main.prototype.render = function (time) {

        this._context2d.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._context2d.save();

        this._context2d.globalAlpha = 0.8;
        this._context2d.drawImage(this.img, 0, 0);

        this._rect.drawRing(this._context2d);

        requestAnimationFrame(this.render.bind(this));//requestAnimationFrame 接收一个函数作为回调，返回一个ID值
    };

    new Main();


})();