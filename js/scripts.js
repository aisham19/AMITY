	/* Stretch HR */
(function stretch() { 
	$("hr").animate({width: "175px"}, 1500); 
})();
	/* Stretch HR */

	/* Hide */
$("#h3").hide();
	/* Hide */

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
function load() {
	$(".wait0").effect("bounce", {times: 0}, 0);
	$("#wait1").effect("bounce", {times: 5}, 3000);
	$("#wait2").effect("bounce", {times: 5}, 3250);
	$("#wait3").effect("bounce", {times: 5}, 3500);
};
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
	load();
	$("#loader").delay(500).animate({opacity: 1}, 750);
	$("#loader").delay(250).fadeOut(2000);
	$("#h3").delay(2750).fadeIn(750);
	$("#h2").css("z-index", 0);
	$("#h3").css("z-index", 1);
	$(".fa-bars").delay(2750).fadeIn(750);
	geoFindMe();
});
	/* Login to Load to Main */

	/* Add Hours */
var hourC = [];
$("#addHours").click(function() {
	var service = $("#inpService").val();
	var date = $("#inpDate").val();
	var timeIn = $("#inpTIn").val();
	var timeOut = $("#inpTOut").val();
	var hours = $("#inpHours").val();
	if (service === "" || date === "" || timeIn === "" || timeOut === "" || hours === "") {
		alert("Make sure you fill out the table entirely before adding new hours");
	}
	else {
		$("#myTable").append("<tr><td>" + service + "</td><td>" + date + "</td><td>" + timeIn +  "</td><td>" + timeOut + "</td><td>" + hours + "</td></tr>");
	  var hourCollect = parseInt($("#inpHours").val(),10);
		hourC.push(hourCollect)
		var printTotal = eval(hourC.join('+'));
		$("#overallH").text(printTotal);
	}
	$("#inpService").val("");
	$("#inpDate").val("");
	$("#inpTIn").val("");
	$("#inpTOut").val("");
	$("#inpHours").val("");
});
	/* Add Hours */

	/* Open Menu */
$(".fa-bars").click(function() {
	$("nav").css({"width": "250px"});
	$(".fa-bars").css({"display": "none"});
	$("#body").css({"marginLeft": "250px"});
	$("nav").css({"borderRight": "1px solid #CCC"});
});
	/* Open Menu */

	/* Close Menu */
$(".fa-times").click(function() {
	$("nav").css({"width": "0"});
	$("#body").css({"marginLeft": "0"});
	$("nav").css({"borderRight": "none"});
	$(".fa-bars").fadeIn(750);
});
	/* Close Menu */

	/* Menu to Hours */
$("#gtHours").click(function() {
	$("header:not(#h4)").fadeOut(750);
	$("#h4").delay(500).fadeIn(750);
	$("header:not(#h4)").css("z-index", 0);
	$("#h4").css("z-index", 1);
}); 
	/* Menu to Hours */

	/* Menu to Dashboard */
$("#gtDash").click(function() {
	$("header:not(#h5)").fadeOut(750);
	$("#h5").delay(500).fadeIn(750);
	$("header:not(#h5)").css("z-index", 0);
	$("#h5").css("z-index", 1);
}); 
	/* Menu to Dashboard */

	/* Username */
function name() {
	var name = $("#inpName").val();
	$("#username").text(name);
}
	/* Username */