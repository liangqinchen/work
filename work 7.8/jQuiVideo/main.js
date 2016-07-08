/**
 * Created by sks on 2016/7/8.
 */

(function () {


    $(".but").button();

    var video = $("#video");
    $("#palyVideo").dialog({
        autoOpen: false,
        show: {

            duration: 1000
        },
        hide: {

            duration: 1000
        },
        width: "850"
        ,
        height: "650"



    });

    $(".but").click(function () {
        $("#palyVideo").dialog("open");
        video[0].play();

    });
    //console.log(video[0]);

})();