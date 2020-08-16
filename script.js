function submit() {
  var x = document.getElementById("input").value;
  var y = "*"
  var z = y.concat(x,y)
  
  document.getElementById("output").innerHTML = z;

}


window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}