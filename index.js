//PLAYER 1//
//tilfeldig tall//
let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;


//bytte bilde//
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSourse = "images/" + randomDiceImage;

var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomImageSourse);



//PLAYER 2//
//tilfeldig tall//
let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;


//bytte bilde//
var randomImageSourse2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);


//vinnere//
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }

  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  

//ingen vinner//
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }




