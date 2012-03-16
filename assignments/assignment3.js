/**
 * @author Kyle Reden
 */
function gotchaRR()
{
	window.open("http://www.youtube.com/watch?v=oHg5SJYRHA0&noredirect=1", "fullscreem=1");
	setTimeout('alert("RICK ROLLED!!!!")', 3000);
}
function onSelect()
{
	alert("Don't do that again...")
	window.resizeTo(0,0);
}

function displayDate()
{
	document.getElementById("date").innerHTML=Date();
}
function mouseOver()
{
	document.getElementById("mouseover").src="Penguins.jpg";
}
function mouseOut()
{
	document.getElementById('mouseover').src="Koala.jpg";
}

function popUpDialogue()
{
	var myQuotes = new Array();
	var i = Math.floor(Math.random() * 7);
	myQuotes[0] = "Unix will self-destruct in five seconds... 4... 3... 2... 1...";
	myQuotes[1] = "I'm programmed to be very busy.";
	myQuotes[2] = "A bug in the code is worth two in the documentation. ";
	myQuotes[3] = "Where is the ‘any’ key?";
	myQuotes[4] = "C Code. C Code Run. Run, Code, RUN! PLEASE!!!!";
	myQuotes[5] = "Bus error -- driver executed. ";
	
	alert(myQuotes[i]);
	
	return;
}
