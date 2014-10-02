var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundImage: "sunbackground.png",
	top: 0,
	width: 885,
	left: 0
});


var currentWeather = Ti.UI.createLabel({
	text: "Here are your current conditions",
	top: 480,
	left: 195,
	textAlign: "center",
	font: {fontSize: "26"}
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '100%',
  width: '100%'
});




var data = require("data");
scrollView.add(currentWeather);
mainWin.add(scrollView);
mainWin.open();