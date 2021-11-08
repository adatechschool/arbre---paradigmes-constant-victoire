// Trouver "nom de méchant" en fonction de l'anniversaire 

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

  let i = birthday.getMonth()
  let j = birthday.getDate() % 10
  return ("The " + m[i] + " " + d[j])
}
