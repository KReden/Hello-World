/**
 * @author kyle.reden
 */

$(document).ready(function(){
	$("#myTabs").tabs({
		collapsible: true,
	});
	$("#accordion").accordion({
		//disabled: true,
		active: false,
		collapsible: true,
	});

	var images = 
	[
		{ //1st Image
			"image" : "finalimgs/01.jpg",
			"thumbNail" : "finalimgs/thumb/01t.jpg"
		},
		{ //2nd Image
			"image" : "finalimgs/02.jpg",
			"thumbNail" : "finalimgs/thumb/02t.jpg"
		},
		{ //3rd Image
			"image" : "finalimgs/03.jpg",
			"thumbNail" : "finalimgs/thumb/03t.jpg"
		},
		{ //4th Image
			"image" : "finalimgs/04.jpg",
			"thumbNail" : "finalimgs/thumb/04t.jpg"
		},
		{ //5th Image
			"image" : "finalimgs/05.jpg",
			"thumbNail" : "finalimgs/thumb/05t.jpg"
		}
	];
	
	var imageList = document.createElement('ul'),
		imageGallery = document.getElementById('imageGallery'),
		thumbNail = document.createElement('a'),
		image = document.createElement('a'),
		thumbNailHolder = document.createElement('div'),
		imageHolder = document.createElement('div'),
		imageSpan = document.createElement('span'),
		galleryPic = document.getElementById('galleryPic'),
		i;
	
		thumbNailHolder.appendChild(thumbNail);
		imageSpan.appendChild(thumbNailHolder);
		imageHolder.appendChild(image);
		imageGallery.appendChild(imageList);
		imageGallery.appendChild(thumbNailHolder);
		imageGallery.appendChild(imageHolder);
		
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
		galleryPic.src=this.href;
	}
});


/*Image Citations
 * Bear Photos:

	main.jpg:	http://www.flickr.com/photos/tmarschner/2729647854/
	
	01.jpg:		http://www.flickr.com/photos/alanvernon/3199928177/
	02.jpg:		http://www.flickr.com/photos/gray_um/2969370120/
	03.jpg:		http://www.flickr.com/photos/oddwick/3581967289/
	04.jpg:		http://www.flickr.com/photos/usfsregion5/3769582527/
	05.jpg:		http://www.flickr.com/photos/dobieks/3806861074/
	06.jpg:		http://www.flickr.com/photos/azrainman/955519535/
	07.jpg:		http://www.flickr.com/photos/randa/4945179037/
	08.jpg:		http://www.flickr.com/photos/18740912@N06/4467375825/
	09.jpg:		http://www.flickr.com/photos/mein-halle/2499505703/
	10.jpg:		http://www.flickr.com/photos/davidw/2133449758/
	11.jpg:		http://www.flickr.com/photos/25171569@N02/6093853883/
	12.jpg:		http://www.flickr.com/photos/rhaarmans/4571124337/
	
	390x425
	http://colorschemedesigner.com/#0u51Avvw0w0w0
 */