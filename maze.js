
window.onload = function(){
	
	var boundaries = document.getElementsByClassName("boundary");
	for(var a=0; i< boundaries.length - 1; a++){
		boundaries[a].onmouseover = myLose;
		
	}
	
	function myLose(){
	for(var i=0; i< boundaries.length-1; i++){
		if(playing)
		{
			boundaries[i].setAttribute("class", "boundary youlose");
		}
	}
	}
		
	
	
	
	
};
