/* for player 1*/
var randomNumber1 = (Math.random() * 6);
randomNumber1 = Math.floor(randomNumber1) + 1; //1-6

var randomDiceImg = "./images/"+"dice"+randomNumber1 +".png"; // ./images/dice1.png - ./images/dice6.png 

//set the src attribute of image 1
document.querySelector(".img1").setAttribute("src",randomDiceImg);

/* for player 2*/

var randomNumber2 = (Math.random() * 6);
randomNumber2 = Math.floor(randomNumber2) + 1; //1-6

var randomDiceImg2 = "./images/"+"dice"+randomNumber2 +".png"; // ./images/dice1.png - ./images/dice6.png 

//set the src attribute of image 1
document.querySelector(".img2").setAttribute("src",randomDiceImg2);

//Display a Winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🏆Player 1 wins!";
}

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🏆";
}

else {
    if(randomNumber1 === randomNumber2)
    document.querySelector("h1").innerHTML="Draw!";
}