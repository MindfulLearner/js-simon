//; JAVERS CRIPTS

function initRandNumGen() {
    return Math.floor((Math.random() * 100) + 1);
}

function initTimerTrentaSec() {
    let initTempo = 3;
    let tempoHtml = document.querySelector(`.tempoCasa`); 
        tempoHtml.innerHTML = initTempo + "secondi";
    let timer = setInterval(function() {
        initTempo --;
        console.log(initTempo);
        if (initTempo <= 0) {
            clearInterval(timer);
            timer = null;
            // dovra cancellare svuotare le celle swag
            initHidingNumb();
            // richiamo initHidingNumb che nascondera i numeri
        }
        tempoHtml.innerHTML = initTempo + "secondi";
    }, 1000);
}
function initHidingNumb() {
    for (let i = 1; i <= 5; i++) {
        let valore =  document.querySelector(`.swag${i}`);    
        valore.innerHTML = "indovina" ;
    }
    console.log(array);
    setTimeout(checkNumb, 0);
}

function checkNumb() {
    let indovinati = 0;
    let arrayIndovinati = [];
    for (let i = 1; i <= 5; i++) {
        let num = prompt(`swag${i} num da indovinare`);
        if(array.includes(num)) {
            indovinati++;
            arrayIndovinati.push(num);
        }
    }
    console.log(indovinati, arrayIndovinati);

    if (indovinati == 5) {
        let winner = document.querySelector(".winner");
        winner.innerHTML = "WWWWWWINEEER SWAGEGER";
        console.log("you winner");
    } else {
        let winner = document.querySelector(".loser");
        winner.innerHTML = "LOVERLOSER!!!!";
        console.log("you loser");
    }
}

let array = [];

// bottone che clicca start fa partire il programma
const swaggerButton = document.querySelector('button');
swaggerButton.addEventListener('click', function(){
    array = [];
    console.log('entrato in click');
    for (let i = 1; i <= 5; i++) {
        let valore =  document.querySelector(`.swag${i}`);    
        console.log('valore');
        valore.innerHTML = initRandNumGen();
        array.push(valore.innerHTML); 
    }
    console.log(array);
    initTimerTrentaSec()
});





// alla fine ci sara il check del numero il programma dira tramite alert quianti numeri sono stai indivituati e se tutti i numeri sono stati individuati allora il giocatore a vinto altrimenti perdera mostrando che numeri sono stai individuati, e quanti ne mancavano.
    //



















