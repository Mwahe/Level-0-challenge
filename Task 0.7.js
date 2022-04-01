function convertCelToFah(num) {
    const Fahrenheit = num * 1.8 + 32 + " °F";
    return Fahrenheit;
}
console.log(convertCelToFah(45));

function convertFahToCel(num) {
    const Celsius = (num - 32) *  0.55555556 + " °C";
    return Celsius;
}
console.log(convertFahToCel(90));