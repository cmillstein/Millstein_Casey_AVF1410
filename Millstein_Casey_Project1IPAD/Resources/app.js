var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundImage: "sunbackground.png",
});


var currentWeather = Ti.UI.createLabel({
	text: "Here are your current conditions",
	color: "#000000",
	top: "40%",
	textAlign: "center",
	font: {fontSize: "18dp"}
});





var data = require("data");

mainWin.add(currentWeather);
mainWin.open();
