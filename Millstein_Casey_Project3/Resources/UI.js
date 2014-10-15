var app = require("app");
var data = require("data");
var camera = require("camera");


setTimeout(function(){
	dayOne.setText(data.icon);
	}, 2000);
	
setTimeout(function(){
	weatherConditions.setText(data.weatherConditions);
	}, 2000);


var weatherConditions = Ti.UI.createLabel({
	text: data.weatherConditions,
	top: "20%",
	font: {fontSize: "19dp", fontWeight: "bold"},
});

var dayOne = Ti.UI.createLabel({
	//backgroundImage: "blurred.png",
	text: data.icon,
	borderColor: "#000",
	borderWidth: 3,
	width: "28%",
	height: "55%",
	left: "25dp"
});

var dayTwo = Ti.UI.createLabel({
	//backgroundImage: "blurred.png",
	borderColor: "#000",
	borderWidth: 3,
	width: "28%",
	height: "55%"
});

var dayThree = Ti.UI.createLabel({
	//backgroundImage: "blurred.png"
	borderColor: "#000",
	borderWidth: 3,
	width: "28%",
	height: "55%",
	right: "25dp"
});

mainWin.add(dayOne);
mainWin.add(dayTwo);
mainWin.add(dayThree);



dayOne.add(weatherConditions);
