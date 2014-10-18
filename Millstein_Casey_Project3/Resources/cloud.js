//CLOUD LOGIN
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

//CAMERA PUSH TO CLOUD
var cameraWork = function(image){
	Cloud.Photos.create({
	   	 photo: image
			}, function (e) {
	    		if (e.success) {
	        var photo = e.photos[0];
	        alert('Success:\n' +
	            'id: ' + photo.id + '\n' +
	            'filename: ' + photo.filename + '\n' +
	            'size: ' + photo.size,
	            'updated_at: ' + photo.updated_at);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
};

exports.cameraWork = cameraWork;


