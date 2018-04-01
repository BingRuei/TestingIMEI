
var deviceInfo = cordova.require("cordova/plugin/DeviceInformation");
deviceInfo.get(
    function (result) {
        console.log("result = " + result);
        document.write("result = " + result);
    }, function () {
        console.log("error");
        document.write("error");
    });
