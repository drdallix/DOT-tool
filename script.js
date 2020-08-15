function barcode() {
  var x = document.getElementById("myText").value;
  var y = "*"
  var z = y.concat(x,y)

  document.getElementById("output").innerHTML = z;
}
