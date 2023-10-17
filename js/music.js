
$(".plays").on('click', function(e) {
	let aus = $("audio");
	console.log(aus);
	for(i=0;i<aus.length;i++){
		console.log(aus[i]);
		aus[i].pause();
	}
	let au = e.currentTarget.parentElement.children[0]

	au.play();
})

// 双击暂停事件
$(".plays").dblclick(function(e) {
	let au = e.currentTarget.parentElement.children[0];
	if (au.paused){
		au.play();
	} else {
		au.pause();
	}
})
var ex1=document.getElementById("exit")
var ex=document.getElementById("ex");
ex.onclick=function(){
	exit.style.display="none";
}

//
//console.log("ok");


