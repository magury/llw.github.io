var he = document.getElementById('hehe');
he.onfocus = function () {
    if (he.value === "输入关键词") { this.value = ""; }

}
he.onblur = function () {
    if (this.value === "")
        this.value = "输入关键词";
}