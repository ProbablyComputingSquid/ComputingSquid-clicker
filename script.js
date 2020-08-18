//vars
var csLeftToWin = 1000000
var squids = 0;
var squidsPerClick = 1;
var computers = 0;
var computersPerClick = 1;
var money = 0;
var moneyPerClick = 1;
var computingSquids = 0;
var computingSquidsPerClick = 0;

//get things per click
function addSquids() {
  squids += squidsPerClick;
  document.getElementById("squids").innerHTML = "Your Squids: " + squids;
}

function addComputers() {
  computers += computersPerClick;
  document.getElementById("computers").innerHTML = "Your Computers: " + computers;
}

function getMoney() {
  money += moneyPerClick;
  document.getElementById("money").innerHTML = "Your Squid Bills: " + money;
}

//if win
function checkIfWin() {
  if csLeftToWin <= {
  window.location.assign = ("https://computingsquid-clicker.computingsquid.repl.co/win.html");
  } else {
    document.getElementById("CSsToWin").innerHTML = ;
  }
}

//Transactioin


function createCS() {
  if (money >= 1 && computers >= 10 && squids >= 10) {
  money -= 5;
  computers -= 5;
  squids -= 5;
  computingSquids += 2;
  document.getElementById("squids").innerHTML = "Your Squids: " + squids;
  document.getElementById("computers").innerHTML = "Your Computers: " + computers;
  document.getElementById("money").innerHTML = "Your Squid Bills: " + money;
  document.getElementById("CSs").innerHTML = "Your Computing Squids: " + computingSquids;
  }
}
