function fun(str) {
    var a = 0;
    for (var i = 0; i < 50000; i++) {
        for (var j = 0; j < 50000; j++) {
            a++;
        }
    }
    return a+str;
}

self.onmessage = function (event) {
  event = event || window.event;

  var result = fun(event.data);
  self.postMessage(result);
}