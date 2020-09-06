const lambda = require("./index");

lambda.handler(
  {
    htmlString: "<p>Hello</p>",
    fileName: "sample",
  },
  { done: console.log, error: console.log },
  console.log
);
