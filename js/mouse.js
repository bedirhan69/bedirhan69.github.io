document.oncontextmenu = function(){return false}
if(document.layers) 
{
	window.captureEvents(Event.MOUSEDOWN);
	window.onrightmousedown = function(e)
	{
	if(e.target==document)return false;
	}
}
else 
{
	document.onrightmousedown = function(){return false}
}