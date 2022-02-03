
function updateResources(){
	produceFish();
	produceIronore();
	produceLumber();
	produceCharcoal();
	produceIron();
	produceTools();
	produceCider();
};


class ProductionBuilding {
	constructor(name, production, productionRate, amount, workforce, maxWorkforce, inCoins, inTools, inMaterials, upkeep){
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
		this.inMaterials = inMaterials;
		this.upkeep = upkeep;
		
	}	
	
};

class People {
	constructor(name, amount, food, drink, faith, fun, comunity, workpower) {
		this.name = name;
		this.amount = amount;
		// needs
		this.food = food;
		this.drink = drink;
		this.faith = faith;
		this.fun = fun;
		this.comunity = comunity;
		this.workpower = workpower;
	}
}



// all production buildings


const lumberjack = new ProductionBuilding ("lumberjack", "lumber", 1.5, 0, 0, 0, 50, 2, 0, 0);

const ironMine = new ProductionBuilding ("ironmine", "ironore", 2, 0, 0, 0, 200, 10, 0, 0);
const fisherman = new ProductionBuilding("fisherman", "fish", 2, 0, 0, 0, 100, 2, 3, 15);
const ciderfarm = new ProductionBuilding("ciderfarm", "cider", 1.5, 0, 0, 0, 100, 1, 5, 15)

const charcoalburner = new ProductionBuilding ("charcoalburner", "charcoal", 2, 0, 0, 0, 250, 2, 3, 0);
const ironsmelter = new ProductionBuilding ("ironsmelter", "iron", 2, 0, 0, 0, 600, 5, 2, 0);
const toolmaker = new ProductionBuilding ("toolmaker", "tools", 2, 0, 0, 0, 500, 5, 0.5, 0);

//marketplace
//chapel
//peasants house 1 for 8 peasants
//small werehouse
//small market building

const peasant = new People ("peasant", 0, 1, 1, 1, 1, 1, 1)
console.log(peasant)


// materials and starting conditions
let ironore = 0;
let lumber = 0;
let fish = 0;
let cider = 0;
let charcoal= 0;
let iron = 0;
let tools = 0;
let coins = 20000;
let workers = 100; //not implemented xd






//all buttons


//production building buttons

document.querySelector("#add-worker-fisherman").addEventListener("click", addWorkerFisherman);
document.querySelector("#take-worker-fisherman").addEventListener("click", takeWorkerFisherman);
document.querySelector("#buy-fisherman").addEventListener("click", buyFisherman);

document.querySelector("#add-worker-ciderfarm").addEventListener("click", addWorkerCiderfarm);
document.querySelector("#take-worker-ciderfarm").addEventListener("click", takeWorkerCiderfarm);
document.querySelector("#buy-ciderfarm").addEventListener("click", buyCiderfarm);



document.querySelector("#add-worker-lumberjack").addEventListener("click", addWorkerLumberjack);
document.querySelector("#take-worker-lumberjack").addEventListener("click", takeWorkerLumberjack);
document.querySelector("#buy-lumberjack").addEventListener("click", buyLumberjack);

document.querySelector("#add-worker-ironmine").addEventListener("click", addWorkerIronmine);
document.querySelector("#take-worker-ironmine").addEventListener("click", takeWorkerIronMine);
document.querySelector("#buy-ironmine").addEventListener("click", buyIronMine);



document.querySelector("#add-worker-charcoalburner").addEventListener("click", addWorkerCharcoalburner);
document.querySelector("#take-worker-charcoalburner").addEventListener("click", takeWorkerCharcoalburner);
document.querySelector("#buy-charcoalburner").addEventListener("click", buyCharcoalburner);

document.querySelector("#add-worker-ironsmelter").addEventListener("click", addWorkerIronsmelter);
document.querySelector("#take-worker-ironsmelter").addEventListener("click", takeWorkerIronsmelter);
document.querySelector("#buy-ironsmelter").addEventListener("click", buyIronsmelter);

document.querySelector("#add-worker-toolmaker").addEventListener("click", addWorkerToolmaker);
document.querySelector("#take-worker-toolmaker").addEventListener("click", takeWorkerToolmaker);
document.querySelector("#buy-toolmaker").addEventListener("click", buyToolmaker);


//lumberjacks functions

function buyFisherman (){
	if (coins >= fisherman.inCoins) {
	fisherman.amount += 1;
	coins -= fisherman.inCoins;
	document.querySelector("#fisherman-counter").innerHTML = fisherman.amount;
	document.querySelector("#goldcoins-counter").innerHTML = coins;
	fisherman.maxWorkforce = 2*fisherman.amount;
	document.querySelector("#max-workers-fisherman").innerHTML = fisherman.maxWorkforce;
	}
};

function addWorkerFisherman(){
	if (fisherman.workforce < fisherman.maxWorkforce){
		fisherman.workforce += 1;
		document.querySelector("#fisherman-counter-worker").innerHTML = fisherman.workforce;
	}
};


function takeWorkerFisherman() {
	if (fisherman.workforce == 0) {
	}else{
		fisherman.workforce -= 1;
		document.querySelector("#fisherman-counter-worker").innerHTML = fisherman.workforce;
	}
};

function produceFish() {
	fish += fisherman.productionRate*fisherman.workforce/2;
	let fishermanStr = fish.toString().split(".")
	document.querySelector("#fish-counter").innerHTML = fishermanStr[0]
}


function buyCiderfarm (){
	if (coins >= ciderfarm.inCoins) {
	ciderfarm.amount += 1;
	coins -= ciderfarm.inCoins;
	document.querySelector("#ciderfarm-counter").innerHTML = ciderfarm.amount;
	document.querySelector("#goldcoins-counter").innerHTML = coins;
	ciderfarm.maxWorkforce = 2*ciderfarm.amount;
	document.querySelector("#max-workers-ciderfarm").innerHTML = ciderfarm.maxWorkforce;
	}
};

function addWorkerCiderfarm(){
	if (ciderfarm.workforce < ciderfarm.maxWorkforce){
		ciderfarm.workforce += 1;
		document.querySelector("#ciderfarm-counter-worker").innerHTML = ciderfarm.workforce;
	}
};


function takeWorkerCiderfarm() {
	if (ciderfarm.workforce == 0) {
	}else{
		ciderfarm.workforce -= 1;
		document.querySelector("#ciderfarm-counter-worker").innerHTML = ciderfarm.workforce;
	}
};

function produceCider() {
	cider += ciderfarm.productionRate*ciderfarm.workforce/2;
	let ciderfarmStr = cider.toString().split(".")
	document.querySelector("#cider-counter").innerHTML = ciderfarmStr[0]
}

function buyLumberjack (){
	if (coins >= lumberjack.inCoins) {
	lumberjack.amount += 1;
	coins -= lumberjack.inCoins;
	document.querySelector("#lumberjack-counter").innerHTML = lumberjack.amount;
	document.querySelector("#goldcoins-counter").innerHTML = coins;
	lumberjack.maxWorkforce = 2*lumberjack.amount;
	document.querySelector("#max-workers-lumberjack").innerHTML = lumberjack.maxWorkforce;
	}
};

function addWorkerLumberjack(){
	if (lumberjack.workforce < lumberjack.maxWorkforce){
		lumberjack.workforce += 1;
		document.querySelector("#lumberjack-counter-worker").innerHTML = lumberjack.workforce;
	}
};


function takeWorkerLumberjack() {
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




//ironmine functions

function buyIronMine (){
	if (coins >= ironMine.inCoins) {
		ironMine.amount += 1;
		coins -= ironMine.inCoins;
		document.querySelector("#ironmine-counter").innerHTML = ironMine.amount;
		document.querySelector("#goldcoins-counter").innerHTML = coins;
		ironMine.maxWorkforce = 2*ironMine.amount;
		document.querySelector("#max-workers-ironmine").innerHTML = ironMine.maxWorkforce;
	}

};

function addWorkerIronmine(){
	if (ironMine.workforce < ironMine.maxWorkforce){
		ironMine.workforce += 1;
		document.querySelector("#ironmine-counter-worker").innerHTML = ironMine.workforce;
	}
};
function takeWorkerIronMine() {
	if (ironMine.workforce == 0) {
	}else{
		ironMine.workforce -= 1;
		document.querySelector("#ironmine-counter-worker").innerHTML = ironMine.workforce;
	}
};

function produceIronore() {
	ironore += ironMine.productionRate*ironMine.workforce/2;
	let ironoreStr = ironore.toString().split(".")
	document.querySelector("#ore-counter").innerHTML = ironoreStr[0]
}




// charcoalburner funks// charcoalburner funks


function buyCharcoalburner (){
	if (coins >= charcoalburner.inCoins) {
		charcoalburner.amount += 1;
	coins -= charcoalburner.inCoins;
	document.querySelector("#charcoalburner-counter").innerHTML = charcoalburner.amount;
	document.querySelector("#goldcoins-counter").innerHTML = coins;
	charcoalburner.maxWorkforce = 2*charcoalburner.amount;
	document.querySelector("#max-workers-charcoalburner").innerHTML = charcoalburner.maxWorkforce;
	}
}

function addWorkerCharcoalburner(){
	if (charcoalburner.workforce < charcoalburner.maxWorkforce){
		charcoalburner.workforce += 1;
		document.querySelector("#charcoalburner-counter-worker").innerHTML = charcoalburner.workforce;
	}
}

function takeWorkerCharcoalburner(){
	if (charcoalburner.workforce == 0) {
	}else{
		charcoalburner.workforce -= 1;
		document.querySelector("#charcoalburner-counter-worker").innerHTML = charcoalburner.workforce;
	}
}

function produceCharcoal() {
	if (lumber>charcoalburner.inMaterials*charcoalburner.workforce){
		lumber -= charcoalburner.inMaterials*charcoalburner.productionRate*charcoalburner.workforce/2
		charcoal += charcoalburner.productionRate*charcoalburner.workforce/2;
		let charcoalburnerStr = charcoal.toString().split(".")
		document.querySelector("#charcoal-counter").innerHTML = charcoalburnerStr[0]
	}
}


// ironsmelter// ironsmelter// ironsmelter// ironsmelter// ironsmelter// ironsmelter


function buyIronsmelter (){
	if (coins >= ironsmelter.inCoins) {
		ironsmelter.amount += 1;
	coins -= ironsmelter.inCoins;
	document.querySelector("#ironsmelter-counter").innerHTML = ironsmelter.amount;
	document.querySelector("#goldcoins-counter").innerHTML = coins;
	ironsmelter.maxWorkforce = 2*ironsmelter.amount;
	document.querySelector("#max-workers-ironsmelter").innerHTML = ironsmelter.maxWorkforce;
	}
}

function addWorkerIronsmelter(){
	if (ironsmelter.workforce < ironsmelter.maxWorkforce){
		ironsmelter.workforce += 1;
		document.querySelector("#ironsmelter-counter-worker").innerHTML = ironsmelter.workforce;
	}

}

function takeWorkerIronsmelter(){
	if (ironsmelter.workforce == 0) {
	}else{
		ironsmelter.workforce -= 1;
		document.querySelector("#ironsmelter-counter-worker").innerHTML = ironsmelter.workforce;
	}
}

function produceIron() {
	if (ironore>ironsmelter.inMaterials*ironsmelter.workforce && charcoal>ironsmelter.inMaterials*ironsmelter.workforce){
		ironore -= ironsmelter.inMaterials*ironsmelter.productionRate*ironsmelter.workforce/2
		charcoal -= ironsmelter.inMaterials*ironsmelter.productionRate*ironsmelter.workforce/2
		iron += ironsmelter.productionRate*ironsmelter.workforce/2;
		let ironsmelterStr = iron.toString().split(".")
		document.querySelector("#iron-counter").innerHTML = ironsmelterStr[0]
	}
}



//  toolmaker toolmakerstoolmakerstoolmakerstoolmakerstoolmakerstoolmakerstoolmakers


function buyToolmaker (){
	if (coins >= toolmaker.inCoins) {
		toolmaker.amount += 1;
	coins -= toolmaker.inCoins;
	document.querySelector("#toolmaker-counter").innerHTML = toolmaker.amount;
	document.querySelector("#goldcoins-counter").innerHTML = coins;
	toolmaker.maxWorkforce = 2*toolmaker.amount;
	document.querySelector("#max-workers-toolmaker").innerHTML = toolmaker.maxWorkforce;
	}
}

function addWorkerToolmaker(){
	if (toolmaker.workforce < toolmaker.maxWorkforce){
		toolmaker.workforce += 1;
		document.querySelector("#toolmaker-counter-worker").innerHTML = toolmaker.workforce;
	}
}

function takeWorkerToolmaker(){
	if (toolmaker.workforce == 0) {
	}else{
		toolmaker.workforce -= 1;
		document.querySelector("#toolmaker-counter-worker").innerHTML = toolmaker.workforce;
	}
}

function produceTools() {
	if (iron>toolmaker.inMaterials*toolmaker.workforce){
		iron -= toolmaker.inMaterials*toolmaker.productionRate*toolmaker.workforce/2
		tools += toolmaker.productionRate*toolmaker.workforce/2;
		let toolmakerStr = tools.toString().split(".")
		document.querySelector("#tools-counter").innerHTML = toolmakerStr[0]
	}
}



/// tabs-> need to understand this


function openTier(evt, prodTier) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(prodTier).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();