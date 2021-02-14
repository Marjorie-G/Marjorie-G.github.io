//Déclaration des variables

let player1 = "X";
let player2 = "O";
let player = "X";
let turnNumber = 1;

let gamesWonPlayer1 = 0;
let gamesWonPlayer2 = 0;
let nobodyWon = 0;

let case1 ;
let case2 ;
let case3 ;
let case4 ;
let case5 ;
let case6 ;
let case7 ;
let case8 ;
let case9 ;

// ----------------- Fonction pour changer de joueur en fonction du tour

function changePlayer() {

    if ((turnNumber % 2) == 0) {
        player = player2;
    }
    else {
        player = player1;
    }
}

//------------------ Fonction pour vérifier que le joueur a gagné ------------

function win() {


    if((case1 == case2 && case2 == case3 && case2 != "") || (case4 == case5 && case5 == case6 && case4 != "") || (case7 == case8 && case8 == case9 && case7 != "") || (case1 == case4 && case4 == case7 && case1 != "") ||
        (case2 == case5 && case5 == case8 && case2 != "") || (case3 == case6 && case6 == case9 && case3 != "") || (case1 == case5 && case5 == case9 && case1 != "") || (case3 == case5 && case5 == case7 && case3 != "")) {
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

//----------------- Fonction pour stocker le nb de parties gagnées ou nulles ---

function storageWin() {
    localStorage.setItem("gamesWonPlayer1", gamesWonPlayer1);
    localStorage.setItem("gamesWonPlayer2", gamesWonPlayer2);
    localStorage.setItem("nobodyWon", nobodyWon);
}

//----------------- Fonction pour réinialiser les scores - on vide le stockage local

function reset() {
    localStorage.clear();
}

//------------------ Fonction de jeu -- Programme principal ---------------------------------------

function play() {

    //On vérifier que le joueur a le droit de joueur sur la case
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

    console.log(case1);

    //On vérifie si on a gagné
    let playerWon = win();

    if (playerWon == false) {

        if(turnNumber > 9)  {

        }
    }
    else {
        if(player == player1) {
            gamesWonPlayer1 += 1;
        }
        else if (player == player2) {
            gamesWonPlayer2 += 1;
        }

        document.write("gagné");

    }

    turnNumber++;
    changePlayer();

}