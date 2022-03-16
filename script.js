
class Character {
	constructor(name, charaClass, str, dex, vit, id, imageSrc, learntSkills){
		this.name = name;
		this.charaClass = charaClass;
		this.str = str;
		this.dex = dex;
		this.vit = vit;
		this.id = id;
		this.imageSrc = imageSrc;
		this.maxHp = this.vit *5;
		this.currentHp = this.maxHp;
		this.def = Math.floor(this.vit / 5);
		this.learntSkills = learntSkills;
		
		
		
	}
}

const actionDelay = 250;
//hero
const hero = new Character("Hero", "Wanderer", 14, 14, 13,"#hero", [] );

//enemies

const banditA = new Character("Evil Joe", "Bandit", 12, 12, 12, "#enemy", "image/chara_two.png");
const banditB = new Character("Evil Harry", "Bandit", 12, 13, 11, "#enemy", "image/chara_three.png");
const banditC = new Character("Evil Denny", "Bandit", 13, 11, 12, "#enemy", "image/chara_four.png");
const bossA = new Character("Boss David", "Bandit Chief", 14, 15, 15, "#enemy", "image/chara_five.png");







const heroHp_p = document.querySelector("#hero-hp")
heroHp_p.innerHTML =  hero.currentHp + " / " + hero.maxHp

const enemyHp_p = document.querySelector("#enemy-hp")


document.querySelector("#hero-name").innerHTML = hero.name;
document.querySelector("#attakcBtn").addEventListener("click", basicHeroAttack)
document.querySelector("#runBtn").addEventListener("click", badEndScreen )

const enemyArr = [banditA, banditB, banditC];

function generateEnemy (){
	
	
	let maxEnemyNo = enemyArr.length - 1;
	enemyNo = randomGenerator (0, maxEnemyNo );
	enemyOne = enemyArr[enemyNo];
	enemyHp_p.innerHTML =  enemyOne.currentHp + " / " + enemyOne.maxHp
	document.querySelector("#enemy-name").innerHTML = enemyOne.name;
	document.querySelector("#enemy-portait").src = enemyOne.imageSrc;

	
}


let gameStartMsg = "Welcome on your (short) journey. You will fight countable enemies and suffer..." 

document.querySelector("#game-start-intro").innerHTML = gameStartMsg;

function startBtn(){
	document.querySelector("#game-start").classList.add("hidden")
	document.querySelector("#game-container").classList.remove("hidden")

}


function giveAwards (){
	document.querySelector("#victory-board").classList.remove("hdden");
	let goldGain = document.createElement("li")
	goldGain.setAttribute("id", "goldGain-li")
	goldGain.innerHTML = "10 G"
	document.querySelector("#loot-ul").append(goldGain);
	let itemAward = potion
	let itemAwardQnt = 1
	let itemAwardLi = document.createElement("li")
	itemAwardLi.setAttribute("id", "itemAwardLi-li")
	populateInventory(itemAward, itemAwardQnt)
	itemAwardLi.innerHTML = itemAward.name + " x " + itemAwardQnt
	document.querySelector("#loot-ul").append(itemAwardLi);
	document.querySelector("#attakcBtn").removeEventListener("click", basicHeroAttack)
	
}
let battlerCount = 1;
function closeAwards(){
	
	
	if (battlerCount >= 3){
		enemyOne = bossA
		console.log("boss time")
		document.querySelector("#victory-board").classList.add("hidden");
		document.querySelector("#hide-enemy").classList.remove("hidden");
		document.querySelector("#enemy-portait").classList.remove("rip-animation");
		enemyHp_p.innerHTML =  enemyOne.currentHp + " / " + enemyOne.maxHp
		document.querySelector("#enemy-name").innerHTML = enemyOne.name;
		document.querySelector("#enemy-portait").src = enemyOne.imageSrc;
		document.querySelector("#goldGain-li").remove();
		document.querySelector("#itemAwardLi-li").remove();
		document.querySelector("#attakcBtn").addEventListener("click", basicHeroAttack)
		if (enemyOne.currentHp <=0){
			gameEndScreen ()
		}
		
		
	}else{
	
	generateEnemy()
	
	document.querySelector("#victory-board").classList.add("hidden");
	document.querySelector("#hide-enemy").classList.remove("hidden");
	document.querySelector("#enemy-portait").classList.remove("rip-animation");
	enemyArr.forEach(elm =>{
		enemyOne.currentHp = enemyOne.maxHp
	})
	enemyHp_p.innerHTML =  enemyOne.currentHp + " / " + enemyOne.maxHp
	document.querySelector("#goldGain-li").remove();
	document.querySelector("#itemAwardLi-li").remove();
	battlerCount += 1
	document.querySelector("#attakcBtn").addEventListener("click", basicHeroAttack)
	
	}
	
	
	
	
	
}

let infoContainer = document.querySelector("#battle-info-container")
let newInfo = document.createElement("p")

function randomGenerator (min, max){ 
	let randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNo;
}

function charaHit(chara, min, max){
	let randomNo = randomGenerator(min, max)
	const charaHitValue = chara.dex + randomNo;
	return charaHitValue
}


function charaEvade(charaTwo, min, max){
	let randomNo = randomGenerator(min, max)
	const charaEvadeValue = charaTwo.dex + randomNo;
	return charaEvadeValue
}


function compareHitEvd (chara, charaTwo){
	let charaHitValue = charaHit(chara,4, 8);
	let charaEvadeValue = charaEvade(charaTwo,4, 8);
	if (charaHitValue < charaEvadeValue ){
		newInfo.innerHTML = chara.name + " missed..."
		infoContainer.append(newInfo)
		return false;
	}else{

		return true;
	}
}



function dmgAply (chara, charaTwo, targetHp_p) {
	dmgRoll = randomGenerator(1,6)
	dmgVal = Math.floor((dmgRoll + chara.str)/charaTwo.def);
	newInfo.innerHTML = chara.name + " deal " + dmgVal + " dmg to " + charaTwo.name + " !"
	infoContainer.append(newInfo)
	if (charaTwo.currentHp > dmgVal){
		charaTwo.currentHp -= dmgVal;
		targetHp_p.innerHTML =  charaTwo.currentHp + " / " + charaTwo.maxHp
	}else{
		charaTwo.currentHp = 0;
		document.querySelector(charaTwo.id+"-portait").classList.add("rip-animation")
		targetHp_p.innerHTML = " R.I.P. "
	}
	
}

function basicHeroAttack() {
		
		if (compareHitEvd (hero, enemyOne) === true){
			dmgAply(hero, enemyOne, enemyHp_p)
			
		}else {
		}
		document.querySelector("#hero-portait").classList.add("attack_anim")
		document.querySelector("#attakcBtn").disabled = true ;
		checker +=1;
		
		if(enemyOne.currentHp <= 0) {
			console.log("win win win")
			document.querySelector("#hide-enemy").classList.add("hidden")
			document.querySelector("#victory-board").classList.remove("hidden")
			giveAwards ()
		}

};



function basicEnemyAttack() {

 	if (compareHitEvd (enemyOne, hero) === true){
 		dmgAply(enemyOne, hero, heroHp_p)
	
 	}else {
	}
	
	if (hero.currentHp <= 0){	
		badEndScreen ()
	}
	
	document.querySelector("#enemy-portait").classList.add("attack_anim_enemy")
};

function enemyAction(){
	
	if (baseChecker != checker && enemyOne.currentHp > 0){
		basicEnemyAttack()
		
	}else{
		document.querySelector("#hero-portait").classList.remove("attack_anim")
		document.querySelector("#enemy-portait").classList.remove("attack_anim_enemy")
	}
	
	document.querySelector("#attakcBtn").disabled = false;
}


function badEndScreen () {
	document.querySelector("#closure").classList.remove("hidden")
	document.querySelector("#game-container").classList.add("hidden")
}

function gameEndScreen () {
	document.querySelector("#game-end-screen").classList.remove("hidden")
	document.querySelector("#game-container").classList.add("hidden")
}

function retry(){
	battlerCount = 1
	let endGameSc = document.querySelector("#game-end-screen")
	if (endGameSc.classList.contains("hidden") === true){
		
	}else{
		endGameSc.classList.add("hidden")
	}
	
	infoContainer.append(newInfo);
	hero.currentHp = hero.maxHp;
	document.querySelector("#enemy-hp-bar-progress").style.width = 100 + "%"
	enemyOne.currentHp = enemyOne.maxHp;
	document.querySelector("#closure").classList.add("hidden");
	newInfo.innerHTML = "New battle begins...";
	document.querySelector("#enemy-portait").classList.remove("rip-animation")
	document.querySelector("#hero-portait").classList.remove("rip-animation")
	
	document.querySelector("#hero-hp-bar-progress").style.width = 100 + "%"
	heroHp_p.innerHTML =  hero.currentHp + " / " + hero.maxHp
	enemyHp_p.innerHTML =  enemyOne.currentHp + " / " + enemyOne.maxHp
	document.querySelector("#game-container").classList.remove("hidden")
	inventory.forEach(elm =>{
		elm.quantity = 0
	})
	generateEnemy()
	
}