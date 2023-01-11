
//este metodo devuelve true si encuentra el valor que le pasamos en el arreglo donde se pone dicho metodo
let mascotas=["perro","gato","conejo"];

let resultado=mascotas.includes("gato");

console.log(resultado);

//haremos un filter y un include

let buscador=(parametro)=>{
    let clientes=[{
        Id: 1,
        Nombre: "Evelio"
    },
    {
        Id: 2,
        Nombre: "Karla"
    },
    {
        Id: 3,
        Nombre: "Moi"
    },
    {
        Id: 4,
        Nombre: "Steven"
    },
    {
        Id: 5,
        Nombre: "David"
    }
    ];

    return clientes.filter((cliente)=>cliente.Nombre.includes(parametro));
}

console.log(buscador("a"));