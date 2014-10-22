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







var dayHolder = Ti.UI.createLabel({
	layout: 'horizontal',
	width: "100%"
});
var dayOptions = {
	borderColor: "#000",
	borderWidth: 3,
	left: "17dp",
	width: "22%",
	height: "75%",
	layout: "vertical",
	top: "10%"

};

var imageOptions = {
};
var dayLabelOptions = {
	top: "45dp",
	font: {fontWeight: "bold", fontFamily: "Verdana"}
};

//array
var days = [];

// JSON data function (looping through data)
var success = function(days){
	var getData = JSON.parse(this.responseText);
	var dataData = getData.forecast.simpleforecast.forecastday;
	for(var i=0; i<dataData.length; i++){
		var day = Ti.UI.createLabel(dayOptions);
		var image = Ti.UI.createImageView(imageOptions);
		var dayLabel = Ti.UI.createLabel(dayLabelOptions);
		var conditionsLabel = Ti.UI.createLabel(dayLabelOptions);
		var highLabel = Ti.UI.createLabel(dayLabelOptions);
		var lowLabel = Ti.UI.createLabel(dayLabelOptions);
		var aveWindLabel = Ti.UI.createLabel(dayLabelOptions);
		image.setImage(dataData[i].icon_url);
		dayLabel.setText(dataData[i].date.weekday);
		conditionsLabel.setText(dataData[i].conditions);
		highLabel.setText("High: "+ dataData[i].high.fahrenheit);
		lowLabel.setText("Low: "+ dataData[i].low.fahrenheit);
		aveWindLabel.setText("Wind: "+ dataData[i].avewind.dir +" @ "+ dataData[i].avewind.mph +" mph");
		
	//ADDING LABELS TO VIEWS	
		day.add(image);
		day.add(dayLabel);
		day.add(conditionsLabel);
		day.add(highLabel);
		day.add(lowLabel);
		day.add(aveWindLabel);
		dayHolder.add(day);
	}

};

mainWin.add(dayHolder);

var error = function(){
	alert("Oops, something went wrong!");
};



var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});


if (Ti.Network.online) {
		Ti.Geolocation.getCurrentPosition(function(e) {
			lng = e.coords.longitude;
			lat = e.coords.latitude;
		});

	} else {

		alert("Please sign into a network to continue");
};	

client.open("GET", url);

client.send();
