var mainWin = Ti.UI.createWindow({
	backgroundImage: "background.png"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var cloud = require("cloud");
var data = require("data");

var hostedBy = Ti.UI.createLabel({
	text: "Hosted By",
	font: {fontSize: "13dp"},
	top: "15%"
});

var wunderground = Ti.UI.createImageView({
	image: "wundergound.png",
	top: "18%"
});


var logIn = Ti.UI.createLabel({
	text: "Please sign in to see your local forecast",
	color: "#000000",
	font: {fontSize: "16dp", fontFamily: "Verdana", fontWeight: "bold"},
	top: "40%"
});

var username = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  hintText: "Username",
  top: "52%",
  width: "40%",
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var password = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "56%",
  width: "40%",
  hintText: "Password",
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var signInBox = Ti.UI.createLabel({
	borderColor: "#EEE",
	backgroundColor: "#ffffff",
	borderWidth: 3,
	height: 35,
	width: 75,
	text: "Sign in",
	color: "#000000",
	textAlign: "center",
	top: "60%"
}); 


mainWin.add(wunderground, username, password, signInBox, logIn, hostedBy);
navWindow.open();
