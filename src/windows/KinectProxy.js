module.exports = {
    open: function (success, fail, args) {
        try {
            Kinect.Proxy.KinectProxy.start();
            success();
        } catch(ex) {
            fail(ex);
        }
    },

    close: function (success, fail, args) {
        try {
              Kinect.Proxy.KinectProxy.stop();
            success();
        } catch (ex) {
            fail(ex);
        }
    },

};
require("cordova/exec/proxy").add("Kinect", module.exports);
