function makeMultipleLister(number) {
  return function () {
    let originalNumber = number;
    while(number < 100) {
      console.log(number);
      number += originalNumber;
    }
  };
}

let lister = makeMultipleLister(15);
lister()