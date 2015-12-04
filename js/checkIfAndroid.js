function checkIfAndroid() {
    if (/Android/i.test(navigator.userAgent)) {
     // some code..
    } else {
        document.querySelector('.errorDialog').toggle();
        console.log("Sorry, but your device does not support vibration.");
    }
}
