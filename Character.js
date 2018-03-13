class Character {
	
	constructor()
	{
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
		
		this.appliedProficiencies = [];
		
		this.classe = "";
		
		this.identity = 
		{
			firstName : "Alun",
			lastName  : "Umbra",
			age : "",
			sex : "M",
			height : "",
			weight : "",
			hairColor : "",
			eyesColor : "",
			skinColor : "",
			personalityTraits : "",
			ideals : "Default",
			bonds : "Halflings",
			flaws : ""
		}
		
		this.features = 
		{
			race   : [],
			classe : [],
			background : [],
			feats  : []
		};
		
		this.level = 
		{
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

		this.speed = "";
		
		this.spells = {};
		
		this.skills = 
		{
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
		
		this.hitPoints = "";
		/**
		TODO : 
		this.armorClass = "";
		this.background = "";
		
		this.resistances = [];
		this.immunities = [];
		this.equipment = [];
		**/
	}
	
	/**
	Generates and returns a random character
	let c = Character.getRandom(); works just fine.
	let specificC = Character.getRandom({race : "Half-Orc", class : "Barbarian"}); will create a 
	**/
	static getRandom(param)
	{
		let r = new Character();
		
		r.setRandomAbilities();
		if(param === undefined)
		{
			let rLevel = Math.floor(Math.random() * 19) + 1;
			let rRace = selectRandom(1, raceList);
			let rClass = selectRandom(1, classList);
			r.applyClass(rClass[0], rLevel);
			r.applyRace(rRace);
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
	
	
	/**
	Sets the current object to be the one contained in the JSON data.
	Used in association with <input type="file" />
	**/
	loadFromJSON (json)
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
	
	/**
	Load the content of a JSON file into the current object.
	Inserting <input='file' onchange="function(){c = Character.loadFromFile(this.files);} setup();" /> will set the value of c to the file's character
	**/
	static loadFromFile(file)
	{
		let fr = new FileReader();
		fr.onload = function(event) {
			// The file's text will be printed here
			let J = JSON.parse(event.target.result);
			c = c.loadFromJSON(J);
			setup();
		};
		fr.readAsText(file[0]);
	}
		
	/**
	Sets the current object's ability scores to the one in the array.
	Exemple this.setAbilities([10,10,10,10,10,10]) sets every score to 10;
	**/
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
	
	/**
	Saves the current object as a JSON file.
	Inserting <button onclick="c.saveAsJSON()"> Save </button> will set you up with a save button
	**/
	saveAsJSON()
	{
		saveJSON(this, this.identity.firstName + " " + this.identity.lastName);
	}
	
	/**
	Rolls a d20 and add the skill bonus for the current character's "skill".
	Displays the result as an alert on the page.
	c.rollSkill("Acrobatics"); 
	**/
	rollSkill(skill)
	{
		let rand = Math.floor(random() * 19) + 1;
		let res = rand + this.skills[skill].bonus;
		alert("" + skill + " : (" + rand +") + " + this.skills[skill].bonus + " = " + res);
	}
	
	/**
	Calculates the ability bonus from the current character's "ability" score.
	Returns a number.
	c.getAbilityBonus("Strength"); returns 0 if c.abilities["Strength"] == 10
	**/
	getAbilityBonus (ability)
	{
		return Math.floor((this.abilities[ability] - 10) / 2);
	}
	
	/**
	Calculates the ability bonus from the current character's "ability" score.
	Returns a number.
	c.getAbilityBonus("Strength"); returns 0 if c.abilities["Strength"] == 10
	**/
	setRandomAbilities()
	{
		abilities.forEach(a => 
		{
			let dices = [Math.floor((Math.random()*5))+1,Math.floor((Math.random()*5))+1,Math.floor((Math.random()*5))+1,Math.floor((Math.random()*5))+1];
			dices.splice(dices.indexOf(dices.reduce((a,b) => Math.min(a,b))), 1);
			this.abilities[a] = dices.reduce((pv, cv) => pv+cv, 0);
		})
	}
	
	
	/**
	Sets the Weapons, Armor, Tools & Language proficiencies of a given class to the current character's proficiencies
	c.setProficiencies("Barbarian") will give c.proficiencies new stuff
	TODO : check page 164 PHB to realize proper multiclassing
	**/
	setProficiencies(className)
	{
		// Proficiencies
		if(classProficiencies[className].weapons !== undefined)
			classProficiencies[className].weapons.forEach(p => {if(!(this.proficiencies.weapons.indexOf(p) > -1)){this.proficiencies.weapons.push(p)}});
		
		if(classProficiencies[className].armor !== undefined )
			classProficiencies[className].armor.forEach(p => {if(!(this.proficiencies.armor.indexOf(p) > -1)){armorTypes[p].forEach(a => this.proficiencies.armor.push(a))}});
		
		if(classProficiencies[className].tools !== undefined)
			classProficiencies[className].tools.forEach(p => {if(!(this.proficiencies.tools.indexOf(p) > -1)){this.proficiencies.tools.push(p)}});
		
		if(classProficiencies[className].languages !== undefined)
			classProficiencies[className].languages.forEach(p => {if(!(this.proficiencies.languages.indexOf(p) > -1)){this.proficiencies.languages.push(p)}});
	}
	
	/**
	Sets the class features of a class at a certain level to the current character's feature list
	c.setClassFeatures("Barbarian",1) will give c.features.class new stuff
	**/
	setClassFeatures(className, level)
	{
		// For every level, check every class feature
		for(let lvl = 1; lvl <= level; lvl++)
		{
			classFeatures[className][lvl.toString()].forEach(feature => 
			{
				//Check if the feature evolves over time or not
				classRegexList[className].forEach(i => 
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
	
	/**
	Sets the spells of a class to the current character's feature list
	c.setSpells("Wizard") will add the accessible Wizard spells to the c.spells["Wizard"].known and to c.spells["Wizard"].available.
	TODO : spellslot calculation for Warlocks. Oh, also, make it work.
	**/
	setSpells (className)
	{
		this.spells[className] = {};
		
		// Check what level of spellslots you have
		let spellLevel = 0;
		this.features.classe.forEach( feature => 
		{
			let r = regexPatterns["Spell Slots"].exec(feature);
			if(r !== null && r[0] === className)
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
		if(classSpells[className] !== undefined && spellLevel != 0)
		{
			this.spells[className].available = [];
			this.spells[className].known = [];
			classSpells[className].forEach( spell => 
			{
				if(spell.level[0] <= spellLevel)
				{
					this.spells[className].available.push(spell);
				}
			});
		
			if(className === "Druid" || className === "Cleric" )
			{
				this.spells[className].known = this.spells[className].available;
			}
			else if(className === "Wizard")
			{
				this.spells[className].known = selectRandom(6, this.spells[className].available);
			}
			else 
			{
				this.features.classe.forEach( feature => 
				{
					let r = regexPatterns["Spells"].exec(feature);
					if(r !== null)
					{
						this.spells[className].known = selectRandom(r[2], this.spells[className].available);
					}
				});
			}
		}
	}
	
	/**
	Sets the random skill proficiencies for the given raceName
	c.setSkillProficiencies("Wizard") will add the starting Wizard skill proficiencies
	Will not work if another class has already been picked.
	**/
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
	
	/**
	Sets the skill bonuses according to proficiency and expertise flag
	**/
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
	
	/**
	Adds the given class at the given level for the current character.
	TODO : check page 164 PHB to realize proper multiclassing	
	**/
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
	
	/**
	Replaces the current character's race by given raceName
	**/
	applyRace(raceName)
	{
		if(this.race != "")
		{
			abilities.forEach(a => {if(raceAbilities[this.race].hasOwnProperty(a)){this.abilities[a] -= raceAbilities[this.race][a]}});
		}
		
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
		this.race = raceName;
	}
	
	/**
	Goes through all the race and class features and updates them accordingly.
	**/
	applyLastThings ()
	{
		this.features.spellcasting = [];
		this.features.race.forEach(f => 
		{
			let i = this.features.race.indexOf(f);
			
			if(magicFeatures[f] !== undefined)
			{
				this.features.spellcasting.push(f);
				delete this.features.race[i];
			}
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
			/*Look for spellcasting features*/
			if(magicFeatures[f] !== undefined)
			{
				this.features.spellcasting.push(f);
				delete this.features.classe[i];
			}
			magicRegex.forEach( m =>
			{
				if(regexPatterns[m].exec(f) !== null)
				{
					this.features.spellcasting.push(f);
					delete this.features.classe[i];
				}
			});
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
			if(f == "Primal Champion")
			{
				this.abilities["Strength"] += 4;
				this.abilities["Constitution"] += 4;
				delete this.features.classe[i];
			}
			this.setSkillBonuses();
		});
		
		
	}
}