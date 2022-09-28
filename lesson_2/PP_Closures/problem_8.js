function later(inputFunction, argForInputFunction) {
  return function() {
    return inputFunction(argForInputFunction);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!