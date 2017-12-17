'use strict';

//typ liczbowy

var wyplata = 5000;
var premia = 2500;
var wyplataCalkowita;

wyplataCalkowita = wyplata + premia;
console.log(wyplataCalkowita);

//typ łańcuchowy

var wyplataStr = "5000";
var premiaStr = "2500";
//cudzusłów w cudzysłowie zamknie wartosc i po nim wywali błąd możemy zamiast tego dać znakk specjalny /
var wyplataCalkowitaStr;

wyplataCalkowitaStr = wyplataStr + premiaStr;
console.log(wyplataCalkowitaStr);

//typ logiczny boolean 
var czyJestSmog;
czyJestSmog = true;
console.log(czyJestSmog);

//typy specjalne -- undefined null

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);


