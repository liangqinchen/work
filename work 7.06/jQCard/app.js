/**
 * Created by 87676 on 7/6/2016.
 */
(function () {
    function Main() {
        var div = $("div");
        var colors = [];
        var backColors = [];
        for (var i = 0; i < div.length; i++) {
            colors.push($(div[i]).css("background-color"));
            backColors.push(changeColor());
            (function (n) {
                $(div[  gvbi]).on("click", function () {
                    $(this).flipToggle(colors[n], backColors[n], 2000);
                })
            })(i);
        }
    }

    function changeColor() {
        return "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
    }

    new Main();
})();