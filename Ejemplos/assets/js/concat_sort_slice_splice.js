// metodo concat sirve para concatenar dos arreglos

let array1=[1,2,3,4,5];
let array2=[6,7,8,9,0];
let array3 = array1.concat(array2);

console.log(array3);

//metodo sort sirve para ordenar un arreglo

let arraysort=[1,2,3,4,5,6,7,8,9,0];
console.log(arraysort.sort());

//metodo splice elimina o reemplaza elementos de un array

let nombres=["Jorge","Evelio","Andy"];
nombres.splice(1)
console.log(nombres);

// elimino a partir de la posicion 1,para eliminar un elemento hay que poner un segundo parametro diciendo el numero de parametros a eliminar
//si se le agrega un tercer parametro este no lo elimina, sino que lo edita

//metodo slice retorna una copia de una parte mas pequeña del arreglo
let nombre=["Jorge","Evelio","Andy"];
let resultado=nombre.slice(1,2); //no incluye la ultima posicion
console.log(resultado);
