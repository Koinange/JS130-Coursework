const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};


function later2(func, arg) {
 return function(secondArg) {
   return func(arg,secondArg);
 };
}

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
