var mymap = L.map("newMap").setView([40.7831,-73.9712], 11);

	/* First Pop */
L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
	maxZoom: 18
}).addTo(mymap);

L.marker([40.7553004,-73.9753067], {icon: L.AwesomeMarkers.icon({icon: "home", prefix: "fa", markerColor: "purple"}) }).addTo(mymap)
	.bindPopup("BlackRock");
	/* First Pop */

	/* Key */
var info = L.control({position: "bottomright"});

info.onAdd = function (mymap) {
	this._div = L.DomUtil.create("div", "legend");
	this.key();
	return this._div;
};

info.key = function (props) {
	this._div.innerHTML = "<b class='red'>" + "Your Location" + "</b><br><b class='purple'>" + "Weekdays" + "</b><br><b class='blue'>" + "Weekends" + "</b><br><b class='green'>" + "Both (WD + WE)" + "</b><br><b class='yellow'>" + "Internships" + "</b><br>";
};

info.addTo(mymap);
	/* Key */

	/* User Location */
function geoFindMe() {
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
		L.tileLayer("https://api.mapbox.com/styles/v1/kevtlw/ciuqb0ukg00bd2jodar53p4nu/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2dGx3IiwiYSI6ImNpdXBoZmhiajAxZ2wyem13MHlta25kdmoifQ.AX0IZLGuMR7o3JYUyPkGpA", {
			maxZoom: 18
		}).addTo(mymap);
		mymap.setView([latitude, longitude], 11);

		L.marker([latitude,longitude], {icon: L.AwesomeMarkers.icon({icon: "home", prefix: "fa", markerColor: "red"}) }).addTo(mymap)
			.bindPopup("hi");
  }
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
	/* User Location */
