var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundImage: "sunbackground.png",
	top: 0,
	width: 485,
	left: 0
});


var currentWeather = Ti.UI.createLabel({
	text: "Here are your current conditions",
	top: 240,
	left: 45,
	textAlign: "center",
	font: {fontSize: "17"}
});








var data = require("data");

mainWin.add(currentWeather);
mainWin.open();
