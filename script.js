//vars
function start() {
  window.location.href='play.html'
}

var csLeftToWin = 1000;
var squids = 0;
var squidsPerClick = 1;
var computers = 0;
var computersPerClick = 1;
var money = 0;
var moneyPerClick = 1;
var computingSquids = 0;
var computingSquidsPerClick = 0;
var cps = 0;
var sps = 0;
var sbps = 0;

function restart() {
  var csLeftToWin = 1000;
  var squids = 0;
  var squidsPerClick = 1;
  var computers = 0;
  var computersPerClick = 1;
  var money = 0;
  var moneyPerClick = 1;
  var computingSquids = 0;
  var computingSquidsPerClick = 0;
  var cps = 0;
  var sps = 0;
  var sbps = 0;
  start();
}

function update() {
  document.getElementById("squids").innerHTML = "Your Squids: " + squids;
  document.getElementById("computers").innerHTML = "Your Computers: " + computers;
  document.getElementById("money").innerHTML = "Your Squid Bills: " + money;
  document.getElementById("CSs").innerHTML = "Your Computing Squids: " + computingSquids;
  document.getElementById("cpc").innerHTML = computersPerClick;
  document.getElementById("spc").innerHTML = squidsPerClick;
  document.getElementById("sbpc").innerHTML = squidBillsPerClick;
  
}

function updateS2() {
  squids += sps;
  computers += cps;
  money += sbps;
  update();
}
function updateS() {
 setTimeout(updateS2, 1000);
 document.getElementById("cps").innerHTML = cps;
 document.getElementById("sps").innerHTML = sps;
 document.getElementById("sbps").innerHTML = sbps;
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

//Transaction
function createCS() {
  if (money >= 3 && computers >= 5 && squids >= 5) {
    money -= 3;
    computers -= 5;
    squids -= 5;
    computingSquids += 4;
    document.getElementById("CSsToWin").innerHTML = csLeftToWin - computingSquids;
   csLeftToWin -= computingSquids;
   checkIfWin();
    update();
  }
}

//If win
function checkIfWin() {
  if (csLeftToWin <= 0) {
    window.location.href='win.html';
  } 
}

//Shop
function buyScript(id2, id3, thing, thingPerClick, cost, errMssg) {
  var newThing = thing;
  var newThingPerClick = thingPerClick;
  if (id2 == id3) {
    if (thing >= cost) {
      newThing -= cost;
      newThingPerClick += 1;
    } else {
      alert(errMssg);
    }
  }
  return [newThing, newThingPerClick]
}

function buy(id) {
  //Buys stuff 
  var buy1 = buyScript(id, 1, squids, squidsPerClick, 20, "Sorry! You don't have enough squids.");
  var buy2 = buyScript(id, 2, computers, computersPerClick, 20, "Sorry! You don't have enough money.");
  var buy3 = buyScript(id, 3, money, moneyPerClick, 35, "Sorry! You don't have enough squid bills.");

  //Resets the variables
  squids = buy1[0];
  squidsPerClick = buy1[1];
  computers = buy2[0];
  computersPerClick = buy2[1];
  money = buy3[0];
  moneyPerClick = buy3[1];
  update();
}

function buy2(num) {
  //buys things
  switch(num) {
    case 1:
     if(computingSquids >= 16) {
       computingSquids -= 16;
       squidsPerSecond += 1;
       update();
     } else {
       alert("You need at least 16 ComputingSquids To get tiny squid.");
     }
     break;
    case 2:
     //to do
     break;
    default:
     alert("Unrecognized selection, please try again.");
  }
}