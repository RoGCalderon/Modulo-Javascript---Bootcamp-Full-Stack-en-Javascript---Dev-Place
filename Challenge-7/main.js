// 1) Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

for(let i=0; i<=meses.length; i++){
    console.log("El mes número [i] es meses[i]");
}

// 2)Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numeroParImpar(numero){
    if(numero%2 === 0){
        console.log('El número ingresado es par');
    }else{
        console.log('El número ingresado es impar');
    }
}

console.log(numeroParImpar(7)); //El número ingresado es impar
console.log(numeroParImpar(6)); //El número ingresado es par
console.log(numeroParImpar(11)); //El número ingresado es impar

//3) Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let cadena1 = 'MI GATO SE LLAMA PEDRO';
let cadena2 = 'hola mundo';
let cadena3 = 'Hola JavaScript';

function mayusculaMinuscula(cadena){
    if ( cadena === cadena.toUpperCase()){
        console.log('La cadena está formada por mayúsculas');
    } else if (cadena === cadena.toLowerCase()){
        console.log('La cadena está formada por minúsculas');
    } else{
        console.log('La cadena contiene mayúsculas y minúsculas');
    }
}

mayusculaMinuscula(cadena1); // La cadena está formada por mayúsculas
mayusculaMinuscula(cadena2); // La cadena está formada por minúsculas
mayusculaMinuscula(cadena3); // La cadena contiene mayúsculas y minúsculas


//4) .El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

function factorial(numero){
    let resultado =1;
    for( let i=1; i<=numero; i++){
        resultado = resultado* i;
    }
    return resultado;
}

console.log(factorial(5));

//5) Es igual al ejercicio 3. Están repetidos.