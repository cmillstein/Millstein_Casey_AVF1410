var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundColor: "#EEE"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var forecast = Ti.UI.createLabel({
	text: "Todays Forecast",
	textAlign: "center",
	font: {fontSize: "17", fontWeight: "bold"},
	borderColor: "#000",
	borderWidth: 2,
	backgroundColor: "#B0B0B0",
	height: 70,
	left: 0,
	right: 0,
	top: 145
});

var sunPicture = Ti.UI.createImageView({
	image: "suncloud.png",
	left: -80
});


var forecastInfo = Ti.UI.createWindow({
    
});

forecast.add(sunPicture);

forecast.addEventListener("click", function(){
	navWindow.openWindow(forecastInfo);
});




var getData = require("data");

mainWin.add(forecast);
navWindow.add(mainWin);
navWindow.open();
