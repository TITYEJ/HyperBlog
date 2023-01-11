//funcion reduce reduce un array a un solo valor

let calificaciones=[
    3,5,9,10,10
];

let sumanotas= calificaciones.reduce((acumulador,calificacion)=>acumulador+calificacion,0);
//la funcion del elemento reduce recibe dos parametros, un acumulador y una variable que representa cada elemento del arreglo
console.log(sumanotas);
console.log(calificaciones);

var edades =[21,21,23,43,21,43,18,18,23,23];

var resultado=edades.reduce((acumulador,edad)=>{
    if (!acumulador[edad]) {
        acumulador[edad]=1;
    }else{
        acumulador[edad]+=1;
    }
    return acumulador;
},{});

console.log(resultado);
//contando cuantos numeros hay por dato

var ventas=[
    {
        nombre:"camiseta",
        precio:15,
        totalVendido:10
    },
    {
        nombre:"zapatilla",
        precio:150,
        totalVendido:8
    },
    {
        nombre:"pantalon",
        precio:20,
        totalVendido:30
    },
];

//ahora vamos a confirmar cuantas ventas hay por producto(objeto)
let resultado=ventas.reduce((acumulador,producto)=>{
    let totalVentas=producto.precio *producto.totalVendido;
    acumulador[producto.nombre]=`$${totalVentas}`;
    return acumulador;
},{});

console.log(resultado);

var estudiantes=[
    {
        nombres: "Evelio",
        edad: "24",
        matriculado: true,

    },
    {
        nombres: "Moises",
        edad: "20",
        matriculado: true,
        
    },
    {
        nombres: "Noyli",
        edad: "23",
        matriculado: false,
        
    },
    {
        nombres: "Endson",
        edad: "23",
        matriculado: true,
        
    },
    {
        nombres: "Andy",
        edad: "24",
        matriculado: false,
        
    }

];

let resultadoestudiantes=estudiantes
    .map((estudiante)=>estudiante.matriculado)
        .reduce((acumulador, estudiante)=>{
            if (estudiante) {
                acumulador.matriculado+=1;
            }else{
                acumulador.no_matriculado+=1;
            }
            return acumulador;
        },{matriculado:0,no_matriculado:0});
//en los segundos corchetes creamos como atributos del acumulador,ESTE VA CON PUNTO NO CON LLAVES

console.log(resultadoestudiantes);