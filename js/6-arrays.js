'use strict';

var imiona = ["Monika", "Krystian", "Łukasz"];
console.log(imiona);
//imiona[0] to będzie Monia

imiona[3] = "Tania";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

//push dodaje na poczatku
imiona.push("Gustaw");
console.log(imiona[2] + " i " + imiona[4]);

imiona.pop();
imiona.pop();
//usuwa ostatenie elementy z tablicy
console.log(imiona);

//ushift dodaje na poczatku
console.log(imiona.unshift("Robert"));
console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

//sprawdzamy ile elementow jest w tablicy

console.log(imiona.length);

////join łaczy elementy, możemy dopisać znaki które zostaną wstawione pomiędzy nimi, łaczy je w stringa, to już nie jest tablica
//
//var stringZTabicy = imiona.join(" ! ");
//console.log(stringZTabicy);

//reverse odwróci kolejnosc elementow
console.log(imiona.reverse());

//sortowanie domysle, dziala na stringi
var tablicaLiczb = [3, 67, 1, 634, 99, 88];
//var posortowanaTablica = tablicaLiczb.sort();
console.log(posortowanaTabica);

var posortowanaTablica = imiona.sort();
console.log(posortowanaTablica);