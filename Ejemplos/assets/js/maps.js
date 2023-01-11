
var estudiantes=["Dayana","Pamela","Ada","Katrina"];

// el metodo map, usa cada elemento de arriba y hace un objeto (parecido a foreach) y lo podemos hacer como queramos,
// en este caso pusimos una variable extra llamada asistencia

var asistencia=estudiantes.map((nombre)=>{
    return {
        nombre: nombre,
        asistencia: false
    }
});




var asistencia=estudiantes.map((nombre)=>`${nombre}.`);
console.log(estudiantes);
console.log(asistencia);


let estudiantes=["Jorge","Evelio","Andy","Mr David"];





let productos=[
    {
        nombre:"camisetas", precio: 15,
    },
    
    {
        nombre:"zapatillas", precio: 20,
    },
    
    {
        nombre:"pantalon", precio: 25,
    }

];


let productosImpuesto=productos.map((producto)=>{

    // producto.impuesto=12;
    // return producto;
    return {
        ...producto,
        impuesto: .12

        // crea un nuevo valor en cada objeto en este caso crea el valor impuesto
    };
});

console.log(productos);
// porque productos esta modificado si map es inmutable
//sucede porque nosotros no estamos devolviendo un objeto nuevo como tal (el de productos impuesto) con el valor agregado,
//si no que estamos agarrando cada elemento del array, y le estamos retornando a ese elemento un nuevo valor, por eso pasa eso
// para evitar esto (y que el arreglo nuevo se guarde en productosImpuesto) debemos devolver un objeto nuevo en return 
//los 3 puntos sirve para evitar hacer referencias a las propiedades del objeto y lo pone en el nuevo objeto. ver video si siguen perdidos
console.log(productosImpuesto);

// ahora voy a retornar solo los precios

let precio=productos.map((producto)=>{
    return producto.precio;
});

console.log(precio);

