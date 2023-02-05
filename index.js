var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var switchKey1 = "images/dice" + randomNumber1 + ".png";

var boxSwitch = document
  .querySelectorAll("img")[0]
  .setAttribute("src", switchKey1);

///////////////////////////////////////////////////// left Box

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var switchKey2 = "images/dice" + randomNumber2 + ".png";

var changeBox = document
  .querySelectorAll("img")[1]
  .setAttribute("src", switchKey2);

//////////////////////////////////////////////////// Right box

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩⭐ Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!! ⭐🚩";
} else {
  document.querySelector("h1").textContent = "🖐️Draw!✋";
}

//////////////////////////////////////////////////// Result Behavoir
