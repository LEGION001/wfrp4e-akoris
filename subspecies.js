Hooks.on("setup", () => {
	let config = {
		subspecies: {
			helf:{},
			human:{},
			delf:{},
			orc:{},
			gnome:{},
			halfelf:{},
			halfdwarf:{},
			humanling:{},
			halforc:{},
			dwarfelf:{},
			dwarfling:{},
			dwarforc:{},
			elfling:{},
			elforc:{},
			orcling:{},
			dwarf:{},
			goblin:{},
			halfling:{},
			welf:{},
			dragonborn:{}
		}
	}
	config.subspecies["helf"]["vastarellian"] = {
		name: "Vastarellian",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Any Common)",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Endurance",
			"Lore (Vastariel)",
			"Dodge",
			"Lore (Any)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Savvy, Suave",
			"Bookish, Warrior Born"
		]
    }
	config.subspecies["helf"]["athossi"] = {
		name: "Athossi",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Any Common)",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Haggle",
			"Endurance",
			"Lore (Athos)",
			"Charm",
			"Lore (Any)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Savvy, Suave",
			"Craftsman (Any), Dealmaker, Nose for Trouble"
		]
    }
	config.subspecies["helf"]["rosewickian"] = {
		name: "Rosewickian",
		skills: [
			"Charm",
			"Art (Any)",
			"Entertain (Acting, Singing or Seduction)",
			"Gossip",
			"Perform (Any)",
			"Play (Any)",
			"Trade (Any)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Rosewick)",
			"Evaluate",
			"Intuition"
		],
		talents: [
			"Attractive, Artistic",
			"Etiquette (any), Gregarious, Read/Write",
			"Suave",
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense"
		]
    }
	config.subspecies["human"]["athossi"] = {
		name: "Athossi",
		skills: [
			"Animal Care",
			"Charm",
			"Cool",
			"Evaluate",
			"Gossip",
			"Haggle",
			"Language (Vastarellian)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Athos)",
			"Melee (Basic)",
			"Ranged (Bow)"
		],
		talents: [
			"Savvy, Suave",
			"Warrior Born, Marksman",
			"Craftsman (Any), Dealmaker, Nose for Trouble",
			3
		]
    }
	config.subspecies["human"]["reiklander"] = {
		name: "Common",
		skills: [
			"Animal Care",
			"Charm",
			"Cool",
			"Evaluate",
			"Gossip",
			"Haggle",
			"Language (Any Common)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Local)",
			"Melee (Basic)",
			"Ranged (Bow)"
		],
		talents: [
			"Savvy, Suave",
			"Argumentative, Fisherman",
			4
		]
    }
	config.subspecies["human"]["tilean"] = {
		name: "Tilean",
		skills: [
			"Charm",
			"Cool",
			"Evaluate",
			"Gossip",
			"Haggle",
			"Language (Khesa)",
			"Language (Any Common)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Local)",
			"Melee (Basic)",
			"Ranged (Bow)"
		],
		talents: [
			"Savvy, Suave",
			"Argumentative, Fisherman",
			4
		]
    }
	config.subspecies["human"]["imperial-tilean"] = {
		name: "Imperial Tilean",
		skills: [
			"Charm",
			"Cool",
			"Evaluate",
			"Gossip",
			"Haggle",
			"Language (Khesa)",
			"Language (Any Common)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Local)",
			"Melee (Basic)",
			"Ranged (Bow)"
		],
		talents: [
			"Savvy, Suave",
			"Argumentative, Fisherman",
			4
		]
    }
	config.subspecies["human"]["rosewickian"] = {
		name: "Rosewickian",
		skills: [
			"Charm",
			"Art (Any)",
			"Entertain (Acting, Singing or Seduction)",
			"Gossip",
			"Perform (Any)",
			"Play (Any)",
			"Trade (Any)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Rosewick)",
			"Evaluate",
			"Intuition"
		],
		talents: [
			"Attractive, Artistic",
			"Etiquette (any), Gregarious",
			"Suave",
			3
		]
    }
	config.subspecies["welf"]["common"] = {
		name: "Common",
		skills: [
			"Athletics",
			"Climb",
			"Endurance",
			"Entertain (Sing)",
			"Intimidate",
			"Language (Any Common)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Ranged (Bow)",
			"Stealth (Rural)",
			"Track"
		],
		talents: [
			"Acute Sense (Sight)",
			"Hardy, Second Sight",
			"Night Vision",
			"Read/Write, Very Resilient",
			"Rover",
			1
		]
    }
	config.subspecies["welf"]["rosewickian"] = {
		name: "Rosewickian",
		skills: [
			"Charm",
			"Ranged (Bow)",
			"Entertain (Acting, Singing or Seduction)",
			"Gossip",
			"Perform (Any)",
			"Play (Any)",
			"Trade (Any)",
			"Language (Any Common)",
			"Leadership",
			"Lore (Rosewick)",
			"Evaluate",
			"Intuition"
		],
		talents: [
			"Attractive, Artistic",
			"Etiquette (any), Gregarious, Read/Write",
			"Suave",
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Hardy"
		]
    }
	config.subspecies["dwarf"]["hillDwarf"] = {
		name: "Hill Dwarf",
		skills: [
			"Consume Alcohol",
			"Cool",
			"Endurance",
			"Entertain (Storytelling)",
			"Evaluate",
			"Intimidate",
			"Language (Any Common)",
			"Lore (Dwarfs)",
			"Lore (Geology)",
			"Lore (Metallurgy)",
			"Melee (Basic)",
			"Trade (any one)"
		],
		talents: [
			"Magic Resistance, Hardy",
			"Night Vision",
			"Read/Write, Relentless",
			"Resolute, Strong-minded",
			"Sturdy",
			1
		]
    }
	config.subspecies["halfling"]["common"] = {
		name: "Common",
		skills: [
			"Charm",
			"Consume Alcohol",
			"Dodge",
			"Gamble",
			"Haggle",
			"Intuition",
			"Language (Any Common)",
			"Lore (Local)",
			"Perception",
			"Sleight of Hand",
			"Stealth (Any)",
			"Trade (Cook)"
		],
		talents: [
			"Acute Sense (Taste)",
			"Night Vision",
			"Resistance (Corruption), Brave",
			"Small",
			3
		]
    }

	mergeObject(game.wfrp4e.config, config)
})