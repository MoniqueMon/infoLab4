window.onload = function() {
    var boundaries = document.getElementsByClassName("boundary1");
	for(var i=0; i< boundaries.length - 1; i++){
		boundaries[i].onmouseover = youLose;
}