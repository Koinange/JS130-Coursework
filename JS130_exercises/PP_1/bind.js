function myBind(func, ctx) {
  return function(argsArray) {
    return func.apply(ctx, argsArray);
  };
}


let obj = {
  hello: 'hello'
};


function hello() {
  console.log(this.hello);
}

let test = myBind(hello, obj);
test();