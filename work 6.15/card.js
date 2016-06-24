/**
 * Created by sks on 2016/6/16.
 */

(function () {

    function card() {
        var i,j;

        for (i=1;i<=4;i++){
            var div=document.createElement("div");
            div.style.float="left";
            div.style.height="220px";
            div.style.transformStyle="preserve-3d";

            div.style.width="330px";
            div.style.position="relative";
            div.style.padding="10px";
            div.className="div_cla";

            for (j=2*i-1;j<2*i+1;j++){
                var picture=document.createElement("img");
                picture.src=j+".jpg";
                picture.style.position="absolute";
                picture.style.transform="translateZ(1px)";

                div.appendChild(picture);

            }

            document.body.appendChild(div);

        }

        var oDivContainer=document.getElementsByClassName("div_cla");
        for(i=0;i<oDivContainer.length;i++){
            oDivContainer[i].onmouseover=function () {
                this.style.animation="changeOver 1s forwards";
            };
            oDivContainer[i].onmouseout=function () {
                this.style.animation="changeOut 1s forwards";

            }
        }
    }
    card();
})();
