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
    //variabile per funzione numeri casuali
    var numeriCasuali = generaNumeriCasuali();
    // variabile per far partire i 30secondi, le 5 domande e il calcolo del punteggio
    var game = gameCountdown();

    // Genero 5 numeri casuali e li metto in un array
    function generaNumeriCasuali() {
      var arrayNumeriCasuali = [];
      for (var i = 0; i < 5 ; i++) {
        var numeri= Math.floor(Math.random() * 100) + 1;
        arrayNumeriCasuali.push(numeri);
        arrayNumeriCasuali.sort();
      }
      return arrayNumeriCasuali;
    }

    // le risposte dell'utente finiranno a sua volta in un array.
    function gameCountdown() {
      // faccio partire l'alert con il gioco e il countdown di 30 secondi,
      // alla fine dei 30 secondi iniziano le 5 domande all'utente.
      var messaggio = alert('Ricordati questi numeri, al click su OK partira un countdown di 30 secondi e alla fine dovrai scrivere i numeri che avevi visto, sempre se ci riesci! ' + numeriCasuali);
      setTimeout(
      function (){
          var arrayNumeriUtente = [];
          for (var i = 0; i < 5; i++) {
            var numeriUtente= parseInt(prompt('adesso dovrai scrivere, uno alla volta, i numeri che ricordi dei 5 che hai visto. Scrivi un numero e clicca OK'));
            //  se i numeri scritti dall'utente corrispondono a quelli nell'array dei numeri numeriCasuali
            // il ciclo li inserisce nell'arrayNumeriUtente cosi da contarli
            if (numeriCasuali.includes(numeriUtente))
              arrayNumeriUtente.push(numeriUtente);
              arrayNumeriUtente.sort();
            }
          //  i numeri indovinati corrispondono cosi alla lunghezza dell'array utente
          var numeriIndovinati = arrayNumeriUtente.length;
          // in base al risultato ottenuto dall'utente stampa un log con il risultato
          if (numeriIndovinati === 0){
            console.log('non ne hai indovinato neanche uno. Punteggio: ' + numeriIndovinati);
          } else if (numeriIndovinati === 5){
              console.log('Grande hai vinto! i tuoi numeri erano: ' + arrayNumeriUtente + ' ed i numeri casuali erano: ' + numeriCasuali + '. Punteggio: ' + numeriIndovinati);
            } else {
                console.log('non è andata bene, i numeri indovinati sono: ' + arrayNumeriUtente + ' ed i numeri casuali erano: ' + numeriCasuali + '. Punteggio: ' + numeriIndovinati);
              }
          }
      , 30000);
    }
  }
);
