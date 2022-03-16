

document.querySelector("#skillBtn").addEventListener("click", openSkillMenu)


function openSkillMenu(){
	let skillList = document.querySelector("#skillList")
	if (skillList.classList.contains("hidden")=== true) {
		skillList.classList.remove("hidden")
	}else{
		skillList.classList.add("hidden")
	}
};


class Skill {
	constructor(name, effect, target, duration, skillFunc){
		this.name = name;
		this.effect = effect;
		this.target = target;
		this.duration = duration; // in number of turns so for instance 1 <-one turn(this turn)
		this.skillFunc = skillFunc;
		
	}
};

const firstAid = new Skill(
	"First Aid",
	"Heals small amount of HP",
	"self",
	1,
	function skillFunc(chara) {
		let healPow = 10;
		if (chara.maxHp - chara.currentHp >= healPow){
		
			chara.currentHp += healPow;
		
			newInfo.innerHTML = chara.name+ " healed for " + healPow + " HP.";
			infoContainer.append(newInfo);
		}else{
			chara.currentHp = chara.maxHp;
		
			newInfo.innerHTML = chara.name+ " healed up to maximum.";
			infoContainer.append(newInfo);
		}
		let currentHpProgress = Math.floor(100*chara.currentHp/chara.maxHp);
		document.querySelector(chara.id+"-hp-bar-progress").style.width = currentHpProgress + "%";
		heroHp_p.innerHTML = hero.currentHp + " / " + hero.maxHp;
		openSkillMenu();
		checker +=1
		

	}
 );


 const defend = new Skill (
	"Defend",
	"Rises one's defence ",
	"self",
	1,
	function skillFunc(chara) {
		let tempDefVal = 1;
		chara.def += tempDefVal;

		newInfo.innerHTML = chara.name + " defends.";
		infoContainer.append(newInfo);
		openSkillMenu()
		checker +=1
	}
 );


const prepare = new Skill (
	"Prepare",
	"Rises one's power",
	"self",
	1,
	function skillFunc(chara) {
		let tempStrVal = 2;
		chara.str += tempStrVal;
		newInfo.innerHTML = chara.name + " prepares to attack.";
		infoContainer.append(newInfo);
		openSkillMenu()
		checker +=1
	}
 );
  
