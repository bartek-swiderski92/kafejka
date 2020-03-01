(function (window) {
  'use strict' ;
  var Aplikacja = window.Aplikacja || {};

  function Furgonetka(identyfikator, bazadanych) {
    this.identyfikator = identyfikator;
    this.bazadanych = bazadanych;
}

Furgonetka.prototype.zlozZamowienie = function (zamowienie) {
  console.log('Zlozenie zamowienia dla ' + zamowienie.email);
  this.bazadanych.dodaj(zamowienie.email, zamowienie);
};

Furgonetka.prototype.zrealizujZamowienie = function(idklienta) {
  console.log('Zrealizowane zamowienie dla ' + idklienta);
  this.bazadanych.usun(idklienta);
};

Furgonetka.prototype.drukujZamowienia = function () {
  var tablicaKlientow = Object.keys(this.bazadanych.pobierzWszystko());
  console.log('Furgonetka nr ' + this.identyfikator + ' ma niezrealizowane zamowienia:');
  tablicaKlientow.forEach(function(id) {
    console.log(this.bazadanych.pobierz(id));
  });
};

Aplikacja.Furgonetka = Furgonetka;
window.Aplikacja = Aplikacja;
})(window);
