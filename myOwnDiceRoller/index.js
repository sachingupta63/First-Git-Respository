
var randomNumber1=Math.floor(6*Math.random())+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.floor(6*Math.random())+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
var total=randomNumber1+randomNumber2;
document.querySelector(".dice1").innerHTML=randomNumber1;
document.querySelector(".dice2").innerHTML=randomNumber2;
document.querySelector(".total").innerHTML="Total : "+total;
