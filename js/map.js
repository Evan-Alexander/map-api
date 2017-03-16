var apiKey = require('./../.env').apiKey;

function Map() {

}

Map.prototype.initMap = function(print){
	$.getScript("https://maps.googleapis.com/maps/api/js?key="+apiKey)
  .then(function(response) {
		print(response);
  });
};

// function Marker(){
//
// }



exports.mapModule = Map;
