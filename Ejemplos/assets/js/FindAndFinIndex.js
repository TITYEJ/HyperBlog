//find se va encargar de buscar un elemento que coincida con cierta condicion dentro de un array
//FindIndex retorna la posicion de una condicion.

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

let cliente=clientes.findIndex((cliente)=>cliente.Id===3);
console.log(cliente);