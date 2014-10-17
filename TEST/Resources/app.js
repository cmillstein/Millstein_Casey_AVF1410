Titanium.UI.setBackgroundColor('#fff');
var window = Ti.UI.createWindow({ backgroundColor: "#333", });
var imageContainer = Ti.UI.createView({ layout: "vertical" });
var image = Ti.UI.createImageView();

var getImage = function(){
	if(Ti.Network.online){
		var xhr = Ti.Network.createHTTPClient({
			onload: function(){
				var response = JSON.parse(this.responseText);
				//console.log(response.forecast);
				for( var i = 0 ; i < response.forecast.simpleforecast.forecastday.length ; i++ ) {
					image.setImage(response.forecast.simpleforecast.forecastday[i].icon_url);
				}
			},
			onerror : function() {},
			timeout: 5000
		});
		xhr.open("GET", "http://api.wunderground.com/api/440c8cedbd410d02/forecast/q/FL/Coconut_Creek.json");
		xhr.send();
	}
else { alert("No Network"); }
};
getImage();
imageContainer.add(image);
window.add(imageContainer);
window.open();