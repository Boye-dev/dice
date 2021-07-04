var randomNumber1=Math.floor(Math.random()*6+1);
const image1=document.querySelectorAll("img")[0];
if(randomNumber1===1){
  image1.setAttribute("src","images/dice1.png");
}else if(randomNumber1===2){
  image1.setAttribute("src","images/dice2.png");
}else if(randomNumber1===3){
  image1.setAttribute("src","images/dice3.png");
}else if(randomNumber1===4){
  image1.setAttribute("src","images/dice4.png");
}else if(randomNumber1===5){
  image1.setAttribute("src","images/dice5.png");
}else if(randomNumber1===6){
  image1.setAttribute("src","images/dice6.png");
}
var randomNumber2=Math.floor(Math.random()*6+1);
const image2=document.querySelectorAll("img")[1];
if(randomNumber2===1){
  image2.setAttribute("src","images/dice1.png");
}else if(randomNumber2===2){
  image2.setAttribute("src","images/dice2.png");
}else if(randomNumber2===3){
  image2.setAttribute("src","images/dice3.png");
}else if(randomNumber2===4){
  image2.setAttribute("src","images/dice4.png");
}else if(randomNumber2===5){
  image2.setAttribute("src","images/dice5.png");
}else if(randomNumber2===6){
  image2.setAttribute("src","images/dice6.png");
}

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerText=("Player 1 Wins\nRefresh");
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerText=("Player 2 Wins\nRefresh");
}else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerText=("Draw\nRefresh");
}
