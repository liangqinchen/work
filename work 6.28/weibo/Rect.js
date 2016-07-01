/**
 * Created by sks on 2016/6/28.
 */
window.weibo = window.weibo || {};
(function () {

    function Rect(width, height) {
        this._width = width;
        this._height = height;
        this._x = 0;
        this._y = 0;
        this._regX = 100;
        this._regY = 100;

        this._rotation = 0;

    }

    Object.defineProperties(Rect.prototype, {
        x: {
            set: function (value) {
                this._x = value;
            },
            get: function () {
                return this._x;
            }
        },
        y: {
            set: function (value) {
                this._y = value;
            },
            get: function () {
                return this._y;
            }
        },
        regX: {
            set: function (value) {
                this._regX = value;
            },
            get: function () {
                return this._regX;
            }
        },
        regY: {
            set: function (value) {
                this._regY = value;
            },
            get: function () {
                return this._regY;
            }
        },
        width: {
            set: function (value) {
                this._width = value;
            },
            get: function () {
                return this._width;
            }
        },
        height: {
            set: function (value) {
                this._height = value;
            },
            get: function () {
                return this._height;
            }
        },
        rotation: {
            set: function (value) {
                this._rotation = value;
            },
            get: function () {
                return this._rotation;
            }
        }
    });

    /**
     *
     * @param context2d {CanvasRenderingContext2D}
     */
    Rect.prototype.drawRing = function (context2d) {

        context2d.save();
        context2d.fillStyle = "#ffffff";

        context2d.beginPath();
        context2d.rect(0, 0, 200, 200);
        
        context2d.arc(this.regX, this.regY, 60, 0, Math.PI * 2);
        context2d.translate(this.x, this.y);
        context2d.rotate(this.rotation);
        context2d.closePath();
        context2d.fill("evenodd");
        context2d.restore();


        // context2d.translate(this.x, this.y);
        // context2d.rotate(this.rotation);
        // context2d.fillRect(-this.regX, -this.regY, this.width, this.height);
        // context2d.restore();
    };

    Rect.prototype.hitTestPoint = function (pointX, pointY) {
        return Math.abs(pointX - this.regX) * Math.abs(pointX - this.regX) + Math.abs(pointY - this.regY) * Math.abs(pointY - this.regY) < 3600;

    }

    weibo.Rect = Rect;
})();