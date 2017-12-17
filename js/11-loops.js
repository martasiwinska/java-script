'use strict'

//pętla for 

for (var i = 4; i > 0; i--) {
    console.log(i);
}

//pętla forEach 

var tablica = ["Krystian", "Monika", "Danuta"];
tablica.forEach(function (element, index) {
    console.log("Element z indexem: " + index + " ma wartość " + element);
})

for (var i = 0; i < tablica.length; i++) {
    console.log("Element z indexem: " + i + " ma wartość " + tablica[i]);
}

//pętla while
//
var it = 0;
while (it < tablica.length) {
    console.log(tablica[it]);
    it++;
}

//    pętla do while 

var iter = 20;
do {
    iter++;
    console.log(iter);
} while (iter < 5)


var a = 0;
while (a < 10) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    }
}

for ( var b = 0 ; b < 5 ; ++b ) {
    if (b == 2) {
        continue;
    } else {
        console.log(b);
    }
    console.log(b);
}