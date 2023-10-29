// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

//------------------------------------------------------------------------------------------------------------------------------
//-- Es. 7
const cambiaTitolo = function(){

    const tagh1 = document.querySelector("h1")
    tagh1.innerText = "Sono il nuovo titolo"
}
//-- Es. 8
const cambiaColore = function(){
    const pagina = document.querySelector("body")
    pagina.style = 'background-color: rgb('+
    Math.floor(Math.random() * 255)+','+
    Math.floor(Math.random() * 255)+','+
    Math.floor(Math.random() * 255)+')'
}
//-- Es. 9
const cambiaIndirizzo = function(){
    const indirizzo = document.querySelector(".indirizzo")
    indirizzo.innerText = "Viale Eritrea 4, 00199 - Roma"
}
//-- Es. 10

const aggiungiClasse = function (){
    const link = document.querySelectorAll(".card a")
    for (let i = 0; i < link.length; i++) {
        link[i].classList.add("links");
    }

}
//-- Es. 11

const aggiungiVisibility = function (){
    const visibility = document.querySelectorAll(".card img")
    for (let i = 0; i < visibility.length; i++) {
        visibility[i].classList.toggle("visibility")
        
    }
}

const cambiaPrezzo = function(){
    const prezzo = document.querySelectorAll(".prezzo")
    for (let i = 0; i < prezzo.length; i++) {
        prezzo[i].style = 'color: rgb('+
        Math.floor(Math.random() * 255)+','+
        Math.floor(Math.random() * 255)+','+
        Math.floor(Math.random() * 255)+')';
    }
}