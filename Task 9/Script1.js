function cgi(buttonid) {
  var i = document.getElementById(buttonid).value
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://13.233.125.92:81/cgi-bin/kube.py?x="+i, true);
  xhr.send();
  xhr.onload = function() {
    var output = xhr.responseText;
    document.getElementById("OutputBox").innerHTML = output;
  }
}