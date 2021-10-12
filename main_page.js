
player_name = localStorage.getItem("player_name");
document.getElementById("player_name").innerHTML = " Welcome " + player_name;

function addMessage()
{
  var food = document.getElementsByName('fav_food');
  localStorage.setItem("food",food);
  window.location = "remarks_page.html";
}

