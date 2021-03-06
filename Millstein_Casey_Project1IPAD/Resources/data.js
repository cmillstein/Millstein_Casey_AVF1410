var url = "http://api.wunderground.com/api/4c3684666a48c28f/conditions/q/FL/Coconut_Creek.json";

//geolocation
if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.purpose = 'Get Current Location';
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.distanceFilter = 10;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

    Ti.Geolocation.addEventListener('location', function(e) {
        if (e.error) {
            alert('Error: ' + e.error);
        } else {
            Ti.API.info(e.coords);
        }
    });
} else {
    alert('Please enable location services');
}



var success = function(){
	//alert("Here is your data!"); decided not to use alert, got annoying
	var getData = JSON.parse(this.responseText);

var location = getData.current_observation.display_location.full;


var temp = getData.current_observation.temp_f;


var wind = getData.current_observation.wind_string;


var weatherConditions = getData.current_observation.weather;


var heatIndex = getData.current_observation.heat_index_f;

exports.location = location;
exports.temp = temp;
exports.wind = wind;
exports.weatherConditions = weatherConditions;
exports.heatIndex = heatIndex;

};



var error = function(){
	alert("Oops, something went wrong!");
};


var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});



client.open("GET", url);

client.send();
