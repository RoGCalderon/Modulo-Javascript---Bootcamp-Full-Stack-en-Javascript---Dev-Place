//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100.

function compraConIva(precio){
    return precio + ((precio *21)/100);
}

console.log( "Usted debe pagar: "+ compraConIva(100));

//En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
let creditos=parseInt(prompt("Ingrese su crédito(valor de 1 a 4"));
function salasJuegos(creditos){
    switch (creditos){
      case 1: console.log("Usted sólo puede acceder a la primer sala");
      break;
      case 2: console.log("Usted puede acceder a las dos primeras salas");
      break;
      case 3: console.log("Usted puede acceder a las tres primeras salas");
      break;
      case 4: console.log("Usted puede acceder a todas las salas")
  
  }
  }
  
  console.log(salasJuegos(3));

//En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 y si elige electrico o 3 se le enviará a la ofician 300.

function tiendaCoches(tipo){
    if (tipo === 'gasolina' || tipo === 1){
        console.log("Debe dirigirse hacia la oficina número 100");
    } else if (tipo === 'diesel' || tipo === 2){
        console.log("Debe dirigirse hacia la oficina número 200");
    }else if(tipo === 'electrico' || tipo === 3){
        console.log("Debe dirigirse hacia la oficina número 300");
    }
}

console.log(tiendaCoches(3))

//Un comerciante hace descuentos a sus clientes de la siguiente forma:
//Si ha comprado menos de 100 euros no hay descuento
//Si la compra está entre 100 y 300 euros le descuenta un 5%
//Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
//Si la compra supera los 400 euros le descuenta un 15%

let monto = parseInt(prompt("Ingrese el monto de su compra"));
function descuento(monto){
    if(monto< 100){
        console.log("Usted no tiene descuento");
    } else if(monto<=100 && monto<=300){
        console.log("Usted tiene un descuento de un 5%");
    } else if(monto>300 && monto<=500){
        console.log("Usted tiene un descuento de un 10%");
    } else if(monto == 400){
        console.log("Usted tiene un descuento de un 15%");
    }
}

console.log(descuento(45));

// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  

let contador, maximo , msjNumeros= ''
maximo = parseInt(prompt("Ingrese un número entero"));
for (let contador = 0; contador<= maximo; contador++){
    msjNumeros += contador + ",";
}
msjNumeros += contador;
console.log(msjNumeros);

//.En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

let numero = parseInt(prompt('Ingrese un número entero'));
for ( let i=0; i<= numero; i++){
    if(i %3 == 2){
        console.log([i]);
    }
}

// Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4

let suma = 0;
for(let contador=1; contador<=4;contador++){
       let numero = parseInt(prompt('Ingrese un número'))
    suma = suma + numero;
}

console.log(suma);




