var exec = require('cordova/exec');

var Kinect = {};
function callback () {

}

function fail () {

}

Kinect.prototype.start = function () {
  exec(callback, fail, "Kinect", "open", []);
}

Kinect.prototype.stop = function () {
  exec(callback, fail, "Kinect", "close", []);
}

module.exports = Kinect;
