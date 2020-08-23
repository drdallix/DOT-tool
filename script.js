function submit() {
  var input = document.getElementById("input").value;
  console.log(input);
  var input = input.toUpperCase();
  console.log(input);
  JsBarcode("#barcode", input);
}

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event) {
  window.scrollTo(0, 0);
  event.preventDefault();
  event.stopPropagation();
}
