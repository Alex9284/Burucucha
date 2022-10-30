var carrousel = function () {
    var foto = document.getElementsByTagName("img");
    var teller = 0;
    var teller1 = 0;
    var arrayFotos = [];

    while (teller < foto.length) {
        arrayFotos.push(foto[teller].getAttribute("src"));
        teller++;
    };

    arrayFotos.push(arrayFotos.shift());
    while (teller1 < foto.length) {
        foto[teller1].setAttribute("src", arrayFotos[teller1]);
        teller1++;
    };

    console.log(arrayAfb.join());
};

window.onload = function () {
    setInterval(carrousel, 2000);
}    
//-------------------------------------------------------------------------------------//
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 1));
    }
}
//------------------------------------------------------------------------------------------//
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
