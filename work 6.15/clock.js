/**
 * Created by sks on 2016/6/15.
 */


(function () {
    var div = document.getElementById("divC");
    var secondId = document.getElementById("secondHand");
    var minId = document.getElementById("min");
    var hourId = document.getElementById("hourHand");
    var dClock;

    function showTime() {

        var date = new Date();
        var secondDate = date.getSeconds();
        var minDate = date.getMinutes();
        var hourDate = date.getHours();

        var second = 6 * secondDate;
        var min = 6 * minDate + second / 60;
        var hour = ((hourDate > 12) ? hourDate - 12 : hourDate) * 30 + min / 12 + second / 360;
        secondId.style.transform = "rotate(" + second + "deg)";
        minId.style.transform = "rotate(" + min + "deg)";
        hourId.style.transform = "rotate(" + hour + "deg)";

        secondId.style.transition = "1s";

        if (!second){

            secondId.style.transform = "rotate(360deg)";
            setTimeout(function () {
                secondId.style.transition = "0s";
                secondId.style.transform = "rotate(0deg)";
            },900)
        }
    }

    function int() {

        showTime();
        setInterval(showTime, 1000);
    }
    int();

    function needleNumber(){

        for (var i = 1; i < 13; i++) {
            var needle = document.createElement("div");
            var span = document.createElement("span");
            var divMin = document.createElement("div")
            needle.style.position = "absolute";
            needle.style.height = "150px";
            needle.style.width = "20px";
            needle.style.left = "145px";
            needle.style.fontSize = "20px";

            span.innerHTML = i;
            divMin.appendChild(span)
            needle.appendChild(divMin);
            div.appendChild(needle);
            divMin.style.transform = "rotate(" + (-30 * i) + "deg)";
            needle.style.transformOrigin = "50% 100%";
            needle.style.transform = "rotate(" + 30 * i + "deg)";

        }
    }needleNumber();
}());