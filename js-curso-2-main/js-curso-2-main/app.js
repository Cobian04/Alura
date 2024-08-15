let titulo = document.querySelector("h1")
titulo.innerHTML = "Aqui se cambia el titulo"

function botonClickeado(){
    alert("Este boton fue clickeado")
}

function botonPromptClickeado(){
    let ciudad = prompt("Por favor, escribe una ciudad de brasil")
    console.log("Estuve en " + ciudad + " Y me acorde de ti")
}

function botonAlerta(){
    alert("Yo amo a JS")
}

function botonSuma(){
    let num1 = prompt("Por favor teclea tu numero")
    let num2 = prompt("Por favor teclea tu segundo numero")
    let resultado = num1+num2
    console.log(resultado)
}