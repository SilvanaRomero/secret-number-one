let secretNumber = createSecretNumber();
let attempts = 1;

console.log(secretNumber);

function assignTextElement(element, text) {

    /* Toma un elemento del HTML y le asigna un texto */

    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;

}

function createSecretNumber(){
    
    // Genera un número aleatorio entre 1 y 10 

    return Math.floor(Math.random()*10 + 1);

}

function verifyAttempt() {

    let numberUser = parseInt(document.getElementById('valueUser').value);
    console.log(numberUser);
    if ( numberUser === secretNumber) {
        assignTextElement ('p', ' Acertaste el número ');
    } else {

        if ( numberUser > secretNumber){
            assignTextElement('p', "El número secreto es menor.");
        } else {
            assignTextElement('p', "El número secreto es mayor.");
        }
        attempts++;

    }
    

    return;

}

assignTextElement('h1' , 'Juego del número secreto!' );
assignTextElement('p', 'Ingresa un número del 1 al 10');
