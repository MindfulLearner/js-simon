// JAVERS CRIPTS

function initRandNumGen() {
    Math.floor((Math.random() * 100) + 1);

    
}

function initTimerTrentaSec(initTempo) {
    let timer = setInterval(function() {
        console.log(initTempo);

        initTempo --;

        if (initTempo < 0) {
            clearInterval(timer);
            timer = null;

// richiamo initHidingNumb che nascondera i numeri

        }
    }, 1000 * 30);
}

function initHidingNumb() {

}

function checkNumb() {

}

// bottone che clicca start fa partire il programma
const swaggerButton








