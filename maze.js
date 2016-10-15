
window.onload = function(){
	var playing = false;
	var boundaries = document.getElementsByClassName("boundary");
	for(var a=0; a< boundaries.length - 1; a++){
		boundaries[a].onmouseover = myLose;
		
	}
	
	function myLose(){
	for(var a=0; a< boundaries.length-1; a++){
		if(playing)
		{
			boundaries[i].setAttribute("class", "boundary youlose");
		}
	}
	}
		
	
	
	
	
};
