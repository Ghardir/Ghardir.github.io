

document.querySelector("#itemBtn").addEventListener("click", openItemMenu)



let inventory = []



function openItemMenu(){
	let itemList = document.querySelector("#itemList")
	if (itemList.classList.contains("hidden")=== true) {
		itemList.classList.remove("hidden")
	}else{
		itemList.classList.add("hidden")
	}
};




function populateInventory(item, quantity){
	
	itemLi = document.createElement("li");
	itemLi.setAttribute("id", item.name);
	itemLi.classList.add("item-instance");
	item.quantity += quantity;
	itemLiBtn = document.createElement("button");
	let btnId = item.name + "-btn" 
	itemLiBtn.setAttribute("id", btnId)

	
	
		if(inventory.includes(item)!== true  ){
			inventory.push(item)
			document.querySelector("#itemList").append(itemLi)
			document.getElementById(item.name).append(itemLiBtn)
			itemLiBtn.innerHTML = item.name + ": " + item.quantity
			document.getElementById(btnId).addEventListener("click", item.itemFunc)
		}
		if(document.getElementById(item.name).classList.contains("hidden")){
			document.getElementById(item.name).classList.remove("hidden")
		}
		
		

}



class Consumable {
	constructor(name, quantity, effect, price, itemFunc) {
		this.name = name;
		this.quantity = quantity;
		this.effect = effect;
		this.price = price;
		this.itemFunc = itemFunc;
		
	}
}
const antidote = new Consumable (
	"Antidote",
	0,
	"Heals poisoning",
	40,
	function itemFunc(){
		console.log("antidote works")
		openItemMenu();
		checker +=1
		antidote.quantity -= 1;
	}
)


const ether = new Consumable (
	"Ether",
	0,
	"Gives mana",
	85,
	function itemFunc(){
		console.log("ether works")
		openItemMenu();
		checker +=1
		ether.quantity -= 1;
	}
)


const potion = new Consumable (
	"Potion",
	0,
	"Minor heal",
	50,
	function itemFunc() {
		let healPow = 15;
		if (hero.maxHp - hero.currentHp >= healPow){
			hero.currentHp += healPow;
			newInfo.innerHTML = hero.name+ " healed for " + healPow + " HP.";
			infoContainer.append(newInfo);
		}else{
			hero.currentHp = hero.maxHp;
			newInfo.innerHTML = hero.name+ " healed up to maximum.";
			infoContainer.append(newInfo);
		}
		let currentHpProgress = Math.floor(100*hero.currentHp/hero.maxHp);
		document.querySelector(hero.id+"-hp-bar-progress").style.width = currentHpProgress + "%";
		heroHp_p.innerHTML = hero.currentHp + " / " + hero.maxHp;
		openItemMenu();
		checker +=1
		potion.quantity -= 1;

	}
)




