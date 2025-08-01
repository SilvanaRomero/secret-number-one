let secretNumber;
let attempts;

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

function initialConditions(){

    /* Condiciones iniciales del juego: 
    - Mensajes inicial indicando intervalo de nros
    - Genera el nro secreto aleatorio
    - Inicializa el nro de intentos */

    assignTextElement('h1' , 'Juego del número secreto!' );
    assignTextElement('p', 'Ingresa un número del 1 al 10');
    secretNumber = createSecretNumber();
    attempts = 1;

}

function verifyAttempt() {

    let numberUser = parseInt(document.getElementById('valueUser').value);
    console.log(numberUser);
    if ( numberUser === secretNumber) {
        assignTextElement ('p', ` Acertaste el número en ${attempts} ${(attempts === 1) ? 'vez' : 'veces'}`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {

        // El usuario no acertó.

        if ( numberUser > secretNumber){
            assignTextElement('p', "El número secreto es menor.");
        } else {
            assignTextElement('p', "El número secreto es mayor.");
        }
        attempts++;
        cleanDisplay();

    }
    

    return;

}

function cleanDisplay(){
    document.querySelector('#valueUser').value = ''; // Uso el querySelector por Id con #
}

function restartGame(){
    //limpiar el display
    cleanDisplay();

    initialConditions();
    //Desahibilitar boton de nvo juego

document.querySelector('#restart').setAttribute('disabled','true'); //Desahbilito el boton nuevo juego

    
}

initialConditions();