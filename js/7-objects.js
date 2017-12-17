'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {console.log(this.imie)}
}
//słówko this oznacza z tego obiektu

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie + " " + this.wzrost)}
}

console.log(kaja.przedstawOsobe);
console.log(kaja);

krystian.przedstawOsobe();
//() oznaczaja ze wywylujesz funcje

//można dodać wartosc poza obiektem
krystian.waga = 80;
krystian.wyswietlDetale = function() {
    console.log(this.imie + ", " + this.wzrost + ", " + this.waga) 
}

class Osoba {
    constructor(imie, nazwisko, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.plec = plec;
    }
    wyswietlDetale() {
        console.log("Imię: " + this.imie + ", Nazwisko: " + this.nazwisko + ", Płeć: " + this.plec);
    }
}

var ewa = new Osoba("Ewa", "Wakulska", "Kobieta");
console.log(ewa);
ewa.wyswietlDetale();

var damian = new Osoba ("Damian", "Pawelec", "Mężczyzna");
console.log(damian);
damian.wyswietlDetale();

var tablica = [damian, ewa];
console.log(tablica);