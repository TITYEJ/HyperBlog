var arreglo=[
    {
        Javascript: 246011,
        TypeScript: 8959,
        HTML: 6534,
    },
    {
        Javascript: 246011,
        TypeScript: 8959,
        HTML: 6534,
    },
    {
        Javascript: 246011,
        TypeScript: 8959,
        HTML: 6534,
    },
    {
        C: 33624,
    }
];


var reducir=arreglo.reduce((acum,valores)=>{
    const arrayobject=Object.keys(valores);
    arrayobject.map((uno)=>{
        if (acum[uno]) {
            acum[uno]+=valores[uno];
        }else{
            acum[uno]=valores[uno];
        }
    });
    return acum;
},{});


console.log(reducir);