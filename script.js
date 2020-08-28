//vars
var started = false;
var csLeftToWin = 1000;
var squids = 0;
var spc = 1;
var computers = 0;
var cpc = 1;
var money = 0;
var sbpc = 1;
var computingSquids = 0;
var cps = 0;
var sps = 0;
var sbps = 0;
  
function start() {
  window.location.href='play.html';
}

function restart() {
  var csLeftToWin = 1000;
  var squids = 0;
  var spc = 1;
  var computers = 0;
  var cpc = 1;
  var money = 0;
  var sbpc = 1;
  var computingSquids = 0;
  var cps = 0;
  var sps = 0;
  var sbps = 0;
  start();
}
//local storage
if(typeof(Storage) !== "undefined") {
  if(started === "false") {
  var saveData = {"squids" : squids, "computers" : computers, "money" : money, "computingSquids" : computingSquids, "spc" : spc, "cpc" : cpc, "sbpc" : sbpc, "sps" : sps, "cps" : cps, "sbps" : sbps, "csLeftToWin" : csLeftToWin};
  for (i = 0; i <= Object.keys(saveData).length, i++) {
    localStorage.setItem( , 0);
  }
   localStorage.setItem("squids" , 0);
   localStorage.setItem("spc" , "1");
   localStorage.setItem("sps" , "1")
   localStorage.setItem("computers" , "0");
   localStorage.setItem("cpc" , "1");
   localStorage.setItem("cps" , "0");
   localStorage.setItem("money" , "0");
   localStorage.setItem("sbpc" , "1");
   localStorage.setItem("sbps" , "0");
   localStorage.setItem("computingSquids" , "0");
   localStorage.setItem("csLeftToWin" , "1000");
   started = true;
  } else if(started ==="true") {
    localStorage.setItem("squids" , squids);
    localStorage.setItem("spc" , spc);
    localStorage.setItem("sps" , sps);
    localStorage.setItem("computer" , computers);
    localStorage.setItem("cpc" , cpc);
    localStorage.setItem("cps" , cps);
    localStorage.setItem("money" , money);
    localStorage.setItem("sbpc" , sbpc);
    localStorage.setItem("sbps" , sbps);
    localStorage.setItem("computingSquids" , computingSquids);
    localStorage.setItem("csLeftToWin", csLeftToWin);
} else {
  alert("Local storage is unavaliabe. Please enable it, update your browser, or use a different browser like firefox. If you're already using firefox but older, then update it. LOL");
  alert("do not try to play the game. it will mess it up.");
}
function update() {
  document.getElementById("squids").innerHTML = "Your Squids: " + localStorage.squids;
  document.getElementById("computers").innerHTML = "Your Computers: " + localStorage.computers;
  document.getElementById("money").innerHTML = "Your Squid Bills: " + money;
  document.getElementById("CSs").innerHTML = "Your Computing Squids: " + computingSquids;
  document.getElementById("cpc").innerHTML = cpc;
  document.getElementById("spc").innerHTML = spc;
  document.getElementById("sbpc").innerHTML = sbpc;
  csLeftToWin = 1000 - computingSquids;
  document.getElementById("CSsToWin").innerHTML = csLeftToWin;
}

function updateV2() {
  squids += sps;
  computers += cps;
  money += sbps;
  document.getElementById("cps").innerHTML = cps;
  document.getElementById("sps").innerHTML = sps;
  document.getElementById("sbps").innerHTML = sbps;
  update();
}

//get things per click
function addSquids() {
  squids += spc;
  update();
}

function addComputers() {
  localStorage.computers += cpc;
  update();
}

function getMoney() {
  money += sbpc;
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
  if (money >= 3 && localStorage.computers >= 5 && squids >= 5) {
    money -= 3;
    localStorage.computers -= 5;
    squids -= 5;
    computingSquids += 4;
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
function buyScript(id2, id3, thing, thingPerClick, cost, increase,errMssg) {
  var newThing = thing;
  var newThingPerClick = thingPerClick;
  if (id2 == id3) {
    if (thing >= cost) {
      newThing -= cost;
      newThingPerClick += increase;
    } else {
     console.log(errMssg);
    }
  }
  return [newThing, newThingPerClick]
}

function buy(id) {
  //Buys stuff 
  var buy1 = buyScript(id, 1, squids, spc, 20, 1,"Sorry! You don't have enough squids.");
  var buy2 = buyScript(id, 2, computers, cpc, 20, 1,"Sorry! You don't have enough money.");
  var buy3 = buyScript(id, 3, money, sbpc, 35, 1,"Sorry! You don't have enough squid bills.");
  var buy4 = buyScript(id, 4, squids, sps, 60, 5,"Sorry You don't have enough squids.");

  //Resets the variables
  squids = buy1[0];
  spc = buy1[1];
  computers = buy2[0];
  cpc = buy2[1];
  money = buy3[0];
  sbpc = buy3[1];
  squids = buy4[0];
  spc = buy4[1];
  update();
}

function buy2(letter) {
  //buys things
  var buyA = buyScript(id, 1, computingSquids, sps, 24, 1,"Sorry! You don't have enough computingSquids.");
  var buyB = buyScript(id, 2, computingSquids, cps, 24, 1,"Sorry! You don't have enough computingSquids.");
  var buyC = buyScript(id, 3, computingSquids, sbps, 35, 1,"Sorry! You don't have enough computingSquids.");

  computingSquids = buyA[0];
  sps = buyA[1];
  computingSquids = buyB[0]
  cps = buyB[1];
  computingSquids = buyC[0]
  sbps = buyC[1];
}

//update seconds
setInterval(updateV2, 1000);
