//Permet de jouer au jeu "Le juste prix"
function justePrix() {
  //Génère un nombre aléatoire entre 1 et 100
  const rightPrice = Math.floor(Math.random() * 100) + 1;
  //Demande le prénom du joueur
  let userName = prompt("Quel est votre prénom ?");
  //Demande un nombre au joueur
  let userChoice = prompt("Choisissez un nombre entre un et 100");
  let count = 1; // On initialise le compteur d'essais à 1

  //Tant que le choix de l'utilisateur n'est pas le bon nombre
  while (userChoice != rightPrice) {
    //Si le choix est plus petit que le nombre à trouver
    if (userChoice < rightPrice) {
      count++; //Incrémentation du compteur d'essais
      userChoice = prompt("C'est plus, quel est votre nouveau choix ?"); //Demande un nouveau nombre à l'utilisateur
    }
    //Si le choix est plus grand que le nombre à trouver
    else {
      count++; //Incrémentation du compteur d'essais
      userChoice = prompt("C'est moins, quel est votre nouveau choix ?"); //Demande de nouveau un nombre à l'utilisateur
    }
  }

  //Affiche un message de victoire avec le nombre d'essais et le nombre à trouver lorsque l'utilisateur gagne
  alert(
    `Bravo, ${userName} vous gagnez en ${count} essais ! Le nombre à trouver était ${rightPrice}`
  );

  //Proposition de rejouer ou non
  replay();
}

//Proposition de rejouer ou non
function replay() {
  //Demande au joueur s'il veut rejouer ou non
  let userReplay = prompt("Voulez-vous rejouer ? oui/non");
  if (userReplay === "oui") {
    //Si le joueur veut rejouer
    return justePrix(); //Relance la fonction justePrix
  } else if (userReplay === "non") {
    //Si le joueur ne veut pas rejouer
    return alert("Dommage, tu aurais pu essayer de faire mieux"); //Affiche un message de fin de partie
  } else {
    //Si le joueur n'a pas choisi "oui" ou "non"
    alert("Choix non valide."); //Affiche un message d'erreur
    return replay(); //Relance la fonction replay
  }
}

//Lance le jeu dès le chargement de la page
justePrix();
