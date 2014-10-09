var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	backgroundColor: "#3299CC"
});

var cloud = require("cloud");
var data = require("data");
var camera = require("camera");



var hostedBy = Ti.UI.createLabel({
	text: "Hosted By",
	font: {fontSize: "13dp"},
	top: "15%"
});

var wunderground = Ti.UI.createImageView({
	image: "wundergound.png",
	top: "18%"
});

var currentWeather = Ti.UI.createLabel({
	text: "Here are your current conditions",
	color: "#000000",
	top: "28%",
	textAlign: "center",
	font: {fontSize: "18dp"}
});

var locationLabel = Ti.UI.createLabel({
	text: data.location,
	font: {fontSize: "24dp", fontWeight: "bold"},
	color: "#000000",
	top: "39%",
});

var tempLabel = Ti.UI.createLabel({
	text: data.temp + "°F",
	font: {fontSize: "16dp", fontWeight: "bold"},
	color: "#000000",
	top: "45%",
	textAlign: "center"
});


var windLabel = Ti.UI.createLabel({
	text: "The wind is currently heading \n" + data.wind,
	font: {fontSize: "16dp", fontWeight: "bold"},
	color: "#000000",
	top: "55%",
});

var weatherLabel = Ti.UI.createLabel({
	text: data.weatherConditions,
	font: {fontSize: "16dp", fontWeight: "bold"},
	color: "#000000",
	top: "65%",
	textAlign: "center"
});

var heatIndexLabel = Ti.UI.createLabel({
	text: "The heat index for today is \n" + data.heatIndex,
	font: {fontSize: "16dp", fontWeight: "bold"},
	color: "#000000",
	top: "75%",
	textAlign: "center"

});

mainWin.add(heatIndexLabel);
mainWin.add(tempLabel);
mainWin.add(windLabel);
mainWin.add(weatherLabel);
mainWin.add(locationLabel);





mainWin.add(wunderground, hostedBy);
navWindow.open();
