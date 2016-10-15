
window.onload = function(){
	var playing = false;
	
	var boundaries = document.getElementsByClassName("boundary");
	for(var a=0; a < boundaries.length - 1; a++){
		boundaries[a].onmouseover = myLose;
		
	}
	
	function myLose(){
	for(var a=0; a< boundaries.length-1; a++){
		if(playing)
		{
			boundaries[a].setAttribute("class", "boundary youlose");
		}
	}
	}
		
	function compmaze(){
		if(playing == true) {
			var check = document.querySelectorAll(".youlose");
			if(check.length > 0)
			{
				document.getElementById("status").textContent = "YOU LOSE";
			}else{
				document.getElementById("status").textContent = "YOU WIN";
				
			}
			playing = false;
		}
	}
	
	
	
};
