/**
 * Created by sks on 2016/6/24.
 */


(function () {

    document.ondragover = function (e) {
        e.preventDefault();
    };

    document.ondrop = function (e) {
        e.preventDefault();
    };


    function getIni() {
        $.get("newtask.ini").done(function (data) {

             var header=/\[(.*)]\/g;
            
        });

    }

    getIni()
})();
