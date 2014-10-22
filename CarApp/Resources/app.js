
var logInWin = Ti.UI.createWindow({
	backgroundColor: "#000000",
	title: "Welcome!"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: logInWin
});

var logIn = Ti.UI.createLabel({
	text: "Log in",
	color: "#fff",
	font: {fontSize: "24", fontWeight: "bold", fontFamily: "verdana"},
	top: "20%"
});

var username = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "30%",
  hintText: "Username",
  width: 275, 
  height: 35,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var password = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: "40%",
  hintText: "Password",
  passwordMask: true,
  width: 275, 
  height: 35,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
  clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var submitButton = Ti.UI.createLabel({
	borderColor: "#000",
	borderWidth: 3,
	backgroundColor: "#fff",
	height: 30,
	width: 100,
	textAlign: "center",
	text: "Sign in",
	font: {fontWeight: "bold", fontFamily: "Verdana"},
	bottom: "35%"
});

var notMember = Ti.UI.createLabel({
	text: "Not a member? Click here!",
	color: "blue",
	bottom: "28%"
});
var tabWindow = Ti.UI.createWindow({
	backgroundColor: "#000000"
	});

submitButton.addEventListener("click", function(){
	tabWindow.openWindow;
});

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window: tabWindow
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
});
 
tabGroup.add(tab1);
tabGroup.add(tab2);



logInWin.add(logIn, username, password, submitButton, notMember);
navWindow.open();
