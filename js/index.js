var ex = document.querySelector('.shape1');
var ww = document.querySelector('.abu1');
var dl = document.getElementById('dl');
var zc = document.getElementById('zc');
var dy = document.getElementById('dy');
var tg = document.getElementById('tg');
dl.onclick = function () {
    alert("网络异常，请稍后再试！");
}
zc.onclick = function () {
    alert("服务器连接失败，请您等待！");
}
dy.onclick = function () {
    alert("请登录后再试！");
}
tg.onclick = function () {
    alert("联系方式:744389858@qq.com");
}
var bt1 = document.getElementById('bt1');
var bt2 = document.getElementById('bt2');
var flag = 0;
var img = document.getElementById("lb");
bt2.onclick = function () {
    flag = (flag + 1) % 56;
    img.src = "images/lb/pic (" + flag + ").jpg";
}
bt1.onclick = function () {
    flag = (flag + 55) % 56;
    img.src = "images/lb/pic (" + (flag) + ").jpg";
}
ex.onclick = function () {
    ww.style.display = 'none';
}
var timer=setInterval(function() {
  if (bt2.disabled == false) {
   bt2.click();
  }
 },
 5000);