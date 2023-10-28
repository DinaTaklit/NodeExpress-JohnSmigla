// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("res", (name, age) => {
  console.log(`My name is ${name} and my age is ${age}`);
});

customEmitter.on("res", () => {
  console.log("Another logic here");
});

customEmitter.emit("res", "Dina", 27);
