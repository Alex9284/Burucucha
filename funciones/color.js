var circle = document.querySelector(".circle");
var bool = false;

circle.addEventListener('click', function() {
  if (!bool) {
    circle.style.background = "navy";
    bool = true;
  } else {
    circle.style.background = "maroon";
    bool = false;
  }
});