/**
 * Created by sks on 2016/6/24.
 */
(function () {

    var currentSong;

    document.ondragover = function (e) {
        e.preventDefault();
    };

    document.ondrop = function (e) {
        e.preventDefault();

        var files = e.dataTransfer.files;//拖拽数据传递对象，一般使用方式event.dataTransfer;后面的files是自带的属性
        if (files && files.length) {//dataTransfer . files 拖拽的文件列表对象。
            var file = files[0];

            if (file.type = "voice/mp3") {

                var reader = new FileReader();//FileReader是系统的内置函数
                reader.onload = function () {

                    currentSong = document.createElement("audio");
                    currentSong.src = reader.result;//result 是自带的属性
                    currentSong.controls="controls";
                    document.body.appendChild(currentSong);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    
})();