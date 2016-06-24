/**
 * Created by sks on 2016/6/18.
 */
(function () {
    var leftEye=document.getElementById("leftEye");
    var rightEye=document.getElementById("rightEye");

    function init() {
        addEventListener("mousemove", function (event) {
            var anglel;
            var angler;
            var event=event||window.event;
            var disX=event.clientX;
            var disY=event.clientY;
            var l=document.getElementById("face");
            var left=l.getBoundingClientRect().left+100;
            var leftTop=l.getBoundingClientRect().top+140;
            var right=l.getBoundingClientRect().left+300;
            var disCenterX=disX-left;
            var disCenterY=disY-leftTop;
            var disCenterXr=disX-right;
            var disCenterYl=disY-leftTop;
            var tan=Math.atan2(disCenterX,disCenterY);
            var tanr=Math.atan2(disCenterXr,disCenterYl);
            anglel=tan<0?-tan/3.14*180:-tan/3.14*180;
            angler=tan<0?-tanr/3.14*180:-tanr/3.14*180;
            leftEye.style.transform="rotate("+anglel+"deg)";
            rightEye.style.transform="rotate("+angler+"deg)";

        });
    };
    init();

}());
