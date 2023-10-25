// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./2.1.names");
const sayHi = require("./2.2.utils");
const data = require("./2.3.alternative-flavore");

require("./2.4.mind-grenade");

sayHi("Cich");
sayHi(names.dina);
sayHi(names.ahmed);
