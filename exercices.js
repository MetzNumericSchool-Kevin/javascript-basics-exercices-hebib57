// const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_boutique = "shop";
let nb_potions_stock = 6;
let prix_potion = 5;
let mag_statut = true;

//Affichage additionnel
if (mag_statut == true) {
  console.log("`Bienvenue dans la boutique shop Aventurier ! 🎉`");
} else {
  console.log(
    "`La boutique shop est fermée, revenez plus tard Aventurier ! 😴`"
  );
}

//Affichage conditionnel avec switch

console.log(
  "​Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔"
);
console.log("1. Le nom de la boutique");
console.log("2. Le nom du Sorcier");
console.log("3. Le prix d'un potion de soin");
console.log("`4. La quantité d'une potion de soin`");

let choix = prompt("Faites un choix entre 1 et 4: ");

switch (parseInt(choix)) {
  case 1:
    console.log(shop);
    break;
  case 2:
    console.log(Archibald);
    break;
  case 3:
    console.log(5);
    break;
  case 4:
    console.log(6);
    break;
  default:
    console.log(
      "`​Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`"
    );
}
