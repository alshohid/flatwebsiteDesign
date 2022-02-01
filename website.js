 

var myaudio = document.querySelector("#ludo-music");
//myaudio.play();
var victory = document.querySelector("#victory-music");
var darw = document.querySelector("#draw-music");

var point1 = document.querySelector(".points1");
var point2 = document.querySelector(".points2");
var count1 = 0,
  count2 = 0;

const play = () => {
  var value = Math.floor(Math.random() * 6 + 1);
  var dice1 = `images/${value}.gif`;
  document.querySelector("#check1").setAttribute("src", dice1);

  var value1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = `images/${value1}.gif`;
  document.querySelector("#check2").setAttribute("src", dice2);

  count1 += value1;
  count2 += value;

  point1.innerHTML = " Total Points: " + count2;
  point2.innerHTML = "Total Points: " + count1;

  if (value < value1) {
    document.querySelector(".ludo").innerHTML = "Player 2 Have Won !";

    victory.play();
  } else if (value > value1) {
    document.querySelector(".ludo").innerHTML = "Player 1 Have Won !";

    victory.play();
  } else {
    document.querySelector(".ludo").innerHTML = "DRAW!";
    darw.play();
  }
};



var sideNav= document.querySelector(".side-nav");
var menuBtn=document.getElementById("menu-btn");


sideNav.style.right="-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right== "-250px")
    {
        sideNav.style.right="0px";
    }
    else{
        sideNav.style.right="-250px";
    }
}