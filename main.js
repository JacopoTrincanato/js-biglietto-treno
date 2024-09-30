console.log('ciao');



//FASE 1: preparazione
//creo variabile dove salvare il numero di kilometri
let kilometres;

//creo variabile dove salvare l'età del passeggero
let age;

//creo variabile dove salvare il prezzo al kilometro
let price;

//creo variabile dove salvare lo sconto per i minorenni
let young_discount;

//creo variabile dove salvare lo sconto per gli over 65
let senior_discount;

//creo variabile dove salvare il prezzo del ticket
let ticket_price;

//FASE 2: raccolta Dati
//assegno un valore a kilometres
kilometres = Number(prompt("Inserisci il numero di kilometri che percorrerai"));
console.log(kilometres);

//assegno un valore a age
age = Number(prompt("Inserisci la tua età"));
console.log(age);

//assegno un valore a price
price = 0.21;
console.log(price);

//assegno un valore a young_discount (sconto del 20%)
young_discount = (price * kilometres *20) / 100;
console.log(young_discount);


//assegno un valore a senior_discount (sconto del 40%)
senior_discount = (price * kilometres *40) / 100;
console.log(senior_discount);

//FASE 3: elaborazione dati
//calcolo il prezzo del biglietto per i minorenni
if (age < 18) {
    ticket_price = kilometres * price - young_discount;

//calcolo il prezzo del biglietto per gli over 65
}else if (age > 65) {
    ticket_price = kilometres * price - senior_discount;

//calcolo il prezzo del biglietto a prezzo pieno
}else {
    ticket_price = kilometres * price;
}

//FASE 4: output
//stampo il prezzo del biglietto in console
console.log(ticket_price);
