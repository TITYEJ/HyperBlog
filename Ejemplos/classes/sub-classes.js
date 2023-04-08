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

class Heroe extends Persona{
    clan="sin clan";

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase); 
        //super hace referencia al constructor de la clase que extendo
    
        this.clan='Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi clan es ${this.clan}` );
        super.quienSoy();
    }
}

const spiderman=new Heroe('Peter Parker', 'Spiderman', 'Un gran poder conlleva una gran responsabilidad');
// const spiderman=new Heroe(); 

// console.log(spiderman);

spiderman.quienSoy();