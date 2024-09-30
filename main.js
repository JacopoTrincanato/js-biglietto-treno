console.log('ciao');



//FASE 1: preparazione
//creo variabile dove salvare il numero di kilometri
let kilometres;

//creo variabile dove salvare l'età del passeggero
let age;

//creo variabile dove salvare il prezzo al kilometro
let price;

//creo variabile dove salvare il prezzo del ticket
let ticket_price;

//creo variabile dove salvare lo sconto per i minorenni
let young_discount;

//creo variabile dove salvare lo sconto per gli over 65
let senior_discount;

//FASE 2: raccolta Dati
//assegno un valore a kilometres
kilometres = Number(prompt(100));
console.log(kilometres);

//assegno un valore a age
age = Number(prompt(30));
console.log(age);

//assegno un valore a price
price = Number(prompt(0.21));
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
    ticket_price = price * kilometres - young_discount;

}

//FASE 4: output
//stampo il prezzo del biglietto in console
console.log(ticket_price);
