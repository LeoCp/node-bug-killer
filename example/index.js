// Dependencies
var Debug = require("../lib");

// Set log level
Debug.config.level = 4;

// Test defaults
Debug
  .log("A fancy error message", "error")
  .log("Info messages are useful", "info")
  .log("Hey, you've got a warning", "warn")
  ;

// Don't show date
Debug.config.date = false;
Debug.log("Display date is disabled.", "info");

// Custom type
Debug.config.myType = {
    color: [0, 255, 200]
  , text: "custom"
};

Debug.log("This is a custom message type", "myType");
Debug.log(new Error("Some error"));
Debug.log("Some interesting message");

// The built-in methods can be accessed like this, too:
Debug.error("This is an error.");
Debug.info("This is an info message.");
Debug.warn("This is a warning.");
Debug.log("This is a log message.");

// Logging objects works nicely too:
Debug.log({
    name: {
        name: "Johnny",
        last: "B"
    }
});
