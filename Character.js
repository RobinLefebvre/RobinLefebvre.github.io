//Object.keys(abilities).length = 6;

class Character {
	constructor(){
		this.abilities = 
		{
			"Strength" 		: 10,
			"Dexterity" 	: 10,
			"Constitution" 	: 10,
			"Intelligence" 	: 10,
			"Wisdom"		: 10,
			"Charisma" 		: 10
		};
		this.actions = 
		{
			full : ["Grapple", "Shove", "Dash", "Disengage", "Dodge", "Escape Grapple", "Help", "Use Object", "Equip/Unequip Shield", "Hide", "Search", "Ready", "Improvise"],
			bonus : ["Offhand Attack"],
			reaction : ["Opportunity Attack"],
			free : ["Command / Talk", "Switch Weapon", "Environment Interaction"]
		};
		this.classe = "";
		
		this.identity = 
		{
			firstName : "Alun",
			lastName  : "Umbra",
		
			age : "38",
			sex : "M",
			height : "1m 81",
			weight : "83 kg",
			
			hairColor : "Black",
			eyesColor : "Green",
			skinColor : "Cafey'O'Ley",
			
			personalityTraits : "Aventureux, fait preuve de compassion, malin, digne de confiance, agile, sneaky",
			ideals : "Default",
			bonds : "Halflings",
			flaws : "Fumeur de pipe, gourmand, têtu, distrait, très curieux, booze. Un peu fainéant et trop ambitieux par moments!"
		}
		this.features = 
		{
			race   : [],
			classe : [],
			background : [],
			feats  : []
		};
		
		this.hitPoints = "";
		
		this.level = {
			experience : 0,
			level : 0,
			proficiencyBonus : 2,
		};
		
		this.proficiencies = 
		{
			languages : [],
			weapons : [],
			armor : [],
			tools : []
		};
		
		this.race = "";
		this.armorClass = "";
		this.speed = "";
		
		this.spells = {};
		
		this.background = "";
		
		this.skills = {
		  "Acrobatics": 		{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Dexterity" },
		  "Animal Handling": 	{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Wisdom" },
		  "Arcana": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Intelligence" },
		  "Athletics":			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Strength" },
		  "Deception": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Charisma" },
		  "History": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Intelligence" },
		  "Insight" : 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Wisdom" },
		  "Intimidation": 		{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Charisma" },
		  "Investigation": 		{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Intelligence" },
		  "Medicine":			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Wisdom" },
		  "Nature": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Intelligence" },
		  "Perception": 		{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Wisdom" },
		  "Performance": 		{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Charisma" },
		  "Persuasion": 		{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Charisma" },
		  "Religion": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Intelligence" },
		  "Sleight Of Hand": 	{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Dexterity" },
		  "Stealth": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Dexterity" },
		  "Survival": 			{ "isProficient": false, "isExpert": false, "bonus": 0, "relatedAbility": "Wisdom" }
		};
		
		this.appliedProficiencies = 
		[
		
		];
		this.equipment = [];
	}
		
	setAbilities (array)
	{
		this.abilities["Strength"] = array[0];
		this.abilities["Dexterity"] = array[1];	
		this.abilities["Constitution"] = array[2];
		this.abilities["Intelligence"] = array[3];
		this.abilities["Wisdom"] = array[4];
		this.abilities["Charisma"] = array[5];
		this.setSkillBonuses();
	}
	
	load (json)
	{
		this.abilities = json.abilities;
		this.actions = json.actions;
		this.classe = json.classe;
		this.identity = json.identity;
		this.features = json.features;
		this.hitPoints = json.hitPoints;
		this.level = json.level;
		this.proficiencies = json.proficiencies;
		this.race = json.race;
		this.armorClass = json.armorClass;
		this.speed = json.speed;
		this.spells = json.spells;
		this.background = json.background;
		this.skills = json.skills;
		this.appliedProficiencies = json.appliedProficiencies;
		this.equipment = json.equipment;
	}
	
	rollSkill(skill)
	{
		let rand = Math.floor(random() * 19) + 1;
		let res = rand + this.skills[skill].bonus;
		console.log("" + skill + " : (" + rand +") + " + this.skills[skill].bonus + " = " + res);
	}
	
	getAbilityBonus (ability)
	{
		return Math.floor((this.abilities[ability] - 10) / 2);
	}
	setRandomAbilities()
	{
		abilities.forEach(a => 
		{
			let dices = [Math.floor((Math.random()*5))+1,Math.floor((Math.random()*5))+1,Math.floor((Math.random()*5))+1,Math.floor((Math.random()*5))+1];
			dices.splice(dices.indexOf(dices.reduce((a,b) => Math.min(a,b))), 1);
			this.abilities[a] = dices.reduce((pv, cv) => pv+cv, 0);
		})
	}
	
	static getRandom(param)
	{
		let r = new Character();
		
		r.setRandomAbilities();
		if(param === undefined)
		{
			let rLevel = Math.floor(Math.random() * 19) + 1;
			let rRace = selectRandom(1, raceList);
			let rClass = selectRandom(1, classList);
			r.applyRace(rRace[0]);
			r.applyClass(rClass[0], rLevel);	
		}
		else
		{
			r.applyRace(param.race);
			r.applyClass(param.classe.c, param.classe.level);
		}
		r.identity.firstName = selectRandom(1,raceNames[r.race]);
		r.identity.lastName = selectRandom(1,raceNames[r.race]);
		r.applyLastThings();
		return r;
	}
	
	setProficiencies(className)
	{
		// Proficiencies
		if(classProficiencies[className].weapons !== undefined)
			classProficiencies[className].weapons.forEach(p => {if(!(this.proficiencies.weapons.indexOf(p) > -1)){this.proficiencies.weapons.push(p)}});
		
		if(classProficiencies[className].armor !== undefined )
			classProficiencies[className].armor.forEach(p => {if(!(this.proficiencies.armor.indexOf(p) > -1)){this.proficiencies.armor.push(p)}});
		
		if(classProficiencies[className].tools !== undefined)
			classProficiencies[className].tools.forEach(p => {if(!(this.proficiencies.tools.indexOf(p) > -1)){this.proficiencies.tools.push(p)}});
		
		if(classProficiencies[className].languages !== undefined)
			classProficiencies[className].languages.forEach(p => {if(!(this.proficiencies.languages.indexOf(p) > -1)){this.proficiencies.languages.push(p)}});
	}
	
	getProficiencies()
	{
	}
	
	setClassFeatures(className, level)
	{
		// For every level, check every class feature
		for(let lvl = 1; lvl <= level; lvl++)
		{
			classFeatures[className][lvl.toString()].forEach(feature => 
			{
				//Check if the feature evolves over time or not
				reg[className].forEach(i => 
				{
					if(regexPatterns[i].exec(feature) !== null)
					{
						// If the feature evolves over time, check if we already have it
						this.features.classe.forEach(current => 
						{
							if(regexPatterns[i].exec(current) !== null)
								// If we have it, remove the old version
								this.features.classe.splice(this.features.classe.indexOf(current),1);
						})
					}
				})
				// Push the feature
				this.features.classe.push(feature)
			});
		}
	}
	
	setSpells (className)
	{
		this.spells[className] = [];
		
		// Check what level of spellslots you have
		let spellLevel = 0;
		this.features.classe.forEach( feature => 
		{
			let r = regexPatterns["Spell Slots"].exec(feature);
			if(r !== null)
			{
				for(let i = 1; i < r.length - 2; i++)
				{
					if(r[i] === "0")
					{
						spellLevel = i-1;
						break;
					}
				}
			}
		});
		// List available spells
		if(classSpells[className] !== undefined)
		{
			this.spells[className].available = [];
			classSpells[className].forEach( spell => 
			{
				if(spell.level[0] <= spellLevel)
				{
					this.spells[className].available.push(spell);
				}
			});
		}
		
		this.features.classe.forEach( feature => 
		{
			let r = regexPatterns["Spells"].exec(feature);
			if(r !== null)
			{
				selectRandom(r[2], this.spells[className].available);
			}
		});
		
	}
	
	setSkillProficiencies(className)
	{
		// Skill proficiencies
		let list = clone(classSkills[className]);
		let arr = [];
		for(let i = 0; i < list[0]; i++)
		{
			let rand = Math.floor(random() * (Object.keys(list).length -1)) + 1;
			if(this.skills[list[rand]].isProficient == true)
			{
				i--;
			}
			else
			{
				this.skills[list[rand]].isProficient = true
				arr.push(list[rand]);
			}
			list.splice(rand, 1);
		}
		let pr = {name : className + " starting", chosen : arr};
		this.appliedProficiencies.push(pr);
	}
	
	setSkillBonuses ()
	{
		abilities.forEach( a => 
		{
			skillsByAbility[a].forEach( s => 
			{
				let bonus = this.getAbilityBonus(a);
				if(this.skills[s].isProficient)
					bonus += this.level.proficiencyBonus;
				if(this.skills[s].isExpert)
					bonus += this.level.proficiencyBonus;
				
				this.skills[s].bonus = bonus;
			})
		});
	}
	
	applyClass(className, level)
	{
		if(this.classe !== "")
			this.classe += " / " + className + "(" + level +")";
		else 					
			this.classe += className + "(" + level +")";
		
		// Level management
		this.level.level += level;
		this.level.experience = expLevel[this.level.level - 1].xp;
		this.level.proficiencyBonus = expLevel[this.level.level - 1].prof;
		
		// Hit points 
		if(this.hitPoints !== "")
			this.hitPoints += "+" + level + "d" + classHitPoints[className];
		else 
			this.hitPoints += level + "d" + classHitPoints[className];
		
		this.setProficiencies(className);
		this.setClassFeatures(className, level);
		
		if(this.appliedProficiencies.length == 0)
			this.setSkillProficiencies(className);

		this.setSkillBonuses();
		this.setSpells(className);
	}
	
	applyRace(raceName)
	{
		this.race = raceName;
		this.speed = raceSpeeds[raceName][0];
		
		// Apply ability score
		if(raceAbilities[raceName] !== undefined)
			abilities.forEach(a => {if(raceAbilities[raceName].hasOwnProperty(a)){this.abilities[a] += raceAbilities[raceName][a]}});
		
		// Proficiencies
		raceProficiencies[raceName].weapons.forEach( p => 
		{	if(this.proficiencies.weapons.indexOf(p) === -1){ this.proficiencies.weapons.push(p) }	});
		
		raceProficiencies[raceName].armor.forEach( p => 
		{	if(this.proficiencies.armor.indexOf(p) === -1){ this.proficiencies.armor.push(p) }	});
		
		raceProficiencies[raceName].tools.forEach( p => 
		{	if(this.proficiencies.tools.indexOf(p) === -1){ this.proficiencies.tools.push(p) }	});
		
		raceProficiencies[raceName].languages.forEach( p => 
		{	if(this.proficiencies.languages.indexOf(p) === -1){ this.proficiencies.languages.push(p) }	});
		
		// Features 
		raceFeatures[raceName].forEach( f => 
		{ 
			if(skills.indexOf(f) > -1) { this.skills[f].isProficient = true } // Skill proficiencies
			if(this.features.race.indexOf(f) === -1) { this.features.race.push(f) }	
		});
		this.setSkillBonuses();
	}
	
	applyLastThings ()
	{
		this.features.race.forEach(f => 
		{
			let i = this.features.race.indexOf(f);
			if(f == "One Extra Language")
			{
				let unknownLanguages = [];
				languages.forEach(l => {if(this.proficiencies.languages.indexOf(l) === -1){ unknownLanguages.push(l)}});
				let choice = selectRandom(1,unknownLanguages)
				this.proficiencies.languages.push(choice);
				this.appliedProficiencies.push({name : f, chosen : choice});
				delete this.features.race[i];
			}
			if(f == "Two Skill Proficiencies")
			{
				let unknownSkills = [];
				skills.forEach( s => {if(! this.skills[s].isProficient){unknownSkills.push(s)}});
				let choice = selectRandom(2, unknownSkills)
				choice.forEach(s => this.skills[s].isProficient = true );
				this.appliedProficiencies.push({name : f, chosen : choice});
				delete this.features.race[i];
			}
			if(f == "+1 Ability Score (2)")
			{
				let choice = selectRandom(2, abilities);
				choice.forEach(a => this.abilities[a] += 1);
				this.appliedProficiencies.push({name : f, chosen : choice});
				delete this.features.race[i];
			}
		});
		this.features.classe.forEach(f => 
		{
			let i = this.features.classe.indexOf(f);
			if(f == "Expertise")
			{
				let knownSkills = [];
				skills.forEach(s => {if(this.skills[s].isProficient && !(this.skills[s].isExpert) ){ knownSkills.push(s)}});
				let choice = selectRandom(2,knownSkills);
				choice.forEach(s => {if(this.skills[s] !== undefined){this.skills[s].isExpert = true}});
				this.appliedProficiencies.push({name : f, chosen : choice});
				delete this.features.classe[i];
			}
			if(f == "Ability Score Improvement")
			{
				let choice = [];
				if(random()*100 > 50)	
				{
					choice = selectRandom(2, abilities);
					choice.forEach(a => this.abilities[a] += 1 );
				}
				else
				{
					choice = selectRandom(1, abilities);
					choice.forEach(a => this.abilities[a] += 2 );
				}
				this.appliedProficiencies.push({name : f, chosen : choice});
				delete this.features.classe[i];
			}
			this.setSkillBonuses();
		});
		
		
	}
}