const stellaList = document.querySelectorAll(".stella");
for (let stella of stellaList)
    stella.addEventListener("click", aggiungiPreferito);

let conta = 0;

const descr = document.querySelectorAll(".descrizione");
for (d of descr)
    d.addEventListener("click", estendiDescrizione);

let input = document.querySelector("#ricerca");
input.addEventListener("input", ricercaCorso);

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function aggiungiPreferito() {
    const padreStella = event.currentTarget.parentNode;
    const nome_corso = padreStella.dataset.nome;

    event.currentTarget.querySelector("img").src = "stella_piena.png";
    event.currentTarget.removeEventListener("click", aggiungiPreferito);
    event.currentTarget.addEventListener("click", rimuoviPreferito);

    let box = document.getElementById('preferiti');

    let new_corso = document.createElement('div');
    new_corso.classList.add('corso');
    new_corso.classList.add('selezionato');
    box.appendChild(new_corso);

    let corso = document.querySelector('.selezionato');

    let div_titolo = document.createElement('div');
    div_titolo.textContent = COSTANTI[nome_corso].titolo;
    corso.appendChild(div_titolo);

    let div_pic = document.createElement('img');
    div_pic.src = COSTANTI[nome_corso].immagine;
    corso.appendChild(div_pic);

    conta++;
    if (conta == 1)
        document.querySelector('#textP').classList.remove('hidden');

    new_corso.classList.remove('selezionato');
    corso.setAttribute("nome", nome_corso);
}


function rimuoviPreferito() {
    const padre = event.currentTarget.parentNode;
    const n_corso = padre.dataset.nome;

    event.currentTarget.querySelector("img").src = "stella_vuota.png";
    event.currentTarget.addEventListener("click", aggiungiPreferito);
    event.currentTarget.removeEventListener("click", rimuoviPreferito);

    let listaCorsi = document.querySelectorAll('#preferiti .corso');

    for (let corsi of listaCorsi) {
        if (n_corso == corsi.getAttribute("nome")) {
            document.getElementById('preferiti').removeChild(corsi);
            conta--;
        }
        if (!conta)
            document.querySelector('#textP').classList.add('hidden');
    }
}

function estendiDescrizione() {
    const titolo_corso = event.currentTarget.parentNode.dataset.nome;
    event.currentTarget.textContent = COSTANTI[titolo_corso].descrizione;
    event.currentTarget.classList.remove("button");
    event.currentTarget.addEventListener("click", comprimiDescrizione);
    event.currentTarget.removeEventListener("click", estendiDescrizione);
}

function comprimiDescrizione() {
    const titolo_corso = event.currentTarget.parentNode.dataset.nome;
    event.currentTarget.textContent = "Clicca per maggiori informazioni";
    event.currentTarget.classList.add("button");
    event.currentTarget.removeEventListener("click", comprimiDescrizione);
    event.currentTarget.addEventListener("click", estendiDescrizione);
}

function ricercaCorso() {
    let testo_minuscolo = document.getElementById("ricerca").value;
    let testo = testo_minuscolo.toUpperCase();
    let corsiList = document.querySelectorAll(".corso");
    console.log("La dimensione della lista di corsi è ----> " + corsiList.length);

    for (let i = 0; i < corsiList.length; i++) {
        if (corsiList[i].dataset.nome.indexOf(testo) === -1) {
            corsiList[i].classList.add('hidden');
        } else
        if (corsiList[i].classList.contains('hidden'))
            corsiList[i].classList.remove('hidden');
    }
}


const COSTANTI = {
    'PUGILATO': {
        titolo: "PUGILATO",
        immagine: 'pugilato.jpg',
        descrizione: "L’allenamento comprende un veloce riscaldamento  a cui seguono esercizi mirati alo sviluppo di coordinazione, forza, velocità e resistenza. Si passa poi alle tecniche e tattiche specifiche, che comprendono la tecnica pugilistica, la scelta di tempo e delle distanze. Il contatto tra gli atleti avviene sempre  in sicurezza.",
    },
    'WORKOUT': {
        titolo: "WORKOUT",
        immagine: 'workout.jpg',
        descrizione: "Il Total Body workout è un tipo di allenamento in cui si praticano esercizi che coinvolgono tutto il corpo. L’allenamento è composto da un mix di esercizi: statici, dinamici, di equilibrio funzionale, forza e definizione muscolare. Nel workout si usano grandi e piccoli attrezzi fitness, e macchine cardio fitness. ",
    },
    'AEROBICA': {
        titolo: "AEROBICA",
        immagine: 'aerobica.jpg',
        descrizione: "Si tratta di ginnastica a corpo libero con elementi coreografici a ritmo di musica, il cui obiettivo è l’allenamento delle funzioni cardiovascolari e respiratorie, la tonificazione e il consumo calorico. La diversità delle tecniche usate, così come l’impiego di attrezzi (step, cavigliere, manubri, ecc.) permette ai partecipanti di diversificare l'allenamento cardiovascolare rendendolo vario e stimolante allo stesso tempo.",
    },

    'KARATE': {
        titolo: "KARATE",
        immagine: 'karate.jpg',
        descrizione: "Al pari di altre arti marziali, il karate, è uno sport completo che coinvolge tutti i muscoli e le articolazioni del corpo. Per questa ragione è uno sport consigliato allo stesso modo per bambini, adolescenti e adulti, ai quali è offerta la possibilità di elevarsi, all'interno di questa disciplina, attraverso sette gradi culminanti nella cintura nera.",
    },
    'YOGA': {
        titolo: "YOGA",
        immagine: 'yoga.jpg',
        descrizione: "Lo yoga ha diversi benefici: il corpo viene tonificato, reso flessibile e forte, ne giovano articolazioni, muscoli, organi interni, migliora l’elasticità della colonna vertebrale; la mente che diventa più calma, aperta e ricettiva, siamo più rilassati, migliora la qualità del sonno, del riposo e la concentrazione; il respiro viene migliorato perchè si impara a respirare correttamente e a fondo, usando tutta la propria capacità respiratoria, questo porta ad una migliore ossigenazione del sangue, con conseguenze positive su tutto il corpo e sulla mente",
    },
    'SPINNING': {
        titolo: "SPINNING",
        immagine: 'spinning.jpg',
        descrizione: "Una pedalata di gruppo su una cyclette particolare (detta bike da indoor) e sotto la guida attenta di un istruttore, che usa una base musicale per impostare il lavoro",
    }
}