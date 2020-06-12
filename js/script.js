/*
Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt
alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

// Genero 5 numeri casuali
$(document).ready(
  function (){
    function numeriCasuali(numeri) {
      var arrayNumeriCasuali = [];
      for (var i = 0; i < 5 ; i++) {
        var numeri= Math.floor(Math.random() * 100) + 1;
        arrayNumeriCasuali.push(numeri);
      }
      console.log(arrayNumeriCasuali);
      return arrayNumeriCasuali;
    }
    alert(numeriCasuali());
  }
);
