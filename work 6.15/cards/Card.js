/**
 * Created by plter on 6/17/16.
 */


(function () {

    function Card(front, back) {
        var self = {};
        self.front = front;
        self.back = back;

        self.getHtml = function () {
            return "" +
                "<div class=\"card\">" +
                "   <div class=\"face\"> " +
                "       <img src=\"" + self.front + "\"> " +//self.front本来是images/001.jpg，对象（self.front）用替代
                "   </div>" +
                "   <div class=\"back face\">" +
                "       <img src=\"" + self.back + "\">" +
                "   </div>" +
                "</div>"
        };

        return self;//返回给调用的对象，即imgs
    }

    window.Card = Card;

})();