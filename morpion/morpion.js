//Déclaration des variables

const player1 = "X";
const player2 = "O";
let player = "X";
let turnNumber = 1;

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

    storageScore();
    displayScore();

}
else {

    gamesWonPlayer1 = parseInt(localStorage.getItem("gamesWonPlayer1"));
    gamesWonPlayer2 = parseInt(localStorage.getItem("gamesWonPlayer2"));
    gamesWonNobody =  parseInt(localStorage.getItem("gamesWonNobody"));

    displayScore();

}

//------------------ Fonction pour stocker les scores

function storageScore() {

    localStorage.setItem("gamesWonPlayer1", gamesWonPlayer1);
    localStorage.setItem("gamesWonPlayer2", gamesWonPlayer2);
    localStorage.setItem("gamesWonNobody", gamesWonNobody);
}

//------------------ Fonction pour afficher les scores

function displayScore() {

    player1Win.innerText = `Nombre de parties gagnées par le joueur ${player1} : ${gamesWonPlayer1}`;
    player2Win.innerText= `Nombre de parties gagnées par le joueur ${player2} : ${gamesWonPlayer2}`;
    nobodyWon.innerText = `Nombre de parties nulles : ${gamesWonNobody}`;

}

//------------------- Fonction pour afficher le tour du joueur

function displayPlayersTurn() {
    playerTurn.innerText = `C'est au tour du joueur ${player} de jouer`;
}

// ----------------- Fonction pour changer de joueur en fonction du tour

function changePlayer() {

    if ((turnNumber % 2) == 0) {
        player = player2;
        displayPlayersTurn();
    }
    else {
        player = player1;
        displayPlayersTurn();
    }
}

//------------------ Fonction pour vérifier que le joueur a gagné ------------

function win() {


    if((case1 === case2 && case2 === case3 && case2 !== "") || (case4 === case5 && case5 === case6 && case4 !== "") || (case7 === case8 && case8 === case9 && case7 !== "") || (case1 === case4 && case4 === case7 && case1 !== "") ||
        (case2 === case5 && case5 === case8 && case2 !== "") || (case3 === case6 && case6 === case9 && case3 !== "") || (case1 === case5 && case5 === case9 && case1 !== "") || (case3 === case5 && case5 === case7 && case3 !== "")) {
        return true
    }
    else {
        return false
    }
}

//----------------- Fonction pour rejouer/réinialiser ----------------------

function playAgain() {
    history.go();
}

//----------------- Fonction pour réinialiser les scores - on vide le stockage local

function reset() {
    localStorage.clear();
    playAgain();
}

//------------------ Fonction de jeu -- Programme principal ---------------------------------------

function play() {

    //On empêche la partie de se poursuivre si le joueur précédent a gagné
    if (playerWon === true) {
        return;
    }

    //On vérifie que le joueur a le droit de joueur sur la case
    let h4 = document.getElementById("js-case-not-ok");

    if (event.target.innerText != "" ) {
        h4.innerText = "Veuillez choisir une autre case !";
        return;
    }
    else {
        event.target.innerText = player;
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
            gamesWonPlayer1 = gamesWonPlayer1 + 1 ;
        }
        else if (player === player2) {
            gamesWonPlayer2 += 1 ;
        }
    }
    else if (turnNumber === 9) {
        gamesWonNobody += 1;
    }

    storageScore();
    displayScore();
    turnNumber++;
    
    if (playerWon === true) {
        playerTurn.innerText = `Le ${player} a gagné !`;
    }
    else if (playerWon === false && turnNumber === 10) {
        playerTurn.innerText = `Egalité ! Partie nulle`;
    }
    else {
        changePlayer();
    }





}

//---------- Affichage du message si la partie est terminé



