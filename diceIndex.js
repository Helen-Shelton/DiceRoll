// alert("working");

var randomVar0 = Math.floor(Math.random() * 6 + 1); //returns numbers from (1 6)
var randomVar1 = Math.floor(Math.random() * 6 + 1);
// Math.random returns a number between (0 1] (1 not inclusive)
// Normally we could just multiply by 7, but because 0 is not
// defined in this problem anyways, it is better to do this method instead

document.querySelector("img.img1").setAttribute("src","images/dice"+randomVar0+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomVar1+".png");
// could also use:
// document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomVar0+".png");
// document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomVar1+".png");

if (randomVar0 > randomVar1) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!🎉";
}
else if (randomVar0 < randomVar1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🎉";
}
else{
  document.querySelector("h1").innerHTML = "Draw!🎉";
}
