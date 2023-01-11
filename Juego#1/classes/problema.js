const Evelio={
    nombre: 'Evelio',
    edad: 24
}


const Pedro={
    nombre: 'Pedro',
    edad: 19
}


//esta es una funcion de instancias, por eso lleva la P mayusculas
function Persona(nombre, edad){
console.log("Linea ejecutada");
}

const Maria=Persona('Maria',18);
console.log(Maria);