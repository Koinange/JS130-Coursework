function makeCounterLogger(start) {
  return function(finish) {
    let number;

    if (start > finish) {
      for (number = start; number >= finish; number -= 1) {
        console.log(number);
      }
    } else {
      for (number = start; number <= finish; number += 1) {
        console.log(number);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);

countlog(2);