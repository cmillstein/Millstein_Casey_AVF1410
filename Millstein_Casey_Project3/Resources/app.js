var mainWin = Ti.UI.createWindow({
	title: "Welcome!",
	backgroundImage: "weatherbackground.png"
});

var ui = require("UI");
var cloud = require("cloud");
var camera = require("camera");
var data = require("data");


mainWin.open();
