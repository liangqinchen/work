/**
 * Created by sks on 2016/6/16.
 */
window.card=window.card || {};

(function () {

    function Pic(obj) {
        this.front=obj.front;
        this.back=obj.back;
    }
    Pic.prototype.createPicture=function () {
        var cardS = "<div id=\"cardO\"> " +
            "<div class=\"pic\" style=\'background-image: url("+this.front+")\'></div>" +
            "<div class=\"pic back\" style=\'background-image:url("+this.back+")\'></div>" +
            "</div>";
        return cardS;
    };
    card.Pic=Pic;
}());