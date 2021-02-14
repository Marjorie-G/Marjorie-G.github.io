//Déclaration des variables

const player1 = "X";
const player2 = "O";
let player = "X";
let turnNumber = 1;

let gamesWonPlayer1;
let gamesWonPlayer2;
let gamesWonNobody;

let playerTurn;
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

//Au chargement de la page

if (localStorage.length === 0) {
    gamesWonPlayer1 = 0;
    gamesWonPlayer2 = 0;
    gamesWonNobody = 0;

    localStorage.setItem("gamesWonPlayer1", gamesWonPlayer1);
    localStorage.setItem("gamesWonPlayer2", gamesWonPlayer2);
    localStorage.setItem("gamesWonNobody", gamesWonNobody);

    displayScore();

}
else {

    gamesWonPlayer1 = parseInt(localStorage.getItem("gamesWonPlayer1"));
    gamesWonPlayer2 = parseInt(localStorage.getItem("gamesWonPlayer2"));
    gamesWonNobody =  parseInt(localStorage.getItem("gamesWonNobody"));

    displayScore();

}

//------------------ Fonction pour afficher les score

function displayScore() {

    player1Win.innerText = `Nombre de parties gagnées par le joueur ${player1} : ${gamesWonPlayer1}`;
    player2Win.innerText= `Nombre de parties gagnées par le joueur ${player2} : ${gamesWonPlayer2}`;
    nobodyWon.innerText = `Nombre de parties nulles : ${gamesWonNobody}`;

}

// ----------------- Fonction pour changer de joueur en fonction du tour

function changePlayer() {

    if ((turnNumber % 2) == 0) {
        player = player2;
        playerTurn = document.getElementById("js-player-turn");
        playerTurn.innerText = `C'est au tour du joueur ${player} de jouer`;
    }
    else {
        player = player1;
        playerTurn = document.getElementById("js-player-turn");
        playerTurn.innerText = `C'est au tour du joueur ${player} de jouer`;
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
    //ou si le nombre de tours est supérieur > 9
    if (playerWon === true || turnNumber > 9) {
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
            localStorage.setItem("gamesWonPlayer1", gamesWonPlayer1);
        }
        else if (player === player2) {
            gamesWonPlayer2 += 1 ;
            localStorage.setItem("gamesWonPlayer2", gamesWonPlayer2);
        }

        displayScore();

    }
    else if (turnNumber === 9) {
        gamesWonNobody += 1;
        localStorage.setItem("gamesWonNobody", gamesWonNobody);
        nobodyWon.innerText = `Nombre de parties nulles : ${gamesWonNobody}`;
    }

    turnNumber++;
    changePlayer();

}



