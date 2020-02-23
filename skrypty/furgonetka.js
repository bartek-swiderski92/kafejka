(function (window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};
  function Furgonetka(identyfikator, bazadanych) {
    this.identyfikator = identyfikator;
    this.bazadanych = bazadanych;
};

Furgonetka.prototype.zlozZamowienie = function(zamowienie) {
  console.log('Zlozenie zamowienie dla ' + zamowienie.email);
  this.bazadanych.dodaj(zamowienie.email, zamowienie);
};

Furgonetka.prototype.zrealizujZamowienie = function(idklienta) {
  console.log('Zrealizowane zamowienie dla ' + idklienta);
  this.bazadanych.usun.(idklienta);
};
Aplikacja.Furgonetka = Furgonetka;
window.Aplikacja = Aplikacja;
})(window);
