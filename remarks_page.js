
food_eaten = localStorage.getItem("food_eaten");
document.getElementById("food_eaten").innerHTML = "You ate - "+food_eaten;

function logout() 
{
  localStorage.removeItem("user_name");
  window.location.replace("index.html");
}


if(food_eaten=="Protein Rich Food")
{
  food_eaten = localStorage.getItem("Protein Rich Food");
  document.getElementById("Protein Rich Food").innerHTML = "You ate - Protein Rich Food"+food_eaten;
}

if(food_eaten=="Fruits/Vegetable/Salad")
{
  food_eaten = localStorage.getItem("food_eaten");
  document.getElementById("food_eaten").innerHTML = "You ate - Fruits/Vegetable/Salad";
}

if(food_eaten=="Junk Food")
{
  food_eaten = localStorage.getItem("food_eaten");
  document.getElementById("food_eaten").innerHTML = "You ate - Junk Food"+food_eaten;
}

if(food_eaten=="Dessert/Sweets/Choclates")
{
  food_eaten = localStorage.getItem("food_eaten");
  document.getElementById("food_eaten").innerHTML = "You ate - Dessert/Sweets/Choclates"+food_eaten;
}