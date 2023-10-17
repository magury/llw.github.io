var tab = document.getElementById('itm');
var lis = tab.querySelectorAll('li');
var cnt = document.querySelectorAll('.cnt');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        for (var i = 0; i < cnt.length; i++) { cnt[i].style.display = 'none' }
        cnt[index].style.display = 'block';
    }
}
