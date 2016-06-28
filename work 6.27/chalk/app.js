/**
 * Created by sks on 2016/6/27.
 */

(function () {

    function Main() {

        this._canvas = document.getElementById("blackboard");
        this._context2d = this._canvas.getContext("2d");
        this.mouseEvent();

    }

    Main.prototype.mouseEvent = function () {
         var that=this;
        this._canvas.onmousedown = function (event) {
            this._context2d.beginPath();
            this._context2d.moveTo(event.clientX-10,event.clientY-10);
            this._canvas.onmousemove = this.drawChalk.bind(this);
            window.onmouseup = function () {
                that._canvas.onmousemove = null;
                that._context2d.closePath();
            }

        }.bind(this);

    };
    // var font=document.getElementById("font");
    // var color;
    // font.onclick=function () {
    //     return this._context2d.strokeStyle= "hsb(" + Math.random()  + ", 1, 1)";
    // }

    Main.prototype.drawChalk=function (event) {

        var x = event.clientX-10;
        var y = event.clientY-10;

        this._context2d.lineTo(x,y);
        this._context2d.strokeStyle="white";
       


        this._context2d.stroke();
        console.log(x,y);


    };
    new Main();
})();