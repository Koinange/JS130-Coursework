function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);// bar = 2
let result = bar(3); // prod = 6
result += bar(4);// result = 30, prod = 24
result += bar(5);// result = 150, prod = 120
console.log(result);