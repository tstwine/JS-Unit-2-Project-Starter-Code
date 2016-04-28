var article = {
  title: "Jesse Shawl won the lottery",
  url: "https://jesse.sh/awl"
}

var source = $("#article-template").html()
var template = Handlebars.compile(source)
$("#main").append(template(article))


// var url  = "https://www.reddit.com/top.json";
// $.getJSON(url, function(response){ //this function will visit the url and visit the contents of the url.
//  var articles = response.data.children; // retrieve all articles in reddit
//  for (var i=0; i < articles.length; i++){ // articles.length = 25 (placeholder for the number-loop 25 times)
//    var article = articles[i]; // this is pulling one artile at a time.
//
//    console.log (article); // displaying the article.
//     // log the title of the article & the url of the article.

  //  var articles = response.data.children;
    // for (var i=0; i < articles.length; i++){
    //   var article = articles[i];
    //   console.log (article.data);
    //     console.log (article.data.author);
    //       console.log (article.data.title);
    //         console.log (article.data.media);
    //         console.log ()
  //  }

  //}
//}

// var resourceOption = $("#listresources") // This code wraps around the target item.
// resourceOption.on("click", "li", function(event){ // The variable resourceOPtion. has 3 parameters. (event listener it passes through 3 paramentes//)
//    console.log("resourceOption")
//    event = this;
//    var resource = $(this).text();
//    if(resource === 'Reddit'){
//    var url  = "https://www.mashable.com/top.json";
//      console.log(url)
//
//    }
//    function addResource(resource){
//      var source = $("#resourcetemplate").html();
//         console.log(source)
//      var template = Handlebars.compile(source);
//      var body = $("#main");
//      body.append(template(resource));
//    }
//    $.getJSON(url, function(response){
//      var articles = response.data.children;
//      for (var i=0; i < articles.length; i++){
//        var article = articles[i];
//        var author = article.data.author;
//        var title = article.data.title;
//        var media = article.data.media;
//        var image = article.data.image;
//        console.log (article.data);
//          console.log (article.data.author);
//            console.log (article.data.title);
//              console.log (article.data.media);
//               console.log (article.data.image);
//         var resourceEntry = {
//           author:author,
//           title:title,
//           media:media,
//           image:image,
//         };
//         addResource(resourceEntry);
//      }

  // var url  = "https://www.mashable.com/top.json";
    //    console.log(url)

//When the application first loads display the loading container (see below on instructions to toggle this).
//When you successfully retrieve information from the default API hide the loader and replace the
//content of the #main container with that of the API. The DOM structure of each article must adhere
//to the .article structure.
