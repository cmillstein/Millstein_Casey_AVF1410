var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundColor: "#ffffff",
	width: "100%",
	
});


var currentWeather = Ti.UI.createLabel({
	text: "Here are your current conditions",
	top: "230 dp",
	left: "70 dp",
	textAlign: "center",
	font: {fontSize: "18 dp"}
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
