(function(window) {
  'use strict';
  var Aplikacja = window.Aplikacja || {};

  function BazaDanych() {
    this.dane = {};
  };

BazaDanych.prototype.dodaj = function(klucz, wartosc) {
  this.dane[klucz] = wartosc;
};

BazaDanych.prototype.pobierz = function(klucz) {
  return this.dane[klucz];
};

BazaDanych.prototype.pobierzWszystko = function() {
  return this.dane;
};

BazaDanych.prototype.usun = function(klucz) {
  delete this.dane[klucz]
};

  Aplikacja.BazaDanych = BazaDanych;
  window.Aplikacja = Aplikacja;
})(window);
