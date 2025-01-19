
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function botonClickeado(){
    console.log("El botón fue clicado");
}
function preguntarCiudad(){
    let ciudad = prompt("ingrese una ciudad de brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}
function amar(){
    alert("yo amo js");
}
function sumar(){
    s1 = parseInt(prompt("ingrese el numero 1: "));
    s2 = parseInt(prompt("ingrese el numero 2: "));
    suma = s1 + s2;
    alert(`la suma es: ${suma}`);
}