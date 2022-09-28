let bar = (function countdown(number){
  console.log(number);
  if (number !== 0) countdown(number - 1);
})(7);

