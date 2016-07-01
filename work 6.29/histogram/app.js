/**
 * Created by sks on 2016/6/29.
 */

(function () {

    function Main() {


        $.get("data.json").done(function (data) {
            var json = new ucai.Json(data);
           
        });

    }
    new Main();
})();