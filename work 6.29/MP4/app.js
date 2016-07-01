/**
 * Created by sks on 2016/6/29.
 */

(function () {

    function Main() {

        this._context2d = document.getElementById("canvas").getContext("2d");

        /**
         *
         * @type {HTMLVideoElement}
         * @private
         */
        this._video = document.createElement("video");
        this._video.autoplay = "autoplay";
        this._video.src = "1.mp4";

        this.render();
    }
    
    //把第一个像素变红
    // imgData=ctx.createImageData(100,100);
    //
    // imgData.data[0]=255;
    // imgData.data[1]=0;
    // imgData.data[2]=0;
    // imgData.data[3]=255;
    
    Main.prototype.render = function () {
        this._context2d.drawImage(this._video,0,0,500,300);
        var originData = this._context2d.getImageData(0, 0, 500, 300);
        var blackAndWhiteImageData = this._context2d.createImageData(500, 300);
        for (i = 0; i < originData.data.length; i += 4) {
            var color = (originData.data[i] + originData.data[i + 1] + originData.data[i + 2]) / 3;
            //console.log(color);
            blackAndWhiteImageData.data[i] = color;
            blackAndWhiteImageData.data[i + 1] = color;
            blackAndWhiteImageData.data[i + 2] = color;
            blackAndWhiteImageData.data[i + 3] = 255;
        }
        this._context2d.putImageData(blackAndWhiteImageData, 0,300,0,0,500,300);
                                 //0 ,300 指向x轴移动0，y轴移动300；0，0，500,300指从0,0位置开始截取500,300的位置

        var blueChannelData = this._context2d.createImageData(500,300);
        for (i = 0; i < originData.data.length; i += 4) {

            blueChannelData.data[i + 2] = originData.data[i +2];//没被设置的话默认为0

            blueChannelData.data[i + 3] = 255;
        }
        this._context2d.putImageData(blueChannelData, 500,300,0,0,500,300);


        var reversedImageData = this._context2d.createImageData(500, 300);
        for (i = 0; i < originData.data.length; i += 4) {
            reversedImageData.data[i] = 255 - originData.data[i];
            reversedImageData.data[i + 1] = 255 - originData.data[i + 1];
            reversedImageData.data[i + 2] = 255 - originData.data[i + 2];
            reversedImageData.data[i + 3] = 255;
        }
        this._context2d.putImageData(reversedImageData,500,0,0,0,500,300);
        
        requestAnimationFrame(this.render.bind(this));
    }
    new Main();
})();