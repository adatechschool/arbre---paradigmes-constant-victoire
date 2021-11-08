// Trouver "nom de méchant" en fonction de l'anniversaire 

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

  let i = birthday.getMonth()
  let j = birthday.getDate() % 10
  return ("The " + m[i] + " " + d[j])
};


// La version compliquée de Constant

function getVillainName(birthday){
  const bDay = birthday.toString().split(' ');
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const listMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const birthdayMonth = bDay[1];
  const birthdayDay = bDay[2];
  const birthdayLastDigit = birthdayDay[birthdayDay.length-1];

  return `The ${m[listMonths.indexOf(birthdayMonth)]} ${d[birthdayLastDigit]}`;
}


// La jolie version de CodeWars : presque celle de Victoire !

function getVillainName(birthday){
  firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
  lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10]
}

