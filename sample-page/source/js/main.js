
// Voice recognition
if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() { alert('Hello world!'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  console.log("Starting to listen!");
  annyang.start();
  console.log("Listening!");
}
else {
  console.log("Else!");
}
console.log("END!");
