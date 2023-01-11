//Callbacks son funciones que se envian como parametro a otra funcion




const funcion=(Nombre, anio, cb)=>{


    let edad= 2022-anio;

    cb(Nombre,edad);

}


funcion("Evelio",1998,(Nombre,edad)=>{

    console.log(`${Nombre} Tiene ${edad} años`);

});