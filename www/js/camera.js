
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    // console.log("navigator.geolocation works well");
    // checkConnection();
   
    console.log(navigator.camera);
        
}

// var onSuccess = function(position) {
//     alert('Latitude: '          + position.coords.latitude          + '\n' +
//           'Longitude: '         + position.coords.longitude         + '\n' +
//           'Altitude: '          + position.coords.altitude          + '\n' +
//           'Accuracy: '          + position.coords.accuracy          + '\n' +
//           'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
//           'Heading: '           + position.coords.heading           + '\n' +
//           'Speed: '             + position.coords.speed             + '\n' +
//           'Timestamp: '         + position.timestamp                + '\n');
// };

// // onError Callback receives a PositionError object
// //
// function onError(error) {
//     alert('code: '    + error.code    + '\n' +
//           'message: ' + error.message + '\n');
// }

// navigator.geolocation.getCurrentPosition(onSuccess, onError);

// function checkConnection() {
//     var networkState = navigator.connection.type;

//     var states = {};
//     states[Connection.UNKNOWN]  = 'Unknown connection';
//     states[Connection.ETHERNET] = 'Ethernet connection';
//     states[Connection.WIFI]     = 'WiFi connection';
//     states[Connection.CELL_2G]  = 'Cell 2G connection';
//     states[Connection.CELL_3G]  = 'Cell 3G connection';
//     states[Connection.CELL_4G]  = 'Cell 4G connection';
//     states[Connection.CELL]     = 'Cell generic connection';
//     states[Connection.NONE]     = 'No network connection';

//     alert('Connection type: ' + states[networkState]);
// }


function takePicture(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}