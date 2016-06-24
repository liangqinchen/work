/**
 * Created by sks on 2016/6/18.
 */
(function () {
    var index=document.getElementById("backdrop");
    var eyeLeft=document.getElementById("leftEye");
    var eyeRight=document.getElementById("rightEye");



    function show() {
        
        index.addEventListener("mousemove",function (event) {
            var l;
            var r;
            var event=event||window.event;
            var x=event.clientX;
            var y=event.clientY;

            var face=document.getElementById("big");
            var leftLength=face.getBoundingClientRect().left-50;
            var rightLength=face.getBoundingClientRect().left+450;
            var topLength=face.getBoundingClientRect().top+150;

            var xLeft_length=x-leftLength;
            var xRight_length=x-rightLength;
            var z_length=y-topLength;
            var tan=Math.atan2(xLeft_length,z_length);
            var tanRight=Math.atan2(xRight_length,z_length);
            l=tan<0?-tan/Math.PI*180:-tan/Math.PI*180;
            r=tanRight<0?-tanRight/Math.PI*180:-tanRight/Math.PI*180;
            l=l-90;
            r=r-90;

            eyeLeft.style.transformOrigin="100px 50px";
            eyeRight.style.transformOrigin="100px 50px ";
            eyeLeft.style.transform="rotateZ("+l+"deg)";
            eyeRight.style.transform="rotateZ("+r+"deg)";
            

        })
    }

    function int() {
       show();
    }
    int();
})();