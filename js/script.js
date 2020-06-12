/*
Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt
alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

// attendo il caricamento dell'HTML
$(document).ready(
  function (){
    var game = gameCountdown();
    // Genero 5 numeri casuali
    function numeriCasuali(numeri) {
      var arrayNumeriCasuali = [];
      for (var i = 0; i < 5 ; i++) {
        var numeri= Math.floor(Math.random() * 100) + 1;
        arrayNumeriCasuali.push(numeri);
      }
      console.log(arrayNumeriCasuali);
      return arrayNumeriCasuali;
    }
    // e li metto in un alert.
    // una volta che l'utente clicca ok faccio partire un timer di 30 secondi
    function gameCountdown() {
      var messaggio = alert('Ricordati questi numeri, al click su OK partira un countdown di 30 secondi e alla fine dovrai scrivere i numeri che avevi visto, sempre se ci riesci! ' + numeriCasuali());
      setTimeout(
        function () {
          var arrayNumeriUtente = [];
          for (var i = 0; i < 5; i++) {
            var numeriUtente= parseInt(prompt('adesso dovrai scrivere, uno alla volta, i numeri che ricordi dei 5 che hai visto. Scrivi un numero e clicca OK'));
            arrayNumeriUtente.push(numeriUtente);
          }
          console.log(arrayNumeriUtente);
          return arrayNumeriUtente;
        }
      , 3000);
    }
    // alla fine dei 30 secondi partono i prompt dell'utente
    // function () {
    //   var arrayNumeriUtente = [];
    //   for (var i = 0; i < 5; i++) {
    //     var numeriUtente= parseInt(prompt('adesso dovrai scrivere, uno alla volta, i numeri che ricordi dei 5 che hai visto. Scrivi un numero e clicca OK'));
    //     arrayNumeriUtente.push(numeriUtente);
    //   }
    //   console.log(arrayNumeriUtente);
    //   return arrayNumeriUtente;
    // }
  }
);
