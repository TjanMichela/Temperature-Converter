// Constant var for kelvin temperature
const kelvin = 0;

// Convert kelvin to celsius
const celsius = kelvin - 273;

// Convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down fahrenheit
fahrenheit = Math.floor(fahrenheit)

// Convert celsius to newton sclae
let newton = Math.floor(celsius * (33/100));

// Print results
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`)
console.log(`The temperature is ${newton} degrees in Newton scale.`)
