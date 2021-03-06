var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundColor: "#38B0DE"
});


var cloud = require("cloud");
var data = require("data");
var camera = require("camera");



var hostedBy = Ti.UI.createLabel({
	text: "Hosted By",
	font: {fontSize: "13dp"},
	top: "10%"
});

var wunderground = Ti.UI.createImageView({
	image: "wundergound.png",
	top: "13%"
});

setTimeout(function(){
	tempLabel.setText(data.temp + "°F");
	}, 5000);
	
setTimeout(function(){
	locationLabel.setText(data.location);
	}, 5000);
	
setTimeout(function(){
	windLabel.setText("The wind is currently heading \n" + data.wind);
	}, 5000);
	
setTimeout(function(){
	weatherLabel.setText(data.weatherConditions);
	}, 5000);
	
setTimeout(function(){
	heatIndexLabel.setText("The heat index for today is \n" + data.heatIndex);
	}, 5000);

var currentWeather = Ti.UI.createLabel({
	text: "Here are your current conditions",
	color: "#000000",
	top: "23%",
	textAlign: "center",
	font: {fontSize: "20dp"}
});

var locationLabel = Ti.UI.createLabel({
	text: data.location,
	font: {fontSize: "28dp", fontWeight: "bold"},
	color: "#000000",
	top: "34%",
});

var tempLabel = Ti.UI.createLabel({
	text: data.temp + "°F",
	font: {fontSize: "24dp", fontWeight: "bold"},
	color: "#000000",
	top: "40%",
	textAlign: "center"
});


var windLabel = Ti.UI.createLabel({
	text: "The wind is currently heading \n" + data.wind,
	font: {fontSize: "20dp", fontWeight: "bold"},
	color: "#000000",
	top: "50%",
});

var weatherLabel = Ti.UI.createLabel({
	text: data.weatherConditions,
	font: {fontSize: "20dp", fontWeight: "bold"},
	color: "#000000",
	top: "62%",
	textAlign: "center"
});

var heatIndexLabel = Ti.UI.createLabel({
	text: "The heat index for today is \n" + data.heatIndex,
	font: {fontSize: "20dp", fontWeight: "bold"},
	color: "#000000",
	top: "70%",
	textAlign: "center"

});



mainWin.add(locationLabel);
mainWin.add(heatIndexLabel);
mainWin.add(tempLabel);
mainWin.add(windLabel);
mainWin.add(weatherLabel);






mainWin.add(wunderground, hostedBy);
mainWin.open();
