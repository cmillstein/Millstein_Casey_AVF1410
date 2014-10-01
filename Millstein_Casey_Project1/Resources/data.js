var url = "http://api.wunderground.com/api/4c3684666a48c28f/geolookup/forecast/q/FL/Coconut_Creek.json";

var success = function(){
	alert("Here is your data!");
	if (Ti.Network.online){
	var getData = Ti.Network.createHTTPClient();
	getData.onload = function(e){
		var json = JSON.parse(this.responseText);
		var forecast = json.forecast;

	};
};
};

var error = function(){
	alert("Oops, something went wrong!");
};


var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});


client.open("GET", url);

client.send();
