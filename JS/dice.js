document.querySelector(".btn").addEventListener("click", function(){
  var audio = new Audio("images/audio.mp3");
  audio.play();
var randomNumber1 = Math.ceil((Math.random()*6));
var randomImage1 = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
var randomNumber2 = Math.ceil((Math.random()*6));
var randomImage2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelector(".img2").setAttribute("src",randomImage2);
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML  = " 🚩 Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML  = "  Player 2 Wins! 🚩";
}else if (randomNumber1=== randomNumber2){
  document.querySelector("h1").innerHTML  = "It's a draw 🎌 ";
}});
