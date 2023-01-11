

// funciones anonimas autoinvocadas, todo se hace dentro de esta funcion
// para protejer el codigo de ataques externos
const modulo=(()=>{

    //use strict puede encapsular el codigo
    'use strict'



    let deck=[];

    const tipos=['C','D','H','S'],
        especiales=['A','J','Q','K'];

    // let puntos_jugador=0;
    // let puntos_PC=0;

    let puntosJugadores=[];

    //referencias de html

    const pedir=document.querySelector('#btnPedir'),
    detener=document.querySelector('#btnDetener'),
    nuevo=document.querySelector("#btnNuevo");

    const divCartarJugador=document.querySelectorAll('.divCartas');

    //Aqui creamos una nueva baraja
    const crearDeck=()=>{
        deck=[];
        for (let i=2;  i<= 10; i++) {
            for(let tipo of tipos){
                deck.push(i+tipo);
            }
        }

        for(let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp+tipo);
            }
            
        }

            // este metodo suffle barajea el arreglo, es parte de una libreria descargada
        
        // console.log(deck);
        return _.shuffle(deck);;
    }

    //primera funcion que inicializa el juego
    const inicializarJuego=(numJugadores=2)=>{
        deck= crearDeck();
        puntosJugadores=[];
        for (let i = 0; i <=1 ; i++) {
            document.querySelectorAll('small')[i].textContent=0;
            divCartarJugador[i].innerHTML='';
        }
        // document.querySelectorAll('small')[0].textContent=0;
        // document.querySelectorAll('small')[1].textContent=0;
        // // puntos_jugador=0;
        // // puntos_PC=0;
        pedir.disabled=false;
        detener.disabled=false;
        

        for (let i = 0; i < numJugadores; i++) {
            
            puntosJugadores.push(0);
        }
        console.log(puntosJugadores);
    }

    //esta funcion permite tomar una carta

    const pedirCartas=()=>{

        if (deck.length===0) {
            throw("No hay cartas");
        }

        //el pop elimina y devuelve el ultimo elemento de arreglo        
        return deck.pop();
    }


    // darle valor a las cartas
    const valorCarta=(carta)=>{

        //lo que hago aqui es que recibo la carta como string y agarra la posicion inicial y elimina el caracter final, devolviendo solo un valor
        
        const valor=carta.substring(0,carta.length-1);

        //evaluamos si es numero o no
        return (isNaN(valor))? 
        (valor==='A')? 10: 11 
        : valor*1;

        
    }

    //turno final pertenece a la pc

    const AcumularPuntos=(carta,turno)=>{
        puntosJugadores[turno]=  puntosJugadores[turno]+valorCarta(carta);
        document.querySelectorAll('small')[turno].textContent=puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta=(carta,turno)=>{
        const imgNueva=document.createElement('img');
        imgNueva.classList.add("carta");
        imgNueva.setAttribute("src","assets/cartas/"+carta+".png")
        divCartarJugador[turno].append(imgNueva);
    }

    const determinarJugador=()=>{

        const [puntosJugador,puntos_PC]=puntosJugadores;
        setTimeout(()=>{
            if (puntos_PC===puntosJugador) {
                alert("Nadie Gana :'v");
            }else if(puntosJugador>21 || (puntos_PC>puntosJugador && puntos_PC<21) || puntos_PC===21){
                alert("Gano PC");
            }else if(puntos_PC>21 || (puntos_PC<puntosJugador && puntosJugador<21) || puntosJugador===21){
                alert("Gana Jugador");
            }
            pedir.disabled=true;
            detener.disabled=true;
        },10);
    }
    //turno de la PC

    const turnoComputadora =(puntosJugador)=>{
        let puntos_PC=0;
        do{


        const carta=pedirCartas();

        puntos_PC=AcumularPuntos(carta,puntosJugadores.length-1);
        crearCarta(carta,puntosJugadores.length-1);
        // if (puntosJugador>21) {
        //     break;
        // }
        

        }while((puntos_PC<puntosJugador )&& (puntosJugador<=21));
        
        determinarJugador();
        
    }

    //eventos

    // evento click pedir cartas

    pedir.addEventListener('click',function () {
        const carta=pedirCartas();
        const puntos_jugador= AcumularPuntos(carta,0);

        crearCarta(carta,0);

        if (puntos_jugador>21 || puntos_jugador===21) {
            // alert("Gana Computadora");
            
            turnoComputadora(puntos_jugador);
        }else if(puntos_jugador===21){
            // alert("21 Genial");
            
            turnoComputadora(puntos_jugador);
        }
    });


    detener.addEventListener('click',function () {
        pedir.disabled=true;
        detener.disabled=true;

        turnoComputadora(puntosJugadores[0]);

    });


    nuevo.addEventListener('click',function () {
        inicializarJuego();
    });

    //siempre retorno algo, solo lo que retorne sera publico, lo demas privado
    return {
        NuevoJuego:inicializarJuego
    };
})();



