//API
var url = "http://api.wunderground.com/api/4c3684666a48c28f/forecast/conditions/q/FL/Coconut_Creek.json";



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

var image = Ti.UI.createImageView({
	top: "15%"
});
exports.image = image;

var imageTwo = Ti.UI.createImageView({
	top: "15%"
});
exports.imageTwo = imageTwo;

var imageThree = Ti.UI.createImageView({
	top: "15%"
});
exports.imageThree = imageThree;

var weekdayOne = Ti.UI.createLabel({

});
exports.weekdayOne = weekdayOne;

var success = function(){
	var getData = JSON.parse(this.responseText);
	for(var i=0; i<getData.forecast.simpleforecast.forecastday.length; i++){
		image.setImage(getData.forecast.simpleforecast.forecastday[i].icon_url);
		imageTwo.setImage(getData.forecast.simpleforecast.forecastday[i].icon_url);
		imageThree.setImage(getData.forecast.simpleforecast.forecastday[i].icon_url);
		weekdayOne.setText(getData.forecast.simpleforecast.forecastday[i].title);
	}

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