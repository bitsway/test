// Put your custom code here
//var apipath='http://e.businesssolutionapps.com/panicbutton/default_with_sync_code/';
var apipath='http://127.0.0.1:8000/unilever/default/';



// ====================================Camera==========

//Acheivement
function get_pic() {
	navigator.camera.getPicture(onSuccess, onFail, { quality: 20,
		destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
