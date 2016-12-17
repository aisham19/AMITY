	/* Stretch HR */
(function stretch() { 
  $("hr").animate({width: "175px"}, 1500); 
})();
	/* Stretch HR */

  /* Color Variables */
var red = "#B03A2E";
var purple = "#76448A";
var blue = "#2874A6";
var green = "#239B56";
var yellow = "#B7950B";
  /* Color Variables */

  /* Button Rainbow */
(function start() { 
  $("#start").animate({color: red}, 1000);
  $("#start").animate({color: purple}, 1000);
  $("#start").animate({color: blue}, 1000);
  $("#start").animate({color: green}, 1000);
  $("#start").animate({color: yellow}, 1000, start);
})();

  /* Processing Bounce */  
(function load() {
  $(".wait0").effect("bounce", {times: 0}, 0);
  $("#wait1").effect("bounce", {times: 5}, 2500);
  $("#wait2").effect("bounce", {times: 5}, 2700);
  $("#wait3").effect("bounce", {times: 5}, 2900, load);
})();
  /* Processing Bounce */

  /* Index to Login */
$("#start").click(function() {
  $("#h1").fadeOut(750);
  $("#h2").delay(500).fadeIn(750);
  $("#h1").css("z-index", 0);
  $("#h2").css("z-index", 1);
}); 
  /* Index to Login */

  /* Login to Load to Main */
$("#login").click(function() {
  $("#h2").fadeOut(750);
  $("#loader").delay(500).animate({opacity: 1}, 750);
  $("#loader").delay(250).fadeOut(750);
  $("#h3").delay(1750).fadeIn(750);
  $("#h2").css("z-index", 0);
  $("#h3").css("z-index", 1);
});
  /* Login to Load to Main */

  /* Login to Load to Main */
$(".fa-plus").click(function() {
  $("#h3").fadeOut(750);
  $("#h4").delay(500).fadeIn(750);
  $("#h3").css("z-index", 0);
  $("#h4").css("z-index", 1);
});
  /* Login to Load to Main */

  /* Login to Load to Main */
$(".fa-university").click(function() {
  $("#h4").fadeOut(750);
  $("#h5").delay(500).fadeIn(750);
  $("#h4").css("z-index", 0);
  $("#h5").css("z-index", 1);
});
  /* Login to Load to Main */

  
  /* Get File */
document.getElementById('get_file').onclick = function() {
  document.getElementById('my_file').click();
};
  /* Get File */