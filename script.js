//start
function start() {
  var csLeftToWin = 10000;
  var squids = 0;
  var squidsPerClick = 1;
  var computers = 0;
  var computersPerClick = 1;
  var money = 0;
  var moneyPerClick = 1;
  var squidsPerSecond = 0;
  var computersPerSecond = 0;
  var moneyPerSecond = 0;
  var buy1cost = 20;
  var buy2cost= 20;
  var buy3cost = 35;
  var buy4cost = 50;
  window.location.href='play.html'

}

function restart() {
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
  document.getElementById("sbpc").innerHTML = moneyPerClick;
  buy1cost = (spc ** 2) / 5 + 20;
  buy2cost = (spc ** 2) / 5 + 20;
  buy3cost = (spc ** 2) / 5 + 35;
  buy4cost = (spc ** 2) / 3 + 50;
  document.getElementById("buy1cost").innerHTML = buy1cost;
  document.getElementById("buy2cost").innerHTML = buy2cost;
  document.getElementById("buy3cost").innerHTML = buy3cost;
  document.getElementById("buy4cost").innerHTML = buy4cost;
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
function buy1() {
  if (squids >= buy1cost) {
    squids -= buy1cost;
    squidsPerClick += 1;
    buy1cost = Math.floor((x ** 2) / 5 + 20);
    update();
  } else {
    alert("Sorry, you don't have enough squids for More Tentacles, you need at least " + buy1cost + " squids.");
  }
}

function buy2() {
  if (computers >= buy2cost) {
    computers -= buy2cost;
    computersPerClick += 1;
    buy2cost = Math.floor((x ** 2) / 5 + 20);
    update();
  } else {
    alert("Sorry, you don't have enough computers for a Software Update, you need at least " + buy2cost + " computers.");
  }
}

function buy3() {
  if (money >= buy3cost) {
    money -= buy3cost;
    moneyPerClick += 1;
    buy3cost = Math.floor((x ** 2) / 5 + 35)
    update();
  } else {
    alert("Sorry, you don't have enough squid bills for a Salary Increase, you need at least " + buy3cost + " squid bills.");
  }
}

function buy4() {
  if (computingSquids >= buy4cost) {
    computingSquids -= buy4cost;
    squidsPerSecond += 1;
    buy4cost = Math.floor((x ** 2) / 3 + 50)
    update();
  } else {
    alert("Sorry, you don't have enough ComputingSquids for a Tiny Squid, you need at least " + buy4cost + " ComputingSquids.");
  }
}