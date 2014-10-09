var adminID = "543572ee1011a40877009710";

var app = require("app");

var Cloud = require('ti.cloud');
Cloud.debug = true;

var loginUser = function(){
	Cloud.Users.login({
		login: 'admin',
		password: 'admin'
	}, function(e){
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; 
loginUser();
