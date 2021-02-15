//Déclaration des variables
let numberParty ;
let turnNumber = 1;
const player1 = "X";
const player2 = "O";

let player ;

let gamesWonPlayer1;
let gamesWonPlayer2;
let gamesWonNobody;

let playerWon;

let case1 ;
let case2 ;
let case3 ;
let case4 ;
let case5 ;
let case6 ;
let case7 ;
let case8 ;
let case9 ;

let player1Win = document.getElementById("js-player1-win");
let player2Win = document.getElementById("js-player2-win");
let nobodyWon = document.getElementById("js-nobody-win");
let playerTurn = document.getElementById("js-player-turn");


//Au chargement de la page pour l'affichage des scores

if (localStorage.length === 0) {

    gamesWonPlayer1 = 0;
    gamesWonPlayer2 = 0;
    gamesWonNobody = 0;
    numberParty = 1;
    storageScore();
    displayScore();
}
else {

    gamesWonPlayer1 = parseInt(localStorage.getItem("gamesWonPlayer1"));
    gamesWonPlayer2 = parseInt(localStorage.getItem("gamesWonPlayer2"));
    gamesWonNobody =  parseInt(localStorage.getItem("gamesWonNobody"));
    numberParty = parseInt(localStorage.getItem("numberParty"));
    displayScore();
}

//Pour changer et afficher le joueur en début de partie
changePlayer();
displayPlayersTurn();

//------------------ F - Stocker les scores --------------------

function storageScore() {

    localStorage.setItem("gamesWonPlayer1", gamesWonPlayer1);
    localStorage.setItem("gamesWonPlayer2", gamesWonPlayer2);
    localStorage.setItem("gamesWonNobody", gamesWonNobody);
    localStorage.setItem("numberParty", numberParty);
}

//------------------ F- Afficher les scores -------------------

function displayScore() {

    player1Win.innerText = `Nombre de parties gagnées par le joueur ${player1} : ${gamesWonPlayer1}`;
    player2Win.innerText= `Nombre de parties gagnées par le joueur ${player2} : ${gamesWonPlayer2}`;
    nobodyWon.innerText = `Nombre de parties nulles : ${gamesWonNobody}`;
}

//------------------- F - Afficher le tour du joueur -------------

function displayPlayersTurn() {
    playerTurn.innerText = `C'est au tour du joueur ${player} de jouer`;
}

// ----------------- F - Changer de joueur en fonction du tour -----------

function changePlayer() {

    if ((numberParty % 2) === 0) {

        if ((turnNumber % 2) === 0) {
            player = player2;
        }
        else {
            player = player1;
        }

    }
    else {

        if ((turnNumber % 2) === 0) {
            player = player1;
        }
        else {
            player = player2;
        }
    }

}

//------------------ F - Vérifier que le joueur a gagné ------------

function win() {

    if((case1 === case2 && case2 === case3 && case2 !== "") || (case4 === case5 && case5 === case6 && case4 !== "") || (case7 === case8 && case8 === case9 && case7 !== "") || (case1 === case4 && case4 === case7 && case1 !== "") ||
        (case2 === case5 && case5 === case8 && case2 !== "") || (case3 === case6 && case6 === case9 && case3 !== "") || (case1 === case5 && case5 === case9 && case1 !== "") || (case3 === case5 && case5 === case7 && case3 !== "")) {
        return true
    }
    else {
        return false
    }
}

// ---------------- F - Affichage du bouton rejouer --------

function displayButton() {
    let playAgain = document.getElementById("js-play-again");
    playAgain.className = "";
}

//----------------- F - Rejouer -----------------------------

function playAgain() {
    history.go();
}

//----------------- F - Réinialiser les scores - on vide le stockage local

function reset() {
    localStorage.clear();
    playAgain();
}

//------------------ F de jeu -- Programme principal ---------------------------------------

function play() {

    console.log(numberParty);

    //On empêche la partie de se poursuivre si le joueur précédent a gagné
    if (playerWon === true || (playerWon === false & turnNumber === 10)) {
        return;
    }

    //On vérifie que le joueur a le droit de joueur sur la case
    let h4 = document.getElementById("js-case-not-ok");

    if (event.target.innerText !== "" ) {
        h4.innerText = "Veuillez choisir une autre case !";
        return;
    }
    else {
        if(player === player1) {
            event.target.style.color = 'red';
        }
        else {
            event.target.style.color = 'green';
        }
        event.target.innerText = `${player}`;
        h4.innerText = "";
    }

    //On récupère le contenu du tableau
    case1 = document.getElementById("case1").innerText;
    case2 = document.getElementById("case2").innerText;
    case3 = document.getElementById("case3").innerText;
    case4 = document.getElementById("case4").innerText;
    case5 = document.getElementById("case5").innerText;
    case6 = document.getElementById("case6").innerText;
    case7 = document.getElementById("case7").innerText;
    case8 = document.getElementById("case8").innerText;
    case9 = document.getElementById("case9").innerText;

    //On vérifie si on a gagné
    playerWon = win();

    if (playerWon === true) {

        if(player === player1) {
            gamesWonPlayer1 += 1 ;
        }
        else if (player === player2) {
            gamesWonPlayer2 += 1 ;
        }

        displayButton();
        playerTurn.innerText = `${player} a gagné !`;
        numberParty++;

    }
    else if (playerWon === false && turnNumber === 9) {
        gamesWonNobody += 1;
        playerTurn.innerText = `Egalité ! Partie nulle`;
        displayButton();
        turnNumber++;
        numberParty++;
    }
    else {
        turnNumber++;
        changePlayer();
        displayPlayersTurn();
    }

    storageScore();
    displayScore();
}


