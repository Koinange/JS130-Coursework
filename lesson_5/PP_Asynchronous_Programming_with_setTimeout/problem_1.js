function delayLog() {
  for (var i = 1; i <= 10; i += 1) {
    setTimeout(function() {console.log(i)}, (i * 1000));
  }
}

delayLog();
