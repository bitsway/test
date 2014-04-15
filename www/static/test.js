// Put your custom code here
//var apipath='http://e.businesssolutionapps.com/panicbutton/default_with_sync_code/';
var apipath='http://127.0.0.1:8000/unilever/default/';

var imagePath = '';

// ====================================Camera==========

//Acheivement
function get_pic() {
	navigator.camera.getPicture(onSuccess, onFail, { quality: 20,
		destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
	imagePath = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

//==============================Upload Pic ==============
function uploadPhoto() {
	var imageURI = imagePath;
    var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI("http://e2.businesssolutionapps.com/welcome/test/fileUploader/"),win,fail,options);
	
}

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
