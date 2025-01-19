//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero){
    let factorial= 1;
    console.log(5);
    for(let i = numero;i > 0;i--){
        factorial *= i;
    }
    return factorial
}

console.log(calcularFactorial(5));