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