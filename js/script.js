/**
 * Descrizione
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a
 * schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e
 * cognome.
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo
 * nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2
 * e mostrare alla fine il contenuto dell'array.
 */

/*****************
 * ESERCIZIO 1
 *****************/

// Ref
var student = {
    firstName: 'Pippo',
    lastName: 'Franco',
    age: 80,
}

console.log('---- ESERCIZIO 1 ----');

// Iterazione per stampare le proprietà dell'oggetto
for (key in student) {
    console.log(key + ':', student[key]);
}

/*****************
 * ESERCIZIO 2
 *****************/

// Ref
var students = [
    {
        nome: 'Carcarlo',
        cognome: 'Pravettoni',
        eta: 66,
    },
    {
        nome: 'Piergiacomo',
        cognome: 'Rosetta',
        eta: 21,
    },
    {
        nome: 'Gastani',
        cognome: 'Frinzi',
        eta: 16,
    },
    {
        nome: 'Filippo',
        cognome: 'Giallini',
        eta: 35,
    },
];

console.log('---- ESERCIZIO 2 ----');

// Iterazione per stampare nome e cognome degli studenti
for (var i = 0; i < students.length; i++) {
    var alumn = students[i];
    console.log('Nome: ', alumn.nome);
    console.log('Cognome: ', alumn.cognome);
}