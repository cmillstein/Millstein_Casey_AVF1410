var app = require("app");
var data = require("data");
var camera = require("camera");



var dayOne = Ti.UI.createLabel({
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


dayOne.add(data.image);
dayOne.add(data.weekdayOne);
dayTwo.add(data.imageTwo);
dayThree.add(data.imageThree);
