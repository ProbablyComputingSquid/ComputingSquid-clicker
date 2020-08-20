//vars
function start() {
  window.location.href='play.html'
}

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
//Get things per click
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

//Transaction
function createCS() {
  if (money >= 3 && computers >= 5 && squids >= 5) {
    money -= 3;
    computers -= 5;
    squids -= 5;
    computingSquids += 4;
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
  var buy1 = buyScript(id, 1, squids, squidsPerClick, 20, "Sorry! You don't have enough squids.");
  var buy2 = buyScript(id, 2, computers, computersPerClick, 20, "Sorry! You don't have enough money.");
  var buy3 = buyScript(id, 3, money, moneyPerClick, 35, "Sorry! You don't have enough squid bills.");

  squids = buy1[0];
  squidsPerClick = buy1[1];
  computers = buy2[0];
  computersPerClick = buy2[1];
  money = buy3[0];
  moneyPerClick = buy3[1];
  update();
}