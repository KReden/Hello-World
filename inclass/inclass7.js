
var twitterUser = "Sybexi";
var twitterRequest = $.ajax({
  url: "http://twitter.com/status/user_timeline/" + twitterUser + ".json?count=10&callback=?",
  dataType: 'json',
  async: true,
  success: function(pData){
    parseTwitterInfo('#tweets', pData);
  }
});

function parseTwitterInfo(targetDiv, data){
    $(data).each(function() {
        $(targetDiv).append($('<div class="post">'+ this.text +'<div class="stamp">'+ this.created_at +'</div></div>'));
    });
}
