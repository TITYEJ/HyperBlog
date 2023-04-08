import '../css/componentes.css';

// el export es para poder mandarlo para otro lado con webpack
export const saludar=(nombre)=>{
    console.log('Creando etiqueta h1');
    const h1=document.createElement('h1');
    h1.innerText=`Hola ${nombre}`;

    document.body.append(h1);
    
}