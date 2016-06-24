/**
 * Created by plter on 6/17/16.
 */

(function () {


    var imgs = [
        Card("images/001.jpg", "images/002.jpg"),//Card("xxx") 这样加括号就是调用Card这个类，已经直接调用了Card
        Card("images/003.jpg", "images/004.jpg"),//已经是self,被赋予front和back两个属性
        Card("images/005.jpg", "images/006.jpg"),
        Card("images/007.jpg", "images/008.jpg")
    ];
    
    function init() {

        var html = "";

        imgs.forEach(function (item) {//item即imgs里的对象（self）
            html += item.getHtml();
        });

        document.body.innerHTML = html;
    }


    init();
})();