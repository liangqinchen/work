/**
 * Created by sks on 2016/6/19.
 */

(function () {

    var audio,btnStop,btnPlay,btnGetCurrentTime,img,ly,r;
    var g=0;
    var tflag=0;
    var lytext=new Array();//歌词
    var lytime=new Array();//时间
    function findComponents() {
        audio=document.getElementById("audio");
        btnPlay=document.getElementById("btn-play-sound");
        btnStop=document.getElementById("btn-stop-sound");
        btnGetCurrentTime=document.getElementById("btn-get-current-time");
        ly=document.getElementById("ly");
        lyBottom=document.getElementById("lyBottom");
    }
    function addListeners()
    {
        btnPlay.addEventListener("click",function(event){
            audio.play();
            img.style.transform="rotate(67deg)";

        });
        btnStop.addEventListener("click",function(event){
            audio.pause();
        });
        btnGetCurrentTime.addEventListener("click",function (event) {
            console.log(audio.currentTime);
        });
    }
    var lyric="[00:00.08]光辉岁月;[00:00.82]演唱：Beyond;[00:29.09]钟声响起归家的讯号;[00:33.65]在他生命里;[00:36.87]彷佛带点唏嘘;[00:42.10]黑色肌肤给他的意义;[00:46.58]是一生奉献 肤色斗争中;[00:55.13]年月把拥有变做失去;[01:01.56]疲倦的双眼带著期望;[01:07.96]今天只有残留的躯壳;[01:11.68]迎接光辉岁月;[01:14.98]风雨中抱紧自由;[01:21.01]一生经过彷徨的挣扎;[01:24.65]自信可改变未来;[01:27.84]问谁又能做到;[01:43.73]可否不分肤色的界线;[01:48.27]愿这土地里;[01:51.69]不分你我高低;[01:56.69]缤纷色彩显出的美丽;[02:01.18]是因它没有;[02:04.39]分开每种色彩;[02:09.68]年月把拥有变做失去;[02:16.18]疲倦的双眼带著期望;[02:22.59]今天只有残留的躯壳;[02:26.25]迎接光辉岁月;[02:29.48]风雨中抱紧自由;[02:35.63]一生经过彷徨的挣扎;[02:39.26]自信可改变未来;[02:42.46]问谁又能做到;[03:24.19]今天只有残留的躯壳;[03:27.78]迎接光辉岁月;[03:31.07]风雨中抱紧自由;[03:37.15]一生经过彷徨的挣扎;[03:40.79]自信可改变未来;[03:44.04]问谁又能做到;[03:47.54];[03:59.90]今天只有残留的躯壳;[04:03.52]迎接光辉岁月;[04:06.72]风雨中抱紧自由;[04:12.77]一生经过彷徨的挣扎;[04:16.45]自信可改变未来;[04:19.65]问谁又能做到;[04:35.56]今天只有残留的躯壳;[04:39.13]迎接光辉岁月;[04:42.37]风雨中抱紧自由;[04:48.50]一生经过彷徨的挣扎;[04:52.12]自信可改变未来";
    function start() {
        var array = lyric.split(";");
        for (var i = 0; i < array.length; i++) {
            for(var k=0;k<array[i].length;k++)
            {
                lytext[i]=array[i].substring(array[i].lastIndexOf("]")+1);//放歌词
                lytime[i]=array[i].substring(array[i].indexOf("[")+1,array[i].indexOf("[")+6);//放时间

            }
            var m=lytime[i].substring(0,lytime[i].indexOf(":"));
            var s=lytime[i].substring(lytime[i].indexOf(":")+1);
            var p=parseInt(m);
            var q=parseInt(s);
            var n=p*60+q;
            var u=audio.currentTime;
            var l=parseInt(u);

            if (n==l)
            {
                ly.innerHTML=lytext[i];
                lyBottom.innerHTML=lytext[i+1];
                lyBottom1.innerHTML=lytext[i+2];
                lyBottom2.innerHTML=lytext[i+3];
                g++;
                if(g>1){
                    lyTop.innerHTML=lytext[i-1];
                }
                if(g>2){
                    lytext[-1]=" ";
                    lyTop1.innerHTML=lytext[i-2];
                }
            }
            // if(g>4){
            //
            //     for()
            // }
            console.log("n"+n);
            console.log("current"+audio.currentTime);
            console.log(lytext[i]);
            console.log(array[i]);
            console.log(lytime[i]);
        }
        // for(var m=0;m<array.length;m++){
        //     console.log(lytext[m])
        // }
    }//将歌词分成句子

    function init(){
        findComponents();
        addListeners();
        start();
    }
    // init();
    setInterval(init,500);

}());
