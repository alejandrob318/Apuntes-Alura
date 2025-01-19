/* Crea una función que calcule el índice de masa corporal (IMC) 
    de una persona a partir de su altura en metros y peso en kilogramos, 
    que se recibirán como parámetros. 
*/

function calcularIMC(altura,peso){
    return peso/ Math.pow(altura,2);
}


let imc = calcularIMC(1.8,69.2);

console.log(imc);
    
