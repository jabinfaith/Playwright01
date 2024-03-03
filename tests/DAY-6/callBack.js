function prepareCoffee(callback) {
    console.log("coffee is being prepared");
    setTimeout(function () {
        callback("Your coffee is ready");
    }, 5000);
}
function onCoffeeReady(message) {
    console.log(message);
}
prepareCoffee(onCoffeeReady);
