//; JAVERS CRIPTS

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
const swaggerButton = document.getElementById('bottone').

	// al click del programma andra a generare dei numeri casuali dovra attivare init rand num gnen e visualizzarli in html su 5 caselle di numeri, dopo di che alla visualizzaione partira il timer di 30 secondi al fiune del 30 secondi dovrannio sparire i numeri e l'utente gli appariranno 5 volte dei prompt di comando nel quale dovranno individuare 1 e controllare se e uin numero o minori di 0 o e parola quindi saraun parse iont se tutto ba bhnbene andra a controllare i prossimi numeri fino a 5 
//
	// alla fine ci sara il check del numero il programma dira tramite alert quianti numeri sono stai indivituati e se tutti i numeri sono stati individuati allora il giocatore a vinto altrimenti perdera mostrando che numeri sono stai individuati, e quanti ne mancavano.
	//



















