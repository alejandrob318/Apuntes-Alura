/* Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con 
el valor del dólar en tu país). Para esto, considera 
la cotización del dólar igual a R$4,80. */

function calcularConversionReales(cantidad){
    return (cantidad * 1) / 4.80;
}

console.log(calcularConversionReales(100));