$(document).ready(function(){
var randomVar;
getQuote();
function getQuote(){
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
//get data from this url
  $.getJSON(url, function(data){
  randomVar = data.quoteText;
//passing value to corresponding div
    $(".myjsContainer").hide().fadeIn(1000).html('"' + data.quoteText +'"');
    $(".author").html("- " + data.quoteAuthor);
randomVar = data.quoteText;
});
}
//using twitter click functionality
$('#tweet').on("click",function(){
window.open("https://twitter.com/intent/tweet?text=" + randomVar);
});
$("#next-quote").on("click",function(){
getQuote();
});
});
