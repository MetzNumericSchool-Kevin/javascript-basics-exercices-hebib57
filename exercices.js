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

let nom_sorcier = "Archibald";
let choix = prompt("Faites un choix entre 1 et 4: ");

switch (parseInt(choix)) {
  case 1:
    console.log("Le nom de la boutique est: " + nom_boutique);
    break;
  case 2:
    console.log("Le nom du sorcier est: " + nom_sorcier);
    break;
  case 3:
    console.log("Le prix d'un potion de soin est de: " + prix_potion);
    break;
  case 4:
    console.log("Le nombre de potions en stock est de: " + nb_potions_stock);
    break;
  default:
    console.log(
      "`​Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`"
    );
}

//Calcul du prix total d'une commande de potion

let quantite_potion = prompt("Entrez une quantité de potion de soin: ");
let prix_total = quantite_potion * prix_potion;
console.log(
  `Prix de ${quantite_potion} potions de soins : ${prix_total} 🪙 mon cher Aventurier. 💸`
);

//Bourse de l'Aventurier 💰

let stock_argent = 15;
console.log("Vérification de la solvabilité de l'aventurier: ");
if (stock_argent >= prix_total) {
  console.log(
    "L'aventurier a assez d'argent pour acheter la quantité demandée"
  );
} else {
  console.log(
    "L'aventurier n'a pas assez d'argent pour acheter la quantité demandée"
  );
}

if (stock_argent - prix_total >= 0 && nb_potions_stock - quantite_potion >= 0) {
  console.log(
    "L'aventurier a assez d'argent et le stock est suffisant pour acheter la quantité de potion voulu"
  );
  nb_potions_stock = nb_potions_stock - quantite_potion;
  console.log(`Il reste ${nb_potions_stock} potions en stock`);
  stock_argent = stock_argent - prix_total;
  console.log(`Il reste ${stock_argent} $ dans sa bourse`);
} else {
  console.log(
    "L'aventurier n'a pas assez d'argent ou le stock est insuffisant pour acheter la quantité de potion voulu"
  );
}

//Liste des potions

let potions = ["coca", "orangina", "sprite"];
console.log(potions);

//Affichage des potions

console.log(`Le nom de la première potion est: ${potions[0]}`);
let derniere_potion = potions[potions.length - 1];
console.log(`Le nom de la dernière potion est: ${derniere_potion}`);

for (let nb = 0; nb < derniere_potion; nb = nb + 1);
console.log(`Nous avons de la: ${potions}`);

//Ajout d'une nouvelle potion

potions.push("oasis");
console.log(`La liste des potions mise à jour est: ${potions}`);

//Finaly, nope.

potions.pop("oasis");
console.log(`La liste des potions de nouveau mise à jour est: ${potions}`);
