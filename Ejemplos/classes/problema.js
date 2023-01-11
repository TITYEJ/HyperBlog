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

    //asi construyo un objeto solo enviando parametros, podemos decir que es un pequeño constructor
    
    this.nombre=nombre;
    this.edad=edad;

    this.imprimir=function(){
        console.log(`Nombre ${this.nombre} - edad: ${this.edad}`);
    }

}


// para hacer la funcion Persona como metodo y se ejecute con cada objeto utilizamos New al momento de llamar el objeto
// y enviar sus parametros
const Maria=new Persona('Maria',18);
Maria.imprimir();