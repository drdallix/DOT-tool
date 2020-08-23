function submit() {
  var input = document.getElementById("input").value;
  console.log(input);
  var input = input.toUpperCase();
  console.log(input);
  JsBarcode("#barcode", input);
}
