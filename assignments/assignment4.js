/**
 * @author Kyle R
 */

var images = 
[
	{ //1st Image
		"image" : "assignment4Images/Chrysanthemum.jpg",
		"thumbNail" : "assignment4Images/ChrysanthemumTHUMB.jpg"
	},
	{ //2nd Image
		"image" : "assignment4Images/Desert.jpg",
		"thumbNail" : "assignment4Images/DesertTHUMB.jpg"
	},
	{ //3rd Image
		"image" : "assignment4Images/Hydrangeas.jpg",
		"thumbNail" : "assignment4Images/HydrangeasTHUMB.jpg"
	},
	{ //4th Image
		"image" : "assignment4Images/Jellyfish.jpg",
		"thumbNail" : "assignment4Images/JellyfishTHUMB.jpg"
	},
	{ //5th Image
		"image" : "assignment4Images/Lighthouse.jpg",
		"thumbNail" : "assignment4Images/LighthouseTHUMB.jpg"
	}
];
var imageList = document.createElement('ul'),
	content = document.getElementById('content'),
	thumbNail = document.createElement('a'),
	image = document.createElement('a'),
	thumbNailHolder = document.createElement('div'),
	imageHolder = document.createElement('div'),
	imageSpan = document.createElement('span'),
	fullImage = document.getElementById('fullImage'),
	i;

	thumbNailHolder.appendChild(thumbNail);
	imageSpan.appendChild(thumbNailHolder);
	imageHolder.appendChild(image);
	content.appendChild(imageList);
	content.appendChild(thumbNailHolder);
	content.appendChild(imageHolder);
	
for (i = 0; i < images.length; i++)
{
	var li = document.createElement('li'),
		anchor = document.createElement('a'),
		imageLink = document.createElement('img');
		
	anchor.href = images[i].image;
	anchor.onclick = changeSRCOfImage;
	imageLink.src= images[i].thumbNail;
	anchor.appendChild(imageLink);
	li.appendChild(anchor);
	imageList.appendChild(li);
}

//This is no worky yet
function changeSRCOfImage(e)
{
	e.preventDefault();
	fullImage.src=this.href;
}
