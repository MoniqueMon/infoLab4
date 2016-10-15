window.onload = function(){
	var startPositionX = undefined;
	var startPositionY = undefined;
	
	var begin = document.getElementById("start");
	begin.onclick = start;
	var playing = false;
	var finish = document.getElementById("end");
	finish.onmouseover = comp;
	
	var boundaries = document.getElementsByClassName("boundary");
	for(var i=0; i< boundaries.length - 1; i++){
		boundaries[i].onmouseover = youLose;
		
	}
}