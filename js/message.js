function massage() {
    if (navigator.vibrate) {
        navigator.vibrate([10000, 1, 10000, 1, 10000]);
    } else {
        document.querySelector('.errorDialog').toggle();
        console.log("Sorry, but your device does not support vibration.");
    }
}
