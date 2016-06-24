/**
 * Created by sks on 2016/6/19.
 */

(function () {
    var music = document.getElementById("music");
    var play = document.getElementById("play-sound");
    var stop = document.getElementById("stop-sound");
    var time = document.getElementById("get-time");
    var crossBandA = document.getElementById("lyricsA");
    var crossBandB = document.getElementById("lyricsB");
    var crossBandC = document.getElementById("lyricsC");
    var crossBandD = document.getElementById("lyricsD");
    var crossBandE = document.getElementById("lyricsE");
    var lrc = document.getElementById("lrc");

    var lytext = new Array();//放存汉字的歌词
    var lytime = new Array();//存放时间
    var lyric = "[00:00.50]千年等一回;[00:04.23]作词：陈自为 作曲：左宏元;" +
        "[00:07.06]演唱：高胜美;[00:09.08]别着急，喝口水先(*＾-＾*);" +
        "[00:27.34]千年等一回　等一回啊;[00:36.45]千年等一回　我无悔啊;" +
        "[00:44.14]不累啊你,都不用喝水o(￣▽￣)d;[00:47.34]是谁在耳边 说 爱我永不变;[00:56.06]只为这一句 啊哈断肠也无怨;" +
        "[01:05.83]雨心碎　风流泪;[01:10.30]梦缠绵　情悠远;[01:15.53]来，摸摸头( *￣▽￣)((≧︶≦*);" +
        "[01:24.95]西湖的水　我的泪;[01:29.88]我情愿和你化作一团火焰;[01:34.22]啊~~啊~~啊~~;[01:41.09]别害羞啊╮(╯▽╰)╭;" +
        "[01:50.07]千年等一回　等一回啊;[01:59.34]千年等一回　我无悔啊;[02:07.04]过来，叔叔给你糖吃啊(╯▽╰ )好香~~;" +
        "[02:09.24]雨心碎　风流泪;[02:13.43]梦缠绵　情悠远;[02:18.77]不吃糖啊？真挑！自己吃(￣～￣) 嚼!;" +
        "[02:27.59]西湖的水　我的泪;[02:33.05]我情愿和你化作一团火焰;[02:37.43]啊~~啊~~啊~~;[02:44.72]要听话，乖~Ψ(￣∀￣)Ψ;" +
        "[02:53.23]千年等一回　等一回啊;[03:02.50]千年等一回　我无悔啊;[03:11.26]千年等一回　等一回啊;" +
        "[03:19.93]千 年 等 一 回;[03:27.48]不然打你的噢━((*′д｀)爻(′д｀*))━!!!!";


    function getsong() {

        var array = lyric.split(";");
        //console.log(array);
        for (var i = 0; i < array.length; i++) {

                lytext[i] = array[i].substring(array[i].lastIndexOf("]") + 1);//放歌词 //substring()（得到对应下标的字符串）括号内有两个数，一个是开始，一个是结尾。开始必须有， 结尾可以没有。没有结尾的话默认到结尾的位置

                lytime[i] = array[i].substring(array[i].indexOf("[") + 1, array[i].indexOf("[") + 6);//放时间.小数点后面的不要



            var m = lytime[i].substring(0, lytime[i].indexOf(":"));//用于提取字符串中介于两个指定下标之间的字符。
            var s = lytime[i].substring(lytime[i].indexOf(":") + 1);

            var p = parseInt(m);//解析一个字符串，并返回一个整数。
            var q = parseInt(s);
            var n = p * 60 + q;
            var u = music.currentTime;
            var l = parseInt(u);


            if (n == l) {
                crossBandA.innerHTML = lytext[i];
                crossBandB.innerHTML = lytext[i + 1];
                crossBandC.innerHTML = lytext[i + 2];
                crossBandD.innerHTML = lytext[i + 3];
                crossBandE.innerHTML = lytext[i + 4];

            }

        }
    }

    play.onclick = function () {
        crossBandA.style.color = "red";
        crossBandA.style.fontSize = "20px";
    }
    stop.onclick = function () {
        crossBandA.style.color = "blue";


    }

    function addListeners() {
        play.addEventListener("click", function (event) {
            music.play();
        });

        stop.addEventListener("click", function (event) {
            music.pause();
        });


    }

    function int() {
        addListeners();
        getsong();

    }

    int();
    setInterval(int, 0);

})();