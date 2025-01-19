let limite = parseInt(prompt("ingrese la cantidad limite: "));
let adivino= false;
let numeroSecreto = Math.floor(Math.random()*limite)+1;
let cantidad = 0;
let maxIntentos = 3;
console.log(numeroSecreto);
while(!adivino){
    // el prompt sirve para insertar un parametro por interfaz y tambien dar un mensaje
    // guarda un espacio en la memoria
    let numeroUsuario = parseInt(prompt("Me indicas un numero por favor:"));
    cantidad++;
    
    if (numeroUsuario == numeroSecreto) {
        //es una fucion que nos sirve para dar una alerta con el parametro que le ingresemos
         alert('Acertaste el numero, lo hiciste en ' +cantidad+" "+ `${cantidad == 1 ? 'vez' : 'veces'}`);
         adivino=true;
        
     }else{
        //verificamos si el usuario ingreso el numero a descubrir
        if(numeroUsuario > numeroSecreto){
             alert("el numero que ingresaste es mayor al numero que buscamos");
         }else{
             alert("el numero que ingresaste es menor al numero que buscamos");
         }

        if(cantidad > maxIntentos){
            alert("llegaste a cantidad maxima de intentos");
            break;
        }
         //alert('no acertaste el numero, el numero es '+ numeroSecreto);
     
        //otra forma de realizarlo 
        //aca le decimos al js que no solo se esta mandando cadenas de texto sino que 
        // variable tambien.extra:tambien en los corchetes podemos insertar codigo js
        //alert(`no acertaste el numero, el numero es:  ${numeroSecreto}`);
     }    
}

//mostramos por consola el nombre del usuario
//console.log(numeroSecreto);


