const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return console.log(err);
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) return console.log(err);
    const second = result;
    writeFile("./content/fs-async.txt", "utf8", (err, result) => {
      if (err) return console.log(err);

      console.log("done this task");
    });
  });
});
// this example to showcase event looping process
console.log("starting new task");
