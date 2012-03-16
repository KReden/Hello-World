var targetDiv = document.getElementById('fliks');
var tag1 = "batman";
var tag2 = "superman";
var tag3 = "pepper";
var flicrFeed = $.ajax
({
	url: "http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&tags=" + tag1 + "," + tag2 + "&format=json&callback=?",
	dataType: 'jsonp',
	jsonp: false,
	jsonpCallback: "jsonFlickrFeed",
	async: true,
	success: function(data)
	{
		for(var i=0; i<data.items.length; i++)
		{
			var img = document.createElement('img');
			img.src = data.items[i].media.m;
			targetDiv.appendChild(img);
		}
	}
}); 
