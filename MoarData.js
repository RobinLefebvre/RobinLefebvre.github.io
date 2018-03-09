const classList = 
[ 
	"Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard" 
];

const classSkills = 
{
	"Barbarian" : 	[ 2, "Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival" ],
	"Bard" : 		[ 3, "Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight Of Hand", "Stealth", "Survival"],
	"Cleric" : 		[ 2, "History", "Insight", "Medicine", "Persuasion", "Religion" ],
	"Druid" : 		[ 2, "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival" ],
	"Fighter" : 	[ 2, "Acrobatics", "Animal Handling", "Athletics", "History", "Intimidation", "Perception" ],
	"Monk" : 		[ 2,"Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth" ],
	"Paladin" : 	[ 2, "Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
	"Ranger" : 		[ 3, "Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival" ],
	"Rogue" : 		[ 4, "Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight Of Hand", "Stealth"],
	"Sorcerer" :	[ 2, "Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
	"Warlock" : 	[ 2, "Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
	"Wizard" :		[ 2, "Arcana", "History", "Insight", "Investigation", "Medicine", "Religion" ]
}

const classHitPoints = 
{
	"Barbarian" : 12,
	"Bard" : 8,
	"Cleric" : 8,
	"Druid" : 8,
	"Fighter" : 10,
	"Monk" : 8,
	"Paladin" : 10,
	"Ranger" : 10,
	"Rogue" : 8,
	"Sorcerer" : 6,  
	"Warlock" : 8,
	"Wizard" : 6
}

const classProficiencies = 
{
	"Barbarian" : 
	{
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Battleaxe", 
					"Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", 
					"Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow"],
		armor : ["Unarmored", "Light", "Medium", "Shield"]
	},
	"Bard" : 
	{
		weapons : ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Hand Crossbow", 
					"Longsword", "Rapier", "Shortsword"],
		armor : ["Unarmored", "Light"],
		tools : ["Three Musical Instruments"]
	},
  "Cleric" : 
  {
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling" ],
		armor : [ "Unarmored", "Light", "Medium", "Shield" ]  
	},
  "Druid" : 
	{
		weapons : ["Club","Dagger","Dart","Javelin","Mace","Quarterstaff","Scimitar","Sickle","Sling","Spear"],
		armor : ["Unarmored","Light","Medium","Shield"],
		tools : ["Herbalism Kit"],
		languages : ["Druidic"]
	},
	"Fighter" : 
  {
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Battleaxe", 
					"Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick",
					"Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow"],
		armor : ["Unarmored", "Light", "Medium", "Heavy", "Shield"],
	},
	"Monk" : 
	{
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Shortsword" ],
		armor : [ "Unarmored"],
		tools : [ "One Artisan's Tool", "One musical instrument" ]
	},
	"Paladin" : 
	{
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Battleaxe", 
					"Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", 
					"Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow"],
		armor : [ "Unarmored", "Light", "Medium", "Heavy", "Shield" ]  
	},
	"Ranger" : 
	{
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Battleaxe", 
					"Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", 
					"Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow" ],
		armor : ["Unarmored", "Light", "Medium", "Shield" ]
	},
	"Rogue" : 
	{
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", 
					"Shortbow", "Sling", "Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
		armor : ["Unarmored", "Light"],
		languages :["Thieves' Cant"],
		tools : ["Thieves' Tools"]
	},
  "Sorcerer" : 
  {
		weapons : [ "Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow" ],
		armor : [ "Unarmored" ]
	},
	"Warlock" : 
  {
		weapons : [ "Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling"],
		armor : [ "Unarmored", "Light" ],
		tools : [ "Three Musical Instruments"]
	},
  "Wizard" : 
	{
		weapons : [ "Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow" ],
		armor : [ "Unarmored" ]
	}
};

const classFeatures = 
{
	"Barbarian" : 
	{	
		"1" : ["Rage : 2", "Rage Bonus : 2", "Unarmored Defense Barbarian"],
		"2" : ["Rage : 2", "Rage Bonus : 2", "Reckless Attack", "Danger Sense"],
		"3" : ["Rage : 3", "Rage Bonus : 2", "Primal Path Feature"],
		"4" : ["Rage : 3", "Rage Bonus : 2", "Ability Score Improvement"],
		"5" : ["Rage : 3", "Rage Bonus : 2", "Extra Attack", "Fast Movement"],
		"6" : ["Rage : 4", "Rage Bonus : 2", "Primal Path Feature"],
		"7" : ["Rage : 4", "Rage Bonus : 2", "Feral Instinct"],
		"8" : ["Rage : 4", "Rage Bonus : 2", "Ability Score Improvement"],
		"9" : ["Rage : 4", "Rage Bonus : 3", "Brutal Critical : 1"],
		"10" : ["Rage : 5","Rage Bonus : 3", "Primal Path Feature"],
		"11" : ["Rage : 5","Rage Bonus : 3", "Relentless Rage"],
		"12" : ["Rage : 5","Rage Bonus : 3", "Ability Score Improvement"],
		"13" : ["Rage : 5","Rage Bonus : 3", "Brutal Critical : 2"],
		"14" : ["Rage : 5","Rage Bonus : 3", "Primal Path Feature"],
		"15" : ["Rage : 5","Rage Bonus : 3", "Persistant Rage"],
		"16" : ["Rage : 5","Rage Bonus : 4", "Ability Score Improvement"],
		"17" : ["Rage : 6","Rage Bonus : 4", "Brutal Critical : 3"],
		"18" : ["Rage : 6","Rage Bonus : 4", "Indomitable Might"],
		"19" : ["Rage : 6","Rage Bonus : 4", "Ability Score Improvement"],
		"20" : ["Unlimited Rage","Rage Bonus : 4", "Primal Champion"]
	},
	"Bard" : 
	{	
		"1" : ["Bard(2,0,0,0,0,0,0,0,0)", "Spells : 4", "Cantrips : 2", "Bardic Inspiration : 6"],
		"2" : ["Bard(3,0,0,0,0,0,0,0,0)", "Spells : 5", "Cantrips : 2", "Jack Of All Trades", "Song Of Rest : 6"],
		"3" : ["Bard(4,2,0,0,0,0,0,0,0)", "Spells : 6", "Cantrips : 2", "Bard College Feature", "Expertise"],
		"4" : ["Bard(4,3,0,0,0,0,0,0,0)", "Spells : 7", "Cantrips : 3", "Ability Score Improvement",], 
		"5" : ["Bard(4,3,2,0,0,0,0,0,0)", "Spells : 8", "Cantrips : 3", "Bardic Inspiration : 8", "Font Of Inspiration",],
		"6" : ["Bard(4,3,3,0,0,0,0,0,0)", "Spells : 9", "Cantrips : 3", "Countercharm", "Bard College Feature"],
		"7" : ["Bard(4,3,3,1,0,0,0,0,0)", "Spells : 10", "Cantrips : 3" ],
		"8" : ["Bard(4,3,3,2,0,0,0,0,0)", "Spells : 11", "Cantrips : 3", "Ability Score Improvement"],
		"9" : ["Bard(4,3,3,3,1,0,0,0,0)", "Spells : 12", "Cantrips : 3", "Song Of Rest : 8"],
		"10" : ["Bard(4,3,3,3,2,0,0,0,0)", "Spells : 14", "Cantrips : 4", "Bardic Inspiration : 10", "Expertise", "Magical Secrets"],
		"11" : ["Bard(4,3,3,3,2,1,0,0,0)", "Spells : 15", "Cantrips : 4" ],
		"12" : ["Bard(4,3,3,3,2,1,0,0,0)", "Spells : 15", "Cantrips : 4", "Ability Score Improvement"],
		"13" : ["Bard(4,3,3,3,2,1,1,0,0)", "Spells : 16", "Cantrips : 4", "Song Of Rest : 10"],
		"14" : ["Bard(4,3,3,3,2,1,1,0,0)", "Spells : 18", "Cantrips : 4", "Magical Secrets", "Bard College Feature"],
		"15" : ["Bard(4,3,3,3,2,1,1,1,0)", "Spells : 19", "Cantrips : 4", "Bardic Inspiration : 12"],
		"16" : ["Bard(4,3,3,3,2,1,1,1,0)", "Spells : 19", "Cantrips : 4", "Ability Score Improvement"],
		"17" : ["Bard(4,3,3,3,3,1,1,1,1)", "Spells : 20", "Cantrips : 4", "Song Of Rest : 12"],
		"18" : ["Bard(4,3,3,3,3,1,1,1,1)", "Spells : 22", "Cantrips : 4", "Magical Secrets" ],
		"19" : ["Bard(4,3,3,3,3,2,1,1,1)", "Spells : 22", "Cantrips : 4", "Ability Score Improvement"],
		"20" : ["Bard(4,3,3,3,3,2,2,1,1)", "Spells : 22", "Cantrips : 4", "Superior Inspiration"]
	},
	"Cleric" : 
	{
		"1" : ["Cleric(2,0,0,0,0,0,0,0,0)", "Cantrips : 3", "Divine Domain" ],
		"2" : ["Cleric(3,0,0,0,0,0,0,0,0)", "Cantrips : 3", "Channel Divinity : 1", "Divine Domain Feature" ],
		"3" : ["Cleric(4,2,0,0,0,0,0,0,0)", "Cantrips : 3" ],
		"4" : ["Cleric(4,3,0,0,0,0,0,0,0)", "Cantrips : 4", "Ability Score Improvement"],
		"5" : ["Cleric(4,3,2,0,0,0,0,0,0)", "Cantrips : 4", "Destroy Undead : 1/2" ],
		"6" : ["Cleric(4,3,3,0,0,0,0,0,0)", "Cantrips : 4", "Channel Divinity : 2", "Divine Domain Feature" ],
		"7" : ["Cleric(4,3,3,1,0,0,0,0,0)", "Cantrips : 4" ],
		"8" : ["Cleric(4,3,3,2,0,0,0,0,0)", "Cantrips : 4","Ability Score Improvement", "Destroy Undead : 1", "Divine Domain Feature" ],
		"9" : ["Cleric(4,3,3,3,1,0,0,0,0)", "Cantrips : 4" ],
		"10" : ["Cleric(4,3,3,3,2,0,0,0,0)", "Cantrips : 5", "Divine Intervention" ],
		"11" : ["Cleric(4,3,3,3,2,1,0,0,0)", "Cantrips : 5", "Destroy Undead : 2"],
		"12" : ["Cleric(4,3,3,3,2,1,0,0,0)", "Cantrips : 5", "Ability Score Improvement" ],
		"13" : ["Cleric(4,3,3,3,2,1,1,0,0)", "Cantrips : 5" ],
		"14" : ["Cleric(4,3,3,3,2,1,1,0,0)", "Cantrips : 5", "Destroy Undead : 3" ],
		"15" : ["Cleric(4,3,3,3,2,1,1,1,0)", "Cantrips : 5" ],
		"16" : ["Cleric(4,3,3,3,2,1,1,1,0)", "Cantrips : 5", "Ability Score Improvement" ],
		"17" : ["Cleric(4,3,3,3,3,1,1,1,1)", "Cantrips : 5", "Destroy Undead : 4", "Divine Domain Feature" ],
		"18" : ["Cleric(4,3,3,3,3,1,1,1,1)", "Cantrips : 5", "Channel Divinity : 3" ],
		"19" : ["Cleric(4,3,3,3,3,2,1,1,1)", "Cantrips : 5", "Ability Score Improvement" ],
		"20" : ["Cleric(4,3,3,3,3,2,2,1,1)", "Cantrips : 5", "Divine Intervention Improvement" ]
	},
	"Druid" : 
	{		
		"1" : ["Druid(2,0,0,0,0,0,0,0,0)", "Cantrips : 3" ],
		"2" : ["Druid(3,0,0,0,0,0,0,0,0)", "Cantrips : 3", "Wild Shape", "Druid Circle Feature" ],
		"3" : ["Druid(4,2,0,0,0,0,0,0,0)", "Cantrips : 3" ],
		"4" : ["Druid(4,3,0,0,0,0,0,0,0)", "Cantrips : 3", "Ability Score Improvement", "Wild Shape Improvement" ],
		"5" : ["Druid(4,3,2,0,0,0,0,0,0)", "Cantrips : 3" ],
		"6" : ["Druid(4,3,3,0,0,0,0,0,0)", "Cantrips : 3", "Druid Circle Feature" ],
		"7" : ["Druid(4,3,3,1,0,0,0,0,0)", "Cantrips : 3" ],
		"8" : ["Druid(4,3,3,2,0,0,0,0,0)", "Cantrips : 3", "Ability Score Improvement", "Wild Shape Improvement" ],
		"9" : ["Druid(4,3,3,3,1,0,0,0,0)", "Cantrips : 3" ],
		"10" : ["Druid(4,3,3,3,2,0,0,0,0)", "Cantrips : 4", "Druid Circle Feature" ],
		"11" : ["Druid(4,3,3,3,2,1,0,0,0)", "Cantrips : 4" ],
		"12" : ["Druid(4,3,3,3,2,1,0,0,0)", "Cantrips : 4", "Ability Score Improvement" ],
		"13" : ["Druid(4,3,3,3,2,1,1,0,0)", "Cantrips : 4" ],
		"14" : ["Druid(4,3,3,3,2,1,1,0,0)", "Cantrips : 4", "Druid Circle Feature" ],
		"15" : ["Druid(4,3,3,3,2,1,1,1,0)", "Cantrips : 4" ],
		"16" : ["Druid(4,3,3,3,2,1,1,1,0)", "Cantrips : 4", "Ability Score Improvement" ],
		"17" : ["Druid(4,3,3,3,3,1,1,1,1)", "Cantrips : 4" ],
		"18" : ["Druid(4,3,3,3,3,1,1,1,1)", "Cantrips : 4", "Timeless Body Druid", "Beast Spells" ],
		"19" : ["Druid(4,3,3,3,3,2,1,1,1)", "Cantrips : 4", "Ability Score Improvement" ],
		"20" : ["Druid(4,3,3,3,3,2,2,1,1)", "Cantrips : 4", "Archdruid" ]
	},
	"Fighter" : 
	{		
		"1" : ["Fighting Style", "Second Wind" ],
		"2" : ["Action Surge : 1"],
		"3" : ["Martial Archetype Feature"],
		"4" : ["Ability Score Improvement"],
		"5" : ["Extra Attack : 1"],
		"6" : ["Ability Score Improvement"],
		"7" : ["Martial Archetype Feature"],
		"8" : ["Ability Score Improvement"],
		"9" : ["Indomitable : 1"],
		"10" : ["Martial Archetype Feature"],
		"11" : ["Extra Attack : 2"],
		"12" : ["Ability Score Improvement"],
		"13" : ["Indomitable : 2"],
		"14" : ["Ability Score Improvement"],
		"15" : ["Martial Archetype Feature"],
		"16" : ["Ability Score Improvement"],
		"17" : ["Action Surge : 2", "Indomitable : 3"],
		"18" : ["Martial Archetype Feature"],
		"19" : ["Ability Score Improvement"],
		"20" : ["Extra Attack : 3"]
	},
	"Monk" :
	{		
		"1" : ["Unarmored Defense Monk", "Martial Arts"],
		"2" : ["Ki : 2", "Unarmored Movement : 10", "Flurry Of Blows", "Patient Defense", "Step Of The Wind"],
		"3" : ["Ki : 3", "Unarmored Movement : 10", "Monastic Tradition Feature", "Deflect Missiles"],
		"4" : ["Ki : 4", "Unarmored Movement : 10", "Ability Score Improvement", "Slow Fall"],
		"5" : ["Ki : 5", "Unarmored Movement : 10", "Extra Attack : 1", "Stunning Strike"],
		"6" : ["Ki : 6", "Unarmored Movement : 15", "Monastic Tradition Feature", "Ki-Empowered Strikes"],
		"7" : ["Ki : 7", "Unarmored Movement : 15", "Evasion", "Stillness of Mind"],
		"8" : ["Ki : 8", "Unarmored Movement : 15", "Ability Score Improvement"],
		"9" : ["Ki : 9", "Unarmored Movement : 15", "Unarmored Movement Improvement"],
		"10" : ["Ki : 10", "Unarmored Movement : 20", "Purity of Body"],
		"11" : ["Ki : 11", "Unarmored Movement : 20", "Monastic Tradition Feature"],
		"12" : ["Ki : 12", "Unarmored Movement : 20", "Ability Score Improvement"],
		"13" : ["Ki : 13", "Unarmored Movement : 20", "Tongue of the Sun and Moon"],
		"14" : ["Ki : 14", "Unarmored Movement : 25", "Diamond Soul"],
		"15" : ["Ki : 15", "Unarmored Movement : 25", "Timeless Body Monk"],
		"16" : ["Ki : 16", "Unarmored Movement : 25", "Ability Score Improvement"],
		"17" : ["Ki : 17", "Unarmored Movement : 25", "Monastic Tradition Feature"],
		"18" : ["Ki : 18", "Unarmored Movement : 30", "Empty Body"],
		"19" : ["Ki : 19", "Unarmored Movement : 30", "Ability Score Improvement"],
		"20" : ["Ki : 20", "Unarmored Movement : 30", "Perfect Self"]
	},
	"Paladin" :
	{		
		"1" : ["Paladin(0,0,0,0,0,0,0,0,0)", "Divine Sense", "Lay Of Hands"],
		"2" : ["Paladin(2,0,0,0,0,0,0,0,0)", "Fighting Style", "Divine Sense"],
		"3" : ["Paladin(3,0,0,0,0,0,0,0,0)", "Divine Health", "Sacred Oath Feature"],
		"4" : ["Paladin(3,0,0,0,0,0,0,0,0)", "Ability Score Improvement"],
		"5" : ["Paladin(4,2,0,0,0,0,0,0,0)", "Extra Attack : 1"],
		"6" : ["Paladin(4,2,0,0,0,0,0,0,0)", "Aura of Protection"],
		"7" : ["Paladin(4,3,0,0,0,0,0,0,0)", "Sacred Oath Feature"],
		"8" : ["Paladin(4,3,0,0,0,0,0,0,0)", "Ability Score Improvement"],
		"9" : ["Paladin(4,3,2,0,0,0,0,0,0)",],
		"10" : ["Paladin(4,3,2,0,0,0,0,0,0)", "Aura of Courage"],
		"11" : ["Paladin(4,3,3,0,0,0,0,0,0)", "Improved Divine Smite"],
		"12" : ["Paladin(4,3,3,0,0,0,0,0,0)", "Ability Score Improvement"],
		"13" : ["Paladin(4,3,3,1,0,0,0,0,0)"],
		"14" : ["Paladin(4,3,3,1,0,0,0,0,0)", "Cleansing Touch"],
		"15" : ["Paladin(4,3,3,2,0,0,0,0,0)", "Sacred Oath Feature"],
		"16" : ["Paladin(4,3,3,2,0,0,0,0,0)", "Ability Score Improvement"],
		"17" : ["Paladin(4,3,3,3,1,0,0,0,0)",],
		"18" : ["Paladin(4,3,3,3,1,0,0,0,0)", "Aura Improvements"],
		"19" : ["Paladin(4,3,3,3,2,0,0,0,0)", "Ability Score Improvement"],
		"20" : ["Paladin(4,3,3,3,2,0,0,0,0)", "Sacred Oath Feature"]
	},
	"Ranger" :
	{		
		"1" : ["Ranger(0,0,0,0,0,0,0,0,0)", "Favored Enemy", "Natural Explorer" ],
		"2" : ["Ranger(2,0,0,0,0,0,0,0,0)", "Spells : 2", "Fighting Style"],
		"3" : ["Ranger(3,0,0,0,0,0,0,0,0)", "Spells : 3", "Ranger Archetype Feature", "Primeval Awareness"],
		"4" : ["Ranger(3,0,0,0,0,0,0,0,0)", "Spells : 3", "Ability Score Improvement"],
		"5" : ["Ranger(4,2,0,0,0,0,0,0,0)", "Spells : 4", "Extra Attack"],
		"6" : ["Ranger(4,2,0,0,0,0,0,0,0)", "Spells : 4", "Favored Enemy Improvement", "Natural Explorer Improvement"],
		"7" : ["Ranger(4,3,0,0,0,0,0,0,0)", "Spells : 5", "Ranger Archetype Feature"],
		"8" : ["Ranger(4,3,0,0,0,0,0,0,0)", "Spells : 5", "Ability Score Improvement", "Land's Stride"],
		"9" : ["Ranger(4,3,2,0,0,0,0,0,0)", "Spells : 6" ],
		"10" : ["Ranger(4,3,2,0,0,0,0,0,0)", "Spells : 6", "Natural Explorer Improvement", "Hide in Plain Sight",],
		"11" : ["Ranger(4,3,3,0,0,0,0,0,0)", "Spells : 7", "Ranger Archetype Feature"],
		"12" : ["Ranger(4,3,3,0,0,0,0,0,0)", "Spells : 7", "Ability Score Improvement"],
		"13" : ["Ranger(4,3,3,1,0,0,0,0,0)", "Spells : 8" ],
		"14" : ["Ranger(4,3,3,1,0,0,0,0,0)", "Spells : 8", "Favored Enemy Improvement", "Vanish"],
		"15" : ["Ranger(4,3,3,2,0,0,0,0,0)", "Spells : 9", "Ranger Archetype Feature"],
		"16" : ["Ranger(4,3,3,2,0,0,0,0,0)", "Spells : 9", "Ability Score Improvement"],
		"17" : ["Ranger(4,3,3,3,1,0,0,0,0)", "Spells : 10" ],
		"18" : ["Ranger(4,3,3,3,1,0,0,0,0)", "Spells : 10", "Feral Senses"],
		"19" : ["Ranger(4,3,3,3,2,0,0,0,0)", "Spells : 11", "Ability Score Improvement"],
		"20" : ["Ranger(4,3,3,3,2,0,0,0,0)", "Spells : 11", "Foe Slayer"]
	},
	"Rogue" :
	{		
		"1" : ["Sneak Attack : 1", "Expertise"],
		"2" : ["Sneak Attack : 1", "Cunning Action"],
		"3" : ["Sneak Attack : 2", "Roguish Archetype Feature"],
		"4" : ["Sneak Attack : 2", "Ability Score Improvement"],
		"5" : ["Sneak Attack : 3", "Uncanny Dodge"],
		"6" : ["Sneak Attack : 3", "Expertise"],
		"7" : ["Sneak Attack : 4", "Evasion"],
		"8" : ["Sneak Attack : 4", "Ability Score Improvement"],
		"9" : ["Sneak Attack : 5", "Roguish Archetype Feature"],
		"10" : ["Sneak Attack : 5", "Ability Score Improvement"],
		"11" : ["Sneak Attack : 6", "Reliable Talent"],
		"12" : ["Sneak Attack : 6", "Ability Score Improvement"],
		"13" : ["Sneak Attack : 7", "Roguish Archetype Feature"],
		"14" : ["Sneak Attack : 7", "Blindsense"],
		"15" : ["Sneak Attack : 8", "Slippery Mind"],
		"16" : ["Sneak Attack : 8", "Ability Score Improvement"],
		"17" : ["Sneak Attack : 9", "Roguish Archetype Feature"],
		"18" : ["Sneak Attack : 9", "Elusive"],
		"19" : ["Sneak Attack : 10", "Ability Score Improvement"],
		"20" : ["Sneak Attack : 10", "Stroke Of Luck"]
	},
	"Sorcerer" :
	{		
		"1" : ["Sorcerer(2,0,0,0,0,0,0,0,0)", "Cantrips : 4", "Spells : 2", "Sorcerous Origin Feature" ],
		"2" : ["Sorcerer(3,0,0,0,0,0,0,0,0)", "Cantrips : 4", "Spells : 3", "Sorcery Points : 2", "Font Of Magic", "Flexible Casting" ],
		"3" : ["Sorcerer(4,2,0,0,0,0,0,0,0)", "Cantrips : 4", "Spells : 4", "Sorcery Points : 3", "Metamagic"],
		"4" : ["Sorcerer(4,3,0,0,0,0,0,0,0)", "Cantrips : 5", "Spells : 5", "Sorcery Points : 4", "Ability Score Improvement" ],
		"5" : ["Sorcerer(4,3,2,0,0,0,0,0,0)", "Cantrips : 5", "Spells : 6", "Sorcery Points : 5"],
		"6" : ["Sorcerer(4,3,3,0,0,0,0,0,0)", "Cantrips : 5", "Spells : 7", "Sorcery Points : 6", "Sorcerous Origin Feature" ],
		"7" : ["Sorcerer(4,3,3,1,0,0,0,0,0)", "Cantrips : 5", "Spells : 8", "Sorcery Points : 7"],
		"8" : ["Sorcerer(4,3,3,2,0,0,0,0,0)", "Cantrips : 5", "Spells : 9", "Sorcery Points : 8", "Ability Score Improvement" ],
		"9" : ["Sorcerer(4,3,3,3,1,0,0,0,0)", "Cantrips : 5", "Spells : 10", "Sorcery Points : 9" ],
		"10" : ["Sorcerer(4,3,3,3,2,0,0,0,0)", "Cantrips : 6", "Spells : 11", "Sorcery Points : 10", "Sorcerous Origin Feature", "Metamagic improvement" ],
		"11" : ["Sorcerer(4,3,3,3,2,1,0,0,0)", "Cantrips : 6", "Spells : 12", "Sorcery Points : 11" ],
		"12" : ["Sorcerer(4,3,3,3,2,1,0,0,0)", "Cantrips : 6", "Spells : 12", "Sorcery Points : 12", "Ability Score Improvement" ],
		"13" : ["Sorcerer(4,3,3,3,2,1,1,0,0)", "Cantrips : 6", "Spells : 13", "Sorcery Points : 13" ],
		"14" : ["Sorcerer(4,3,3,3,2,1,1,0,0)", "Cantrips : 6", "Spells : 13", "Sorcery Points : 14", "Sorcerous Origin Feature"],
		"15" : ["Sorcerer(4,3,3,3,2,1,1,1,0)", "Cantrips : 6", "Spells : 14", "Sorcery Points : 15" ],
		"16" : ["Sorcerer(4,3,3,3,2,1,1,1,0)", "Cantrips : 6", "Spells : 14", "Sorcery Points : 16", "Ability Score Improvement" ],
		"17" : ["Sorcerer(4,3,3,3,2,1,1,1,1)", "Cantrips : 6", "Spells : 15", "Sorcery Points : 17", "Metamagic improvement"],
		"18" : ["Sorcerer(4,3,3,3,3,1,1,1,1)", "Cantrips : 6", "Spells : 15", "Sorcery Points : 18", "Sorcerous Origin Feature"],
		"19" : ["Sorcerer(4,3,3,3,3,2,1,1,1)", "Cantrips : 6", "Spells : 15", "Sorcery Points : 19", "Ability Score Improvement" ],
		"20" : ["Sorcerer(4,3,3,3,3,2,2,1,1)", "Cantrips : 6", "Spells : 15", "Sorcery Points : 20", "Sorcerous Restoration" ]
	},
	"Warlock" :
	{		
		"1" : [ "Slots : 1", "Slot Level : 1" , "Cantrips : 2", "Spells : 2", "Otherwordly Patron Feature" ],
		"2" : [ "Slots : 2", "Slot Level : 1" , "Cantrips : 2", "Spells : 3", "Invocations : 2" ],
		"3" : [ "Slots : 2", "Slot Level : 2" , "Cantrips : 2", "Spells : 4", "Invocations : 2", "Pact Boon" ],
		"4" : [ "Slots : 2", "Slot Level : 2" , "Cantrips : 3", "Spells : 5", "Invocations : 2", "Ability Score Improvement"],
		"5" : [ "Slots : 2", "Slot Level : 3" , "Cantrips : 3", "Spells : 6", "Invocations : 3" ],
		"6" : [ "Slots : 2", "Slot Level : 3" , "Cantrips : 3", "Spells : 7", "Invocations : 3", "Otherwordly Patron Feature" ],
		"7" : [ "Slots : 2", "Slot Level : 4" , "Cantrips : 3", "Spells : 8", "Invocations : 4"],
		"8" : [ "Slots : 2", "Slot Level : 4" , "Cantrips : 3", "Spells : 9", "Invocations : 4", "Ability Score Improvement"],
		"9" : [ "Slots : 2", "Slot Level : 5" , "Cantrips : 3", "Spells : 10", "Invocations : 5"],
		"10" : [ "Slots : 2", "Slot Level : 5" , "Cantrips : 4", "Spells : 10", "Invocations : 5", "Otherwordly Patron Feature"],
		"11" : [ "Slots : 3", "Slot Level : 5" , "Cantrips : 4", "Spells : 11", "Invocations : 5", "Mystic Arcanum : 6"],
		"12" : [ "Slots : 3", "Slot Level : 5" , "Cantrips : 4", "Spells : 11", "Invocations : 6" , "Ability Score Improvement"],
		"13" : [ "Slots : 3", "Slot Level : 5" , "Cantrips : 4", "Spells : 12", "Invocations : 6", "Mystic Arcanum : 7"],
		"14" : [ "Slots : 3", "Slot Level : 5" , "Cantrips : 4", "Spells : 12", "Invocations : 6", "Otherwordly Patron Feature"],
		"15" : [ "Slots : 3", "Slot Level : 5" , "Cantrips : 4", "Spells : 13", "Invocations : 7", "Mystic Arcanum : 8"],
		"16" : [ "Slots : 3", "Slot Level : 5" , "Cantrips : 4", "Spells : 13", "Invocations : 7", "Ability Score Improvement"],
		"17" : [ "Slots : 4", "Slot Level : 5" , "Cantrips : 4", "Spells : 14", "Invocations : 7", "Mystic Arcanum :  9"],
		"18" : [ "Slots : 4", "Slot Level : 5" , "Cantrips : 4", "Spells : 14", "Invocations : 8"],
		"19" : [ "Slots : 4", "Slot Level : 5" , "Cantrips : 4", "Spells : 15", "Invocations : 8", "Ability Score Improvement"],
		"20" : [ "Slots : 4", "Slot Level : 5" , "Cantrips : 4", "Spells : 15", "Invocations : 8", "Eldritch Master"]
	},
	"Wizard" :
	{		
		"1" : ["Wizard(2,0,0,0,0,0,0,0,0)", "Cantrips : 3", "Arcane Recovery" ],
		"2" : ["Wizard(3,0,0,0,0,0,0,0,0)", "Cantrips : 3", "Arcane Tradition Feature" ],
		"3" : ["Wizard(4,2,0,0,0,0,0,0,0)", "Cantrips : 3" ],
		"4" : ["Wizard(4,3,0,0,0,0,0,0,0)", "Cantrips : 4", "Ability Score Improvement" ],
		"5" : ["Wizard(4,3,2,0,0,0,0,0,0)", "Cantrips : 4" ],
		"6" : ["Wizard(4,3,3,0,0,0,0,0,0)", "Cantrips : 4", "Arcane Tradition Feature" ],
		"7" : ["Wizard(4,3,3,1,0,0,0,0,0)", "Cantrips : 4" ],
		"8" : ["Wizard(4,3,3,2,0,0,0,0,0)", "Cantrips : 4","Ability Score Improvement" ],
		"9" : ["Wizard(4,3,3,3,1,0,0,0,0)", "Cantrips : 4" ],
		"10" : ["Wizard(4,3,3,3,2,0,0,0,0)", "Cantrips : 5", "Arcane Tradition Feature" ],
		"11" : ["Wizard(4,3,3,3,2,1,0,0,0)", "Cantrips : 5" ],
		"12" : ["Wizard(4,3,3,3,2,1,0,0,0)", "Cantrips : 5", "Ability Score Improvement" ],
		"13" : ["Wizard(4,3,3,3,2,1,1,0,0)", "Cantrips : 5" ],
		"14" : ["Wizard(4,3,3,3,2,1,1,0,0)", "Cantrips : 5", "Arcane Tradition Feature" ],
		"15" : ["Wizard(4,3,3,3,2,1,1,1,0)", "Cantrips : 5" ],
		"16" : ["Wizard(4,3,3,3,2,1,1,1,0)", "Cantrips : 5", "Ability Score Improvement" ],
		"17" : ["Wizard(4,3,3,3,2,1,1,1,1)", "Cantrips : 5" ],
		"18" : ["Wizard(4,3,3,3,3,1,1,1,1)", "Cantrips : 5", "Spell Mastery" ],
		"19" : ["Wizard(4,3,3,3,3,2,1,1,1)", "Cantrips : 5", "Ability Score Improvement" ],
		"20" : ["Wizard(4,3,3,3,3,2,2,1,1)", "Cantrips : 5", "Signature Spell" ]
	},
}
const raceList = 
[ 
	"Dwarf (Hill)", "Dwarf (Mountain)", 
	"Elf (Drow)", "Elf (High)", "Elf (Wood)", 
	"Gnome (Forest)", "Gnome (Rock)", "Gnome (Deep)", 
	"Halfling (Lightfoot)", "Halfling (Stout)", 
	"Half Elf", 
	"Half-Orc", 
	"Human", 
	"Tiefling" 
];

const raceAbilities = 
{
	"Dwarf (Hill)" : { "Wisdom" : 1, "Constitution" : 2 },
	"Dwarf (Mountain)" : { "Strength" : 2, "Constitution" : 2 },
	"Elf (Drow)" : { "Charisma" : 1, "Dexterity" : 2 },
	"Elf (High)" : { "Dexterity" : 2, "Intelligence" : 1 },
    "Elf (Wood)" : { "Dexterity" : 2, "Wisdom" : 1 },
	"Gnome (Deep)" : { "Dexterity" : 1, "Intelligence" : 2 },
	"Gnome (Forest)" : { "Dexterity" : 1, "Intelligence" : 2 },
	"Gnome (Rock)" : { "Intelligence" : 2, "Constitution" : 1 },
	"Halfling (Lightfoot)" :  { "Charisma" : 1, "Dexterity" : 2 },
    "Halfling (Stout)" : { "Dexterity" : 2, "Constitution" : 1 },
    "Half Elf" : { "Charisma" : 2 },
    "Half-Orc" : { "Strength" : 2, "Constitution" : 1 },
	"Human" : {  "Charisma" : 1,  "Dexterity" : 1,  "Wisdom" : 1,  "Intelligence" : 1,  "Strength" : 1,  "Constitution" : 1},
    "Tiefling": { "Charisma" : 2, "Intelligence" : 1 }
};

const raceAges = 
{
	"Dwarf (Hill)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103] },
	"Dwarf (Mountain)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103]},
	"Elf (Drow)" : { "Young" : [111,130], "Adult" : [130,529], "Older" : [529,8547] },
	"Elf (High)" : { "Young" : [111,130], "Adult" : [130,529], "Older" : [529,8547] },
	"Elf (Wood)" : { "Young" : [111,130], "Adult" : [130,529], "Older" : [529,8547] },
	"Gnome (Deep)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103] },
    "Gnome (Rock)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103] },
	"Gnome (Forest)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103] },
    "Halfling (Lightfoot)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103] },
	"Halfling (Stout)" : { "Young" : [41,44], "Adult" : [44,61], "Older" : [61,103] },
	"Half Elf" : { "Young" : [21,24], "Adult" : [24,41], "Older" : [41,83] },
	"Half-Orc" : { "Young" : [15,18], "Adult" : [18,35], "Older" : [35,77] },
	"Human" : { "Young" : [16,19], "Adult" : [19,36], "Older" : [36,78] },
    "Tiefling": { "Young" : [21,24], "Adult" : [24,41], "Older" : [41,83] },
};

const raceFeatures = 
{
  "Dwarf (Hill)": ["Darkvision (15m)", "Stonecutter's Lore", "Dwarven Resilience", "Dwarven Toughness" ],
  "Dwarf (Mountain)": ["Darkvision (15m)", "Stonecutter's Lore", "Dwarven Resilience"],
  "Elf (Drow)": ["Darkvision (30m)", "Perception", "Fey Ancestry", "Trance", "Sunlight Sensitivity", "Drow Magic"],
  "Elf (High)": ["Darkvision (15m)", "Perception", "Fey Ancestry", "Trance", "Elven Magic", "One Extra Language" ],
  "Elf (Wood)": ["Darkvision (15m)", "Perception", "Fey Ancestry", "Trance", "Mask Of The Wild" ],
  "Gnome (Forest)": ["Darkvision (15m)", "Gnome Cunning", "Natural Illusionist", "Speak with Small Beasts" ],
  "Gnome (Rock)": ["Darkvision (15m)", "Gnome Cunning","Artificer's Lore", "Craft Clockwork Device" ],
  "Gnome (Deep)": [ "Darkvision (30m)", "Gnome Cunning", "Stone Camouflage" ],
  "Halfling (Lightfoot)": ["Lucky", "Brave", "Halfling Nimbleness", "Naturally Stealthy" ],
  "Halfling (Stout)" : ["Lucky", "Brave", "Halfling Nimbleness", "Stout Resilience"],
  "Half Elf": ["Darkvision (15m)", "Fey Ancestry", "Two Skill Proficiencies", "One Extra Language", "+1 Ability Score (2)"],
  "Half-Orc": ["Darkvision (15m)", "Intimidation", "Relentless Endurance", "Savage Critical"],
  "Human": 	["One Extra Language"],
  "Tiefling": [ "Darkvision (15m)", "Hellish Resistance", "Infernal Magic"]
}
const raceSize = 
{
  "Dwarf (Hill)": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
  "Dwarf (Mountain)": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
  "Elf (Drow)": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
  "Elf (High)": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
  "Elf (Wood)": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
  "Gnome (Forest)": "Gnomes are between 3 and 4 feet tall andaverage about 40 pounds. Your size is Small." ,
  "Gnome (Rock)": "Gnomes are between 3 and 4 feet tall andaverage about 40 pounds. Your size is Small.",
  "Gnome (Deep)":  "Gnomes are between 3 and 4 feet tall andaverage about 40 pounds. Your size is Small.",
  "Halfling (Lightfoot)": "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
  "Halfling (Stout)" : "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
  "Half Elf": "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
  "Half-Orc": "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall.Your size is Medium.",
  "Human": 	 "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
  "Tiefling": "Darkvision (30m)"
}
const raceProficiencies = 
{
	"Dwarf (Hill)": {
		weapons: ["Battle Axe", "Hand Axe", "Light Hammer", "Warhammer"],
		armor: [],
		tools : ["Smith's or Masons Tools"],
		languages: ["Common", "Dwarvish"],
	},
	"Dwarf (Mountain)": {
		weapons: ["Battleaxe", "Hand Axe", "Light Hammer", "Warhammer"],
		armor : ["Light", "Medium"],
		tools : ["Smith's or Masons Tools"],
		languages: [ "Common", "Dwarvish" ],
	},
	"Elf (Drow)": {
		weapons: [ "Rapier", "Shortsword", "Hand Crossbow" ],
		armor: [],
		tools: [],
		languages: [ "Common", "Elven" ],
	},
	"Elf (High)": {
		weapons: [ "Longbow", "Shortbow", "Longsword", "Shortsword" ], 
		armor: [], 
		tools: [], 
		languages: [ "Common", "Elven" ], 
	},
	"Elf (Wood)": {
		weapons: ["Longbow", "Shortbow", "Longsword", "Shortsword" ],
		armor: [],
		tools: [],
		languages: [ "Common", "Elven" ],
	},
	"Gnome (Forest)": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Gnomish" ],
	}, 
	"Gnome (Rock)": {
		weapons: [],
		armor: [],
		tools: ["Tinker's Tools"],
		languages: [ "Common", "Gnomish" ],
	}, 
	"Gnome (Deep)": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Gnomish", "Undercommon" ],
	}, 
	"Halfling (Lightfoot)": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Halfling" ],
	}, 
	"Halfling (Stout)": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Halfling" ],
	}, 
	"Half Elf": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Elven" ],
	}, 
	"Half-Orc": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Orcish" ],
	}, 
	"Human": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common" ],
	}, 
	"Tiefling": {
		weapons: [],
		armor: [],
		tools: [],
		languages: [ "Common", "Infernal" ],
	}
};

const raceSpeeds = 
{
	"Dwarf (Hill)" : ["25"],
	"Dwarf (Mountain)" : ["25"],
	"Elf (Drow)" : ["30"],
    "Elf (High)" : ["30"],
    "Elf (Wood)" : ["35"],
	"Gnome (Deep)" : ["25"],
	"Gnome (Forest)" : ["25"],
    "Gnome (Rock)" : ["25"],
	"Halfling (Lightfoot)" : ["25"],
    "Halfling (Stout)" : ["25"],
    "Half Elf" : ["30"],
	"Half-Orc" : ["30"],
    "Human" : ["30"],
	"Tiefling": ["30"]
};

const raceNames = 
{
    "Dwarf (Hill)" : [ "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Uligar", "Veit", "Vondal", "Amber", "Artin", "Audhild", "Bardryn", "Danal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra", "Balderk"],
	
    "Dwarf (Mountain)" : [ "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Uligar", "Veit", "Vondal", "Amber", "Artin", "Audhild", "Bardryn", "Danal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra", "Balderk"],
	
	"Elf (Drow)" : [ "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Tharmior", "Tharivol", "Theren", "Varis", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
	
	"Elf (High)" : [ "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Tharmior", "Tharivol", "Theren", "Varis", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
	
	"Elf (Wood)" : [ "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Tharmior", "Tharivol", "Theren", "Varis", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
	
	"Gnome (Deep)" : [ "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook", "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Marnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna", "Beren"],
	
	"Gnome (Forest)" : [ "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook", "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Marnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna", "Beren"],
	
    "Gnome (Rock)" : [ "Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook", "Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Marnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna", "Beren"],
	
	"Halfling (Lightfoot)" : [ "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby", "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"],

    "Halfling (Stout)" : [ "Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby", "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"],
	
	"Half Elf" : [ "Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Tharmior", "Tharivol", "Theren", "Varis", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
	
    "Half-Orc" : [ "Dench", "Feng", "Gell", "Henk", "Thokk", "Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Sautha", "Sutha", "Vola", "Volen", "Yevelda"],

	"Human" : [ "Aseir", "Bardeid", "Haseid", "Khem ed", "Mehmen", "Sudeim an", "Zasheir", "Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Bor", "Fodel", "Grigor", "Glar", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth", "Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ram as", "So-Kehur", "Thazar-De", "Urhur", "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak", "Fyevarra", "Hulmarra", "Immith", "Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra", "An", "Chen", "Chi", "Fai", "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen", "Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui", "Tai", "Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"],

	"Tiefling": [ "Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Karion", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai", "Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta", "Art", "Chant", "Creed", "Despair", "Excellence", "Fear", "Glory", "Hope", "Ideal", "Reverence", "Sorrow"]
}
const featurez = 
{
  "Darkvision (15m)": "You can see in dim light within 15 meters of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  "Darkvision (30m)": "You can see in dim light within 30 meters of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  "Ability Score Improvement": "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. You can't go above 20 using this feature.",
  // DWARVES
  "Stonecutter's Lore": "Whenever you make an History check related to the origin of stonework, you are considered expert in the History skill.",
  "Dwarven Resilience" : "You have advantage on saving throws against poison, and you have resistance against poison damage.",
  "Stout Resilience" : "You have advantage on saving throws against poison, and you have resistance against poison damage.",
  "Dwarven Toughness" : "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
  // ELVES
  "Fey Ancestry" : "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
  "Trance": "You don't need to sleep. Instead, you meditate deeply, remaining semi-conscious, for 4 hours a day. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
  "Sunlight Sensitivity": "You have disadvantage on attack rolls and on Perception checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
  "Drow Magic": "You know the Dancing Lights cantrip. At 3rd level, you can use the Faerie Fire spell 1/day. At 5th level, you can also cast the Darkness spell 1/day. Charisma is the ability for these spells.",
  "Elven Magic": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
  "Mask Of The Wild": "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
  //GNOMES
  "Gnome Cunning": "You have advantage on allIntelligence, Wisdom , and Charisma saving throws against magic.",
  "Natural Illusionist": "You know the Minor Illusion cantrip. Intelligence is your spellcasting ability for it.",
  "Speak with Small Beasts": "Through sounds and gestures, you can com m unicate simple ideas with Small or smaller beasts. Forest gnomes keep badgers, moles, woodpeckers, and other creatures as pets.",
  "Artificer's Lore": "Whenever you make an History check related to magic items, alchemical objects, or technological devices, you are considered expert in the History skill.",
  "Craft Clockwork Device": "Using Tinker's Tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. <br/> When you create a device, choose one of the following options: <b> Clockwork Toy. </b> This toy is a clockw ork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. <b>Fire Starter.</b>  The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.<b> Music Box.</b> When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
  "Stone Camouflage": "You have advantage on Dexterity (stealth) checks to hide in rocky terrain.",
  // HALFLINGS
  "Lucky": "When you roll a natural 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
  "Brave": "You have advantage on saving throws against being frightened.",
  "Halfling Nimbleness": "You can move through the space of any creature that is of a size larger than yours.",
  "Naturally Stealthy": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
  // BARBARIAN
  "Rage" : "You can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor: <br/> - You have advantage on Strength checks and Strength saving throws.  <br/> - You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
  "Rage Bonus" : " When you make a melee weapon attack using Strength and are enraged, you gain a +2 bonus to the damage roll.",
  "Relentless Endurance": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
  "Savage Critical": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
  "Hellish Resistance": "You have resistance to Fire damage.",
  "Infernal Magic": "You know the Thaumaturgy cantrip. At 3rd level, you can use Hellish Rebuke 1/day at 2nd-level. At 5th level, you can also use Darkness 1/day. Charisma is the ability for these spells.",
  "Unarmored Defense Barbarian": "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
  "Brutal Critical" : "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
  "Reckless Attack": "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
  "Danger Sense": "You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
  "Extra Attack": "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
  "Fast Movement": "Your speed increases by 10 feet while you aren't wearing heavy armor.",
  "Feral Instinct": "You have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
  "Relentless Rage": "If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
  "Persistant Rage": "Your rage ends early only if you fall unconscious or if you choose to end it.",
  "Indomitable Might": "If your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
  "Primal Champion": "Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
  "Unlimited Rage": "You can rage any time you wish without the need to rest.",

  // BARD
  "Bardic Inspiration" : "You can use a bonus action to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier. You regain any expended uses when you finish a long rest.",
  "Song Of Rest" : "You can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your perform ance regain hit points at the end of the short rest, each of those creatures regains an extra 1d6 hit points.",
  "Jack Of All Trades": "You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
  "Expertise": "Choose two of your skill proficiencies. You gain expertise for any ability check you make that uses either of the chosen proficiencies.",
  "Font Of Inspiration": "You regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.",
  "Countercharm": "As an action, you can start a perform ance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The perform ance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).",
  "Magical Secrets": "Choose two spells from any class. A spell you choose must be of a level you can cast, or a cantrip. The chosen spells count as bard spells for you and are included in your known spells.",
  "Superior Inspiration": "When you roll initiative and have no uses of Bardic Inspiration left, you regain one use.",
  // CLERIC
  "Divine Domain": "",
  "Divine Intervention": "You can call on your deity to intervene on your behalf when your need is great. Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
  "Divine Intervention Improvement": "Your call for intervention succeeds automatically, no roll required.",
  // DRUID
  "Wild Shape": "You can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your druid level determines the beasts you can transform into. You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die. Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature.",
  "Wild Shape Improvement": "2nd Level : CR 1/4 (No flying or swimming) <br/> 4th Level : CR 1/2 (No flying) <br/> 8th Level: CR 1",
  "Timeless Body Druid": "The primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.",
  "Beast Spells": "You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
  "Archdruid": "You can use your Wild Shape an unlimited number of times.",
  // FIGHTER
  "Action Surge" : "On your turn, you can take one additional action on top of your regular action and a possible bonus action. If you used this feature once, you must finish a short or long rest before you can use it again.",
  "Extra Attack : 1" : "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
  "Extra Attack : 2" : "You can attack three times, instead of once, whenever you take the Attack action on your turn.",
  "Indomitable" : "You can reroll a saving throw that you fail. If you do so, you must use the new roll. If you used this feature once, you can't use it again until you finish a long rest.", 
  "Fighting Style": "You adopt a particular style of fighting as your specialty. <br/><b> Archery.</b> You gain a +2 bonus to attack rolls you make with ranged weapons.<br/><b> Defense </b> While you are wearing armor, you gain a +1 bonus to AC. <br/> <b> Dueling </b> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. <br/><b> Great Weapon Fighting </b> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit. <br/><b> Protection </b>  When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to im pose disadvantage on the attack roll. You must be wielding a shield.<br/> <b> Two-Weapon Fighting </b> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
  "Second Wind": "On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short rest before you can use it again.",
  // MONK
  "Unarmored Defense Monk": "While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
  "Ki" : "Your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points. Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:  8 + your proficiency bonus + your Wisdom modifier",
  "Flurry Of Blows" : "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.",
  "Patient Defense" : "You can spend 1 ki point to take the Dodge action as a bonus action on your turn.",
  "Step Of The Wind" : "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.",
  "Martial Arts": "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield: <br/> - You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. <br/> - You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels. <br/> - When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action.",
  "Deflect Missiles": "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d 10 + your Dexterity modifier + your monk level. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction.",
  "Slow Fall": "You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.",
  "Stunning Strike": "When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
  "Ki-Empowered Strikes": "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to non-magical attacks and damage.",
  "Evasion": "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
  "Stillness of Mind": "You can use your action to end one effect on yourself that is causing you to be charmed or frightened.",
  "Unarmored Movement Improvement": "",
  "Purity of Body": "You are immune to disease and poison.",
  "Tongue of the Sun and Moon": "You learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.",
  "Diamond Soul": "You gain proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
  "Empty Body": "You can use your action to spend 4 ki points to becom e invisible for 1 minute.",
  "Perfect Self": "When you roll for initiative and have no ki points remaining, you regain 4 ki points.",
  "Timeless Body Monk": "Your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age. In addition, you no longer need food or water.",
  // Paladin
  "Divine Sense": "As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.",
  "Lay Of Hands": "You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a num ber of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.",
  "Divine Health": "You are immune to disease",
  "Aura of Protection": "Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier. You must be conscious to grant this bonus.",
  "Aura of Courage": "You and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
  "Improved Divine Smite": "Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.",
  "Cleansing Touch": "You can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier. You regain expended uses when you finish a long rest.",
  "Aura Improvements": "The range of your Aura of Courage and Aura of Protection becomes 30 feet.",
  // RANGER
  "Favored Enemy": "Choose a type of enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. <br/>  <br/> You have advantage on Survival checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
  "Natural Explorer": "Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. <br/> When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency counts as expertise for that skill. <br/>While traveling for an hour or more in your favored terrain, you gain the following benefits: <br/> - Difficult terrain doesn't slow your group's travel. <br/> - Your group can't become lost except by magical means. <br/> - Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. <br/> - If you are traveling alone, you can move stealthily at a normal pace. <br/> - When you forage, you find twice as much food as you normally would. <br/> - While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
  "Primeval Awareness": "You can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.",
  "Favored Enemy Improvement": "You choose one additional favored enemy, as well as an associated language. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.",
  "Natural Explorer Improvement": "You choose an additional favored terrain.",
  "Land's Stride": "Moving through nonm agical difficult terrain costs you no extra movement. You can also pass through nonm agical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the Rntangle spell.",
  "Hide in Plain Sight": "You can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.",
  "Vanish": "You can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.",
  "Feral Senses": "You gain preternatural senses that help you fight creatures you can't see. W hen you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.",
  "Foe Slayer": "You become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one o f your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.",
  // ROGUE
  "Sneak Attack" : "Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
  "Cunning Action": "You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.",
  "Uncanny Dodge": "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
  "Reliable Talent": "Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
  "Blindsense": "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
  "Slippery Mind": "You gain proficiency in W isdom saving throws.",
  "Elusive": "No attack roll has advantage against you while you aren't incapacitated.",
  "Stroke Of Luck": "If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can't use it again until you finish a short or long rest.",
  // SORCERER
  "Font Of Magic": "You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
  "Flexible Casting" : "<b>Creating Spell Slots. </b>You can transform unexpended Sorcery Points into one spell slot as a bonus action on your turn. <br/> 2 SP = 1st Level.<br/> 3 SP = 2nd Level.<br/> 5 SP = 3rd Level.<br/> 6 SP = 4th Level.<br/> 7 SP = 5th Level.<br/><b>Converting a Spell Slot to Sorcery Points. </b> As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.",
  "Metamagic": "You gain two of the following Metamagic options of your choice. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted. <br/><b> Careful Spell </b> When you cast a spell that forces other creatures to make a saving throw, you can protect som e of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier. A chosen creature automatically succeeds on its saving throw against the spell. <br/><b> Distant Spell </b> When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet. <br/><b> Empowered Spell </b> When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier. You must use the new rolls. You can use Empowered Spell even if you have already used a different Metam agic option during the casting of the spell. <br/><b>Extended Spell </b> When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours. <br/> <b> Heightened Spell </b> When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell. <br/> <b> Quickened Spell </b> When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting. <br/> <b> Subtle Spell </b> When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components. <br/><b>Twinned Spells </b> When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).",
  "Metamagic improvement" : "You gain one more metamagic option",
  "Sorcerous Restoration": "You regain 4 expended sorcery points whenever you finish a short rest.",
  // WARLOCK
  "Invocations" : "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. You gain two eldritch invocations of your choice. Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.",
  "Pact Boon": "Your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice. <br/><b> Pact of The Chain </b> You learn the Find Familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known. When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite. Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own. <br/><b> Pact Of The Blade </b> You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die. You can transform one magic weapon into your pact weapon by perform ing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dism iss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks. <br/> <b> Pact Of The Tome </b> Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list. While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.",
  "Eldritch Master": "You can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.",
  // WIZARD
  "Arcane Recovery": "Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.",
  "Spell Mastery": "Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.",
  "Signature Spell": "Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest. If you want to cast either spell at a higher level, you must expend a spell slot as normal."
};
const standardAbilityScore = [15,14,13,12,10,8];

const expLevel = 
[
	{xp : 0,      prof : 2 },
	{xp : 300,    prof : 2 },
	{xp : 900,    prof : 2 },
	{xp : 2700,   prof : 2 },
	{xp : 6500,   prof : 3 },
	{xp : 14000,  prof : 3 },
	{xp : 23000,  prof : 3 },
	{xp : 34000,  prof : 3 },
	{xp : 48000,  prof : 4 },
	{xp : 64000,  prof : 4 },
	{xp : 85000,  prof : 4 },
	{xp : 100000, prof : 4 },
	{xp : 120000, prof : 5 },
	{xp : 140000, prof : 5 },
	{xp : 165000, prof : 5 },
	{xp : 195000, prof : 5 },
	{xp : 225000, prof : 6 },
	{xp : 265000, prof : 6 },
	{xp : 305000, prof : 6 },
	{xp : 355000, prof : 6 },
];
const abilities = 
[
    "Strength", 
    "Dexterity", 
    "Constitution", 
    "Intelligence", 
    "Wisdom", 
    "Charisma"
];

const skills = 
[
    "Acrobatics", 
    "Animal Handling", 
    "Arcana", 
    "Athletics", 
    "Deception", 
    "History", 
    "Insight", 
    "Intimidation", 
    "Investigation", 
    "Medicine", 
    "Nature", 
    "Perception", 
    "Performance", 
    "Persuasion", 
    "Religion", 
    "Sleight Of Hand", 
    "Stealth", 
    "Survival"
];

const skillsByAbility = 
{
    "Charisma" : 
     [
          "Deception",
          "Intimidation",
          "Performance",
          "Persuasion"
    ],
    "Dexterity" : 
     [
          "Acrobatics",
          "Sleight Of Hand",
          "Stealth"
    ],
    "Wisdom" : 
     [
          "Animal Handling",
          "Insight",
          "Medicine",
          "Perception",
          "Survival"
    ],
    "Intelligence" : 
     [
          "Arcana",
          "History",
          "Investigation",
          "Nature",
          "Religion"
    ],
    "Strength" : 
     [
          "Athletics"
    ],
    "Constitution" : 
     [
    ]
};

const alignments = 
[
    "Lawful Good", 
    "Neutral Good", 
    "Chaotic Good", 
    "Lawful Neutral", 
    "Pure Neutral", 
    "Chaotic Neutral", 
    "Lawful Evil", 
    "Neutral Evil", 
    "Chaotic Evil"
];

const languages = 
[
    "Druidic", 
    "Thieves' Cant", 
    "Common", 
    "Draconic", 
    "Dwarvish", 
    "Elven", 
    "Gnomish", 
    "Goblin", 
    "Halfling", 
    "Orcish", 
    "Infernal", 
    "Undercommon"
];

const armorTypes = 
{
    "Heavy" : 
     [
          "Ring mail",
          "Chain mail",
          "Splint",
          "Plate"
    ],
    "Shield" : 
     [
          "Shield"
    ],
    "Unarmored" : 
     [
          "Unarmored"
    ],
    "Light" : 
     [
          "Padded",
          "Leather",
          "Studded"
    ],
    "Medium" : 
     [
          "Hide",
          "Chain shirt",
          "Scale mail",
          "Breastplate",
          "Half plate"
    ]
};
const actionsList = 
{
	full : ["Grapple", "Shove", "Dash", "Disengage", "Dodge", "Escape Grapple", "Help", "Use Object", "Equip/Unequip Shield", "Hide", "Search", "Ready", "Improvise"],
	bonus : ["Offhand Attack"],
	reaction : ["Opportunity Attack"],
	free : ["Command / Talk", "Switch Weapon", "Environment Interaction"]
};

const weapons = 
[
    "Club", 
    "Dagger", 
    "Greatclub", 
    "Handaxe", 
    "Javelin", 
    "Light Hammer", 
    "Mace", 
    "Quarterstaff", 
    "Sickle", 
    "Spear", 
    "Light Crossbow", 
    "Dart", 
    "Shortbow", 
    "Sling", 
    "Battleaxe", 
    "Flail", 
    "Glaive", 
    "Greataxe", 
    "Greatsword", 
    "Halberd", 
    "Lance", 
    "Longsword", 
    "Maul", 
    "Morningstar", 
    "Pike", 
    "Rapier", 
    "Scimitar", 
    "Shortsword", 
	"Unarmored",
    "Trident", 
    "War Pick", 
    "Warhammer", 
    "Whip", 
    "Blowgun", 
    "Hand Crossbow", 
    "Heavy Crossbow",
    "Longbow"
];
const regexPatterns = 
{
	"Classes" : /^(.+)\(([0-9]+)\)/,
	"Rage" : /^(Rage) : ([0-9])/,
	"Rage Bonus" : /^(Rage Bonus) : ([0-9])/,
	"Brutal Critical" : /^(Brutal Critical) : ([0-9])/,
	"Bardic Inspiration" : /^(Bardic Inspiration) : ([0-9]+)/,
	"Song Of Rest" : /^(Song Of Rest) : ([0-9]+)/,
	"Channel Divinity" : /^(Channel Divinity) : ([0-9]+)/,
	"Action Surge" : /^(Action Surge) : ([0-9]+)/,
	"Indomitable" : /^(Indomitable) : ([0-9]+)/,
	"Extra Attack" : /^(Extra Attack) : ([0-9]+)/,
	"Ki" : /^(Ki) : ([0-9]+)/,
	"Unarmored Movement" : /^(Unarmored Movement) : ([0-9]+)/,
	"Sneak Attack" : /^(Sneak Attack) : ([0-9])/,
	"Sorcery Points" : /^(Sorcery Points) : ([0-9]+)/,
	"Invocations" : /^(Invocations) : ([0-9]+)/,
	"Warlock Slot" : /^(Slots) : ([0-9]+)/,
	"Slot Level" : /^(Slot Level) : ([0-9]+)/,
	"Mystic Arcanum" : /^(Mystic Arcanum) : ([0-9]+)/,
	"Spell Slots" : /^(.+)\(([0-9]),([0-9]),([0-9]),([0-9]),([0-9]),([0-9]),([0-9]),([0-9]),([0-9])\)$/, 
	"Spells" : /^(Spells) : ([0-9]+)/,
	"Features" : / Feature$/,
	"Cantrips" : /^(Cantrips) : ([0-9]+)/
};
const regList = 
[
"Rage", "Rage Bonus","Bardic Inspiration", "Song Of Rest", "Spell Slots", "Spells", "Cantrips","Action Surge", "Indomitable", "Extra Attack", "Ki", "Unarmored Movement","Sneak Attack","Sorcery Points","Invocations", "Warlock Slot", "Slot Level", "Mystic Arcanum", "Channel Divinity", "Brutal Critical", "Features"
];

const reg = 
{
	"Barbarian" : ["Rage", "Rage Bonus", "Brutal Critical"],
	"Bard" : ["Bardic Inspiration", "Song Of Rest", "Spell Slots", "Spells", "Cantrips"],
	"Cleric" : [ "Channel Divinity", "Spell Slots", "Cantrips"],
	"Druid" : ["Spell Slots", "Cantrips"],
	"Fighter" : ["Action Surge", "Indomitable", "Extra Attack", "Spell Slots", "Cantrips"],
	"Monk" : ["Ki", "Unarmored Movement"],
	"Paladin" : ["Spell Slots", "Extra Attack"],
	"Ranger" : ["Spell Slots", "Spells"],
	"Rogue" : ["Sneak Attack"],
	"Sorcerer" : ["Sorcery Points", "Spell Slots", "Spells", "Cantrips"],  
	"Warlock" : ["Invocations", "Warlock Slot", "Slot Level", "Mystic Arcanum"],
	"Wizard" : ["Spell Slots", "Spells", "Cantrips"]
};