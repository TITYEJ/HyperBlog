class Persona{

    static _conteo=0;

    //puedo usar conteo directamente sin instanciar, como el get anterior
    static get conteo(){
        return Persona._conteo + 'instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log("Hola a todos soy un metodo estatico");
    }

    nombre='';
    codigo='';
    frase='';
    comida='';

    constructor(nombre, codigo, frase){
        this.codigo=codigo;
        this.nombre=nombre;
        this.frase=frase;

        Persona._conteo++;
    }

    set SetComidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}` );
    }
}


//creamos instancia de clase

const spiderman=new Persona('Peter Parker', 'Spiderman', 'Un gran poder conlleva una gran responsabilidad');
// const IronMan=new Persona('Tony Stark', 'IronMan', 'Y soy ironman');
// const spiderman=new Persona('Peter Parker', 'Spiderman', 'Un gran poder conlleva una gran responsabilidad');


// console.log(IronMan);

spiderman.quienSoy();
// IronMan.quienSoy();

spiderman.SetComidaFavorita = 'El Pie de cereza de la tía May';
// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo=2;
console.log('Conteo estatico',Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();