// import node module "osx brightness"
var osxBrightness = require('osx-brightness');

// get user argument
var brightness = process.argv[2];
console.log(brightness);

// set screen brightness
osxBrightness.set(brightness/100);