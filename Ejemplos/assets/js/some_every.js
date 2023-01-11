//some evalua si alguno de los elementos cumple con una condicion especifica, si cumple retorna un true, caso contrario false
//every nos devuelve un valor logico si todos los elementos cumplen con una condicion

let numeros=[,2,4,6,8,7,10];

let resultado=numeros.some((numero)=>numero%2==0);

console.log(resultado);

//every
resultadoevery=numeros.every((numero)=>numero%2===0);
console.log(resultadoevery);