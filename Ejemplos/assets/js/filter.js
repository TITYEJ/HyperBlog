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

let filtrado =estudiantes.filter((estudiante)=> estudiante.edad>=21);


// este metodo inmutable hace una busqueda dependiendo del filtro que le coloquemos


let filtradodoble =estudiantes.filter((estudiante)=> estudiante.edad>=21 && estudiante.matriculado==true);
// aqui haremos doble filtro

console.log(estudiantes);
console.log(filtrado);
console.log(filtradodoble);

// nota: no es viable utilizar filtrer cuando son muchos registros, mejor usar sql u otro procedimiento