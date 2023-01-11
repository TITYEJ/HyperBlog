class Persona{

    nombre;
    codigo;
    frase;

    constructor(nombre, codigo, frase){
        this.codigo=codigo;
        this.nombre=nombre;
        this.frase=frase;
    }
}


//creamos instancia de clase

const spiderman=new Persona('Peter Parker', 'Spiderman', 'Un gran poder conlleva una gran responsabilidad');
const IronMan=new Persona('Tony Stark', 'IronMan', 'Y soy ironman');
// const spiderman=new Persona('Peter Parker', 'Spiderman', 'Un gran poder conlleva una gran responsabilidad');

console.log(spiderman);
console.log(IronMan);