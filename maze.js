window.onload = function ()
{
	$("boundary1").onmouseover = overBoundary;
};

function overBoundary ()
{
	$("boundary1").style.backgroundColor = "#FF0000";
	$("boundary1").addClassName("youlose");
}