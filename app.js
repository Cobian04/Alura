function generarNumeroAleatorio() {
    return Math.floor((Math.random() * 100) + 1);
}

let numeroSecreto = generarNumeroAleatorio();  // Ahora se inicializa correctamente
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarUsuario() {
    let numeroUsuario= document.getElementById("valorUsuario").value;
    console.log(numeroUsuario)
}

asignarTextoElemento('h1', 'Título de juego');
asignarTextoElemento('p', 'Indica un número del 1 al 100');
