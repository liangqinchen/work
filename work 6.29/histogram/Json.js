/**
 * Created by sks on 2016/6/29.
 */

window.ucai = window.ucai || {};

(function () {

    function Json(str) {
        this._MAX_VALUE = 100;
        this.strHTML = str.html;
        this.strCSS = str.css;
        this.strjS = str.js;


        this.One = [
            [this.strHTML.chrome, this.strHTML.firefox, this.strHTML.ie],
            [this.strCSS.chrome, this.strCSS.firefox, this.strCSS.ie],
            [this.strjS.chrome, this.strjS.firefox, this.strjS.ie]
        ];

        //console.log(this);

        //console.log(this.strHTML);
        //console.log(this.strCSS);

        //console.log(this.strJS);

        this._context2d = document.getElementById("canvas").getContext("2d");

        this.darwDate();
        
    }
    

    Json.prototype.darwDate = function () {
        // console.log(this);


        for (i = 0; i < 3; i ++) {
            for (this.j = 0; this.j < 3; this.j++) {
                this.drawRect(this.getPositionByIndex(i, this.j));
            }

        }

        this._context2d.stroke();
    };
    Json.prototype.drawRect = function (p) {
        if (this.j == 0) {
            this._context2d.fillStyle = "#fff999";

        }
        if (this.j == 1) {
            this._context2d.fillStyle = "#999fff";

        }
        if (this.j == 2) {
            this._context2d.fillStyle = "#ff66ff";

        }

        this._context2d.fillRect(p.x, p.y, 30, 600 - p.y);
    };

    Json.prototype.getPositionByIndex = function (index1, index2) {

        var y = 600 * (1 - this.One[index1][index2] / this._MAX_VALUE);
        var x = (600 / 3) * index1 + (50 + index2 * 50);
        console.log(y, x);
        return {x: x, y: y};

    };

    ucai.Json = Json;
})();