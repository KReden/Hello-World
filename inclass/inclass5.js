/**
 * @author Kyle R
 */

var products = 
[
	{ //1st Image
		"product" : "Intel 4004",
		"claimToFame" : "First single-chip microprocessor",
		"hardwareType" : "Microprocessor"
	},
	{ //2nd Image
		"product" : "GeForce 256",
		"claimToFame" : " First PC graphics chip with hardware transform, lighting, and shading",
		"hardwareType" : "GraphicsCard"
	},
	{ //3rd Image
		"product" : "GeForce 8 Series ",
		"claimToFame" : "First ever GPU to fully support Direct3D 10",
		"hardwareType" : "GraphicsCard"
	},
	{ //4th Image
		"product" : "Intel Core 2 Wolfdale",
		"claimToFame" : "I Use it",
		"hardwareType" : "Microprocessor"
	},
];
var i;
var graphicsCard = document.createElement('ul'),
	processors = document.createElement('ul'),  
	claimToFame = document.createElement('div'), 
	productContainer = document.createElement('span'), 
	content = document.getElementById('content'), 
	i;

productContainer.appendChild(document.createTextNode(' '));
claimToFame.appendChild(document.createTextNode('Claim To Fame: '));
claimToFame.appendChild(productContainer);
content.appendChild(processors);
content.appendChild(graphicsCard);
content.appendChild(claimToFame);

for (i = 0; i < products.length; i++)
{
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(products[i].product));
	li.claimToFame = products[i].claimToFame;
	li.onclick = showClaimToFame;
	if(products[i].hardwareType === "GraphicsCard")
	{
		graphicsCard.appendChild(li);
	}
	else if(products[i].hardwareType === "Microprocessor")
	{
		processors.appendChild(li);
	}
	else
	{
		alert("Huh?")
	}
}

function showClaimToFame()
{
	productContainer.firstChild.nodeValue = this.claimToFame;
}

