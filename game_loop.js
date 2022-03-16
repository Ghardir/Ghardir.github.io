

let checker = 0;
let baseChecker = checker;


let lastUpdate = Date.now();
let myInterval = setInterval(tick, 500);


generateEnemy()
function tick() {
    let now = Date.now();
    let dt = now - lastUpdate;
	
    lastUpdate = now;
gameUpdate ()
}

function gameUpdate () {

let heroCurrentHpProgress = Math.floor(100*hero.currentHp/hero.maxHp)
let enemyCurrentHpProgress = Math.floor(100*enemyOne.currentHp/enemyOne.maxHp)
document.querySelector("#hero-hp-bar-progress").style.width = heroCurrentHpProgress + "%";
document.querySelector("#enemy-hp-bar-progress").style.width = enemyCurrentHpProgress + "%";

enemyAction()
baseChecker = checker;

checkcheck ()

}


// loop it powinno ogarnac ktore itemy istnieja i na jej podstawie sprawdza sie stan inventory. nie tak, ze mam wypisane checkInventory() od kazdego jednego itemu

function checkcheck (){
	inventory.forEach(elm =>{
		checkInventory (elm)
	})
}

function checkInventory (item){
		
			let  emptyItem = document.getElementById(item.name)
		
			
			if (item.quantity <= 0 && emptyItem != null){
				emptyItem.classList.add("hidden")
				
				
				
			}else{
				if (emptyItem !=null){
				document.getElementById(item.name + "-btn" ).innerHTML = item.name + ": " + item.quantity;
				}
			}
		}

function removeClass() {
	if (document.querySelector("#hero-portait").classList.contains("attack_anim")){
		document.querySelector("#hero-portait").classList.remove("attack_anim")
	}
}


