
window.onload = function(){
	var spos1 = undefined;
	var spos2 = undefined;
	
	var bstart = document.getElementById("start");
	bstart.onclick = start;
	var playing = false;
	var stop = document.getElementById("end");
	finish.onmouseover = myLose;
	
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
	
	function restart(){
		spos1 = event.clientX;
		spos2 = event.clientY;
		var b = document.querySelectorAll(".youlose");
		if (playing == false){
			console.log("length: " + b.length);
			if(b.length > 0)
			{
				for(var c = 0; c < b.length; c++){
					b[c].setAttribute("class", "boundary");
				}
			}
		}
		playing = true;	
	}
	
	function nocheating(){
		var srt = document.getElementById("start").offsetWidth;
		var top = document.getElementById("boundary1").offsetHeight;
		console.log("start width: " + srt + " above val: " + top);
		var srt = document.getElementById("start").offsetLeft;
		console.log("offset value: " + srt);
		var a = event.clientX;
		var b = event.clientY;
		var set = "X coordinate:" + a + ", Y coordinates:" + b;
		console.log(set);
		document.addEventListener("mousemove", function(){
			if(playing)
			{
				srt = document.getElementById("maze").offsetLeft;
				console.log("here " + srt);
				if(event.clientX < srt)
				{
					console.log("You Are Cheating!");
					document.getElementById("status").textContent = "You Are Cheating!";
					
					for(var i=0; i< boundaries.length-1; i++){
						
						if(playing) {
							boundaries[i].setAttribute("class", "boundary youlose");
							}
						
						
					}
						
				}
			}
		});
		
	}
	nocheating();
	
	
};
