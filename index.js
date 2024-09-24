let randomnum1 = Math.floor(Math.random() * 6) + 1;
let randomdiceimg1 = "images/dice" + randomnum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg1);

let randomnum2 = Math.floor(Math.random() * 6) + 1;
let randomdiceimg2 = "images/dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomdiceimg2 )

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomnum1 < randomnum2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}
