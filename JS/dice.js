var i=0;
var j=0;
var k=0;
var m=0;
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
  var player1 = ++j;
  document.querySelectorAll("h2")[0].innerHTML = "Player 1 Won = " + player1;
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML  = "  Player 2 Wins! 🚩";
  var player2 = ++k;
  document.querySelectorAll("h2")[3].innerHTML = "Player 2 Won = " + player2;
}else if (randomNumber1=== randomNumber2){
  document.querySelector("h1").innerHTML  = "It's a draw 🎌 ";
  var draw = ++m;
  document.querySelectorAll("h2")[2].innerHTML = "Draw = " + draw;

}
var count = ++i;
document.querySelectorAll("h2")[1].innerHTML = "Total Dice Roll = " + count;
});
