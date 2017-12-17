'use strict';

//function wyswietlWKonsoliImie(imieWyswietl) {
//    console.log(imieWyswietl);
//}
//
//wyswietlWKonsoliImie("Monia");
//wyswietlWKonsoliImie("Ula");
//wyswietlWKonsoliImie("Kuba");
//wyswietlWKonsoliImie("Stan");


function obliczOdsetki(kapital, procent) {
    var kapitalZOdsetkami = kapital + kapital * procent;
    return kapitalZOdsetkami;
}
//nie uzywamy zmiennych jako parametrow funcji; jesli definiujemy zminna w funcji istnieje tymzasowo tzw. zmienna lokalna tylko w obrebie funkcji

//console.log( obliczOdsetki(1000000, 0.015) );

var inwestycjaAnety = obliczOdsetki(1000000, 0.015);
console.log (inwestycjaAnety);
//usuwaj consol loga i alerty to twoje sprawdzanie, nie dla klienta

var inwestycjaKuby = obliczOdsetki(1000, 0.5);
console.log(inwestycjaKuby);