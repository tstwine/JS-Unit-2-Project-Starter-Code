/*
  Please add all Javascript code to this file.
*/
var resourceOption = $("#listresources") // This code wraps around the target item.
resourceOption.on("click", "li", function(event){ // The variable resourceOPtion. has 3 parameters. (event listener it passes through 3 paramentes//)
   console.log("resourceOption")
   event = this;
   var resource = $(this).text();
   if(resource === 'Reddit'){
   var url  = "https://www.reddit.com/top.json";
        console.log(resource)

   }
   function addResource(resource){
     var source = $("#resourcetemplate").html();
        console.log(source)
     var template = Handlebars.compile(source);
     var body = $("#main");
     body.append(template(resource));
   }
   $.getJSON(url, function(response){
     var articles = response.data.children;
     for (var i=0; i < articles.length; i++){
       var article = articles[i];
       var author = article.data.author;
       var title = article.data.title;
       console.log("media", article.data.media);
       var media =  article.data.media && article.data.media.oembed.thumbnail_url;
       console.log("url", media);
        var resourceEntry = {
          author:author,
          title:title,
          media:media
        };
        addResource(resourceEntry);
     }


   //}
 })
})


var h3 = $("h3")
h3.on("click", function(){
  var loader = $(".loader").removeClass("hidden")
  var x = $(".closePopUp")
  x.on("click", function(){
    var loader = $(".loader").addClass("hidden")

  })

})
