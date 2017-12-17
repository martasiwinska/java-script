'use strict';

var wzrostMateusz = 190;
var wzrostOlga = 180;

//Warunek if

if (wzrostOlga < wzrostMateusz) {
    console.log("Olga jest niższa :)");
}


if (wzrostOlga > wzrostMateusz) {
    console.log("Olga jest wyższa");
} else {
    console.log("Olga jest niższa");
}




if (wzrostOlga > wzrostMateusz) {
    console.log("Olga jest wyższa");
} else if (wzrostOlga == wzrostMateusz) {
    console.log("Olga jest tak samo wysoka jak Mateusz");
} else {
    console.log("Olga jest niższa");
}


//warunek switch

var kolor = "zielony"
switch (kolor) {
    case "czerwony":
        console.log("Kolor czerwony")
        break;
    case "zielony":
        console.log("Kolor zielony")
        break;
    case "niebieski":
        console.log("Kolor niebieski")
        break;
    default:
        console.log("Inny kolor")
}
