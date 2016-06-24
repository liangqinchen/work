/**
 * Created by sks on 2016/6/16.
 */
window.card=window.card || {};
(function () {
    function init() {
        var pictures=[
            new card.Pic({front:"1.jpg",back:"2.jpg"}),
            new card.Pic({front:"3.jpg",back:"4.jpg"}),
            new card.Pic({front:"5.jpg",back:"6.jpg"}),
            new card.Pic({front:"7.jpg",back:"8.jpg"})
            ];
        var str="";
        pictures.forEach(function (i) {
            str=str+i.createPicture();
        });
        document.body.innerHTML=str;
    }
    init();
}());