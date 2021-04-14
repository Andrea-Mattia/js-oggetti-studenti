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

$(document).ready(function () {
    
    // Refs
    var btn1 = $('.btn-1');

    btn1.click(function() { 
        // Ref
        var student = {
            firstName: 'Pippo',
            lastName: 'Franco',
            age: 80,
        }

        // Iterazione per stampare le proprietà dell'oggetto
        for (var key in student) {
            var result1 = $('.ex-1 .result');
            result1.append(key + ': ' + student[key] + '<br>');
        }
    });

    /*****************
     * ESERCIZIO 2
     *****************/

    // Refs
    var btn2 = $('.btn-2');

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

    btn2.click(function() {

        // Iterazione per stampare nome e cognome degli studenti
        for (var i = 0; i < students.length; i++) {

            var result2 = $('.ex-2 .result');
            var alumn = students[i];

            result2.append('Nome: ' + alumn.nome + '<br>' + 'Cognome: ' + alumn.cognome + '<br><br>');
        }
    });

    /*****************
     * ESERCIZIO 3
     *****************/

    // Refs
    var btn3 = $('.btn-3');

    btn3.click(function() {
        // Refs
        var newStudent = {};

        // Inserimento dei dati del nuovo studente da parte dell'utente
        newStudent.nome = prompt('Inserisci il nome dello studente').trim();
        newStudent.cognome = prompt('Inserisci il cognome dello studente').trim();
        newStudent.eta = parseInt( prompt('Inserisci l\' età dello studente').trim() );

        // Inserimento del nuovo studente nell'array students
        students.push(newStudent);

        // Stampo il contenuto del'array students
        $('.ex-3 .result').text('Guarda nella console!!');

        console.log('Students: ', students);
        console.table(students);
    });

    // End doc ready
});