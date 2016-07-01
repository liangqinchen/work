/**
 * Created by sks on 2016/6/29.
 */
(function () {

    function Main() {
        this.button = document.getElementById("button");
        this.placeP = document.getElementById("placeP");
       
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.video = document.createElement("video");
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        this.showCamera();
        this.addListeners();
        this.render();
    }

    Main.prototype.showCamera = function () {

        navigator.getUserMedia({video: true}, function (stream) {//navigator.getUserMedia 调用浏览器的摄像头功能
                                                                //stream 传入一个文件流
            var url = URL.createObjectURL(stream);//URL.createObjectURL()方法会根据传入的参数创建一个指向该参数对象的URL
            this.video.src = url;
            this.video.play();

        }.bind(this), function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };
    Main.prototype.addListeners = function () {

        this.button.onclick = function (event) {
            var a = document.createElement("a");
            a.href = this.canvas.toDataURL();//toDataURL()是canvas中将图片的二进制格式转为dataURL格式使用的方法。
            a.target = "_blank";//在新窗口打开
            a.style.backgroundImage = "url(" + a.href + ")";
            a.className = "img";
            this.placeP.appendChild(a);
        }.bind(this);
    };
    Main.prototype.render = function () {
     
        this.context.drawImage(this.video, 0, 0);
        requestAnimationFrame(this.render.bind(this));

    };

    new Main();
})();