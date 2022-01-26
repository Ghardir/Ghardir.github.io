
function updateResources(){
	produceIronore();
	produceLumber();
};


class ProductionBuilding {
	constructor(name, production, productionRate, amount, workforce, maxWorkforce, inCoins, inTools, upkeep){
		this.name = name;
		this.production = production;
		this.productionRate = productionRate; //in one minute/ one cycle at 100% efficiency
		this.amount = amount;

		//workers control
		this.workforce = workforce;
		this.maxWorkforce = maxWorkforce;
		//cost
		this.inCoins = inCoins;
		this.inTools = inTools;
		this.upkeep = upkeep;
	}	
};

// all production buildings

const lumberjack = new ProductionBuilding ("Lumberjack", "Lumber", 1.5, 0, 0, 0, 50, 2, 0);
const ironMine = new ProductionBuilding ("Iron mine", "Ironore", 2, 0, 0, 0, 200, 10, 0);

// materials and starting conditions
let ironore = 5;
let lumber = 0;
let charcoal= 0;
let iron = 1000;
let tools = 2000;
let coins = 1500;
let workers = 100; //not implemented xd

document.querySelector("#ore-counter").innerHTML = ironore
document.querySelector("#lumber-counter").innerHTML = lumber;
document.querySelector("#charcoal-counter").innerHTML = charcoal;
document.querySelector("#iron-counter").innerHTML = iron;
document.querySelector("#tools-counter").innerHTML = tools;

//all buttons

document.querySelector("#give-worker-iron-mine").addEventListener("click", addWorker);
document.querySelector("#take-worker-iron-mine").addEventListener("click", takeWorker);
document.querySelector("#buy-ironmine").addEventListener("click", buyIronMine);

document.querySelector("#give-worker-lumberjack").addEventListener("click", addWorker2);
document.querySelector("#take-worker-lumberjack").addEventListener("click", takeWorker2);
document.querySelector("#buy-lumberjack").addEventListener("click", buyLumberjack);


//ironmine functions

function buyIronMine (){
	if (coins >= ironMine.inCoins) {
	ironMine.amount += 1;
	coins -= ironMine.inCoins;
	document.querySelector("#iron-mine-counter").innerHTML = ironMine.amount;
	document.querySelector("#gold-coins-counter").innerHTML = coins;
	ironMine.maxWorkforce = 2*ironMine.amount;
	document.querySelector("#max-workers-iron-mine").innerHTML = ironMine.maxWorkforce;
	}else{

	}
};

function addWorker(){
	if (ironMine.workforce < ironMine.maxWorkforce){
		ironMine.workforce += 1;
		document.querySelector("#iron-mine-counter-worker").innerHTML = ironMine.workforce;
	}else{

	}
};


function takeWorker() {
	if (ironMine.workforce == 0) {
	}else{
		ironMine.workforce -= 1;
		document.querySelector("#iron-mine-counter-worker").innerHTML = ironMine.workforce;
	}
};

function produceIronore() {
	ironore += ironMine.productionRate*ironMine.workforce/2;
	let ironoreStr = ironore.toString().split(".")
	document.querySelector("#ore-counter").innerHTML = ironoreStr[0]
}



//lumberjacks functions



function buyLumberjack (){
	if (coins >= lumberjack.inCoins) {
	lumberjack.amount += 1;
	coins -= lumberjack.inCoins;
	document.querySelector("#lumberjack-counter").innerHTML = lumberjack.amount;
	document.querySelector("#gold-coins-counter").innerHTML = coins;
	lumberjack.maxWorkforce = 2*lumberjack.amount;
	document.querySelector("#max-workers-lumberjack").innerHTML = lumberjack.maxWorkforce;
	}else{

	}
};

function addWorker2(){
	if (lumberjack.workforce < lumberjack.maxWorkforce){
		lumberjack.workforce += 1;
		document.querySelector("#lumberjack-counter-worker").innerHTML = lumberjack.workforce;
	}else{

	}
};


function takeWorker2() {
	if (lumberjack.workforce == 0) {
	}else{
		lumberjack.workforce -= 1;
		document.querySelector("#lumberjack-counter-worker").innerHTML = lumberjack.workforce;
	}
};

function produceLumber() {
	lumber += lumberjack.productionRate*lumberjack.workforce/2;
	let lumberStr = lumber.toString().split(".")
	document.querySelector("#lumber-counter").innerHTML = lumberStr[0]
}







