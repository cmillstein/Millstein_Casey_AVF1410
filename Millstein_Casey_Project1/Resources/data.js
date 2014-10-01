var url = "http://api.wunderground.com/api/4c3684666a48c28f/conditions/q/FL/Coconut_Creek.json";

var success = function(){
	alert("Here is your data!");
	var getData = JSON.parse(this.responseText);

var location = getData.current_observation.display_location.full;
var temp = getData.current_observation.temp_f;
var wind = getData.current_observation.wind_string;
var weatherConditions = getData.current_observation.weather;
var heatIndex = getData.current_observation.heat_index_f;

var locationLabel = Ti.UI.createLabel({
	text: location,
	font: {fontSize: "25", fontWeight: "bold"},
	top: 285,
	left: 55
});

var tempLabel = Ti.UI.createLabel({
	text: temp + "°F",
	font: {fontSize: "20", fontWeight: "bold"},
	left: 125,
	top: 335,
	textAlign: "center"
});

var windLabel = Ti.UI.createLabel({
	text: "The wind is currently heading \n" + wind,
	font: {fontSize: "16", fontWeight: "bold"},
	top: 380,
	left: 65
});

var weatherLabel = Ti.UI.createLabel({
	text: weatherConditions,
	font: {fontSize: "16", fontWeight: "bold"},
	top: 445,
	left: 65
});

var heatIndexLabel = Ti.UI.createLabel({
	text: "The heat index for today is \n" + heatIndex,
	font: {fontSize: "16", fontWeight: "bold"},
	top: 490,
	left: 65
});

 
mainWin.add(heatIndexLabel);
mainWin.add(tempLabel);
mainWin.add(windLabel);
mainWin.add(weatherLabel);
mainWin.add(locationLabel);
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
