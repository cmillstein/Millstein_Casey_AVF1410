var picButton = Ti.UI.createImageView({
	image: "cameranew.png",
	top: "85%",
	height: "10%",
	width: "30%"
}); 

//PUSH TO CLOUD PHOTOS

picButton.addEventListener('click', function(e){
	Ti.Media.showCamera({
		saveToPhotoGallery: true,
		allowEditing: true,
		mediaTypes: [Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(e) {
			if(e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				var img = Ti.UI.createImageView({
					width: win.width,
					height: win.height,
					image: e.media
				});
				win.add(img);
				cloud.cameraWork(e.media);
			} else {
				alert("thought this was a photo but, it's:" + e.mediaType);
			}
		},
		error: function(error) {
			if (error.code === Ti.Media.NO_CAMERA) {
				alert("please run this on a device");
			} else {
				alert("other error: " + error.code);
			}
		}
	}); //closing showCamera
	
}); //closing takePicBtn

mainWin.add(picButton);
