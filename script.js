//vars
function start() {
  window.location.href='play.html'
}


var csLeftToWin = 10000;
var squids = 0;
var squidsPerClick = 1;
var computers = 0;
var computersPerClick = 1;
var money = 0;
var moneyPerClick = 1;
var computingSquids = 0;
var computingSquidsPerClick = 0;



function restart() {
  
  var csLeftToWin = 10000;
  var squids = 0;
  var squidsPerClick = 1;
  var computers = 0;
  var computersPerClick = 1;
  var money = 0;
  var moneyPerClick = 1;
  var computingSquids = 0;
  var computingSquidsPerClick = 0;
  start();

}

function update() {
  document.getElementById("squids").innerHTML = "Your Squids: " + squids;
  document.getElementById("computers").innerHTML = "Your Computers: " + computers;
  document.getElementById("money").innerHTML = "Your Squid Bills: " + money;
  document.getElementById("CSs").innerHTML = "Your Computing Squids: " + computingSquids;
  document.getElementById("CSsToWin").innerHTML = csLeftToWin - computingSquids;
  csLeftToWin -= computingSquids;
  checkIfWin();
  document.getElementById("cpc").innerHTML = computersPerClick;
  document.getElementById("spc").innerHTML = squidsPerClick;
  document.getElementById("sbpc").innerHTML = squidBillsPerClick;
  
}
//get things per click
function addSquids() {
  squids += squidsPerClick;
  update();
}

function addComputers() {
  computers += computersPerClick;
  update();
}

function getMoney() {
  money += moneyPerClick;
  update();
}

//if win
function checkIfWin() {
  if (csLeftToWin <= 0) {
    window.location.href='win.html';
  } 
}

//Transactioin
function createCS() {
  if (money >= 3 && computers >= 5 && squids >= 5) {
    money -= 3;
    computers -= 5;
    squids -= 5;
    computingSquids += 4;
    update();
  }
}

//shop
function buySquid() {
  if (squids >= 20) {
    squids -= 20
    squidsPerClick += 1;
    update();
  } else {
    alert("Sorry, you don't have enough squids for More Tentacles, you need 20 squids.");
  }
}

function buyComputer() {
  if (computers >= 20) {
    computers -= 20
    computersPerClick += 1;
    update();
  } else {
    alert("Sorry, you don't have enough computers for a Software Update, you need 20 computers.");
  }
}