Hooks.on("setup", () => {
	let config = {
		subspecies: {
			helf:{}
		}
	}
	
	config.subspecies["helf"]["chrace"] = {
		name: "Chrace",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Endurance",
			"Lore (Chrace)",
			"Melee (Two-Handed)",
			"Outdoor Survival"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Very Strong, Very Resilient"
		]
    }	
	config.subspecies["helf"]["eataine"] = {
		name: "Eataine",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Leadership",
			"Lore (Eataine)",
			"Navigation",
			"Sail"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Savvy, Suave"
		]
    }	
	config.subspecies["helf"]["caledor"] = {
		name: "Caledor",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Endurance",
			"Lore (Caledor",
			"Lore (Metallurgy)",
			"Trade (Smith)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Craftsman (Any)"
		]
    }
	config.subspecies["helf"]["ellyrion"] = {
		name: "Ellyrion",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Animal Care",
			"Charm Animal",
			"Lore (Ellyrion)",
			"Ride (Horse)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Animal Affinity, Lightning Reflexes"
		]
    }
	config.subspecies["helf"]["avelorn"] = {
		name: "Avelorn",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Art (Any)",
			"Charm",
			"Lore (Avelorn)",
			"Play (Any)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Attractive, Marksman"
		]
    }
	config.subspecies["helf"]["saphery"] = {
		name: "Saphery",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Languiage (Magick)",
			"Lore (Magick)",
			"Lore (Saphery)",
			"Research"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Petty Magic, Savvy"
		]
    }
	config.subspecies["helf"]["tiranoc"] = {
		name: "Tiranoc",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Drive",
			"Lore (Tiranoc)",
			"Sail",
			"Track"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Sprinter, Strider (Any)"
		]
    }
	config.subspecies["helf"]["nagarythe"] = {
		name: "Nagarythe",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Intimidate",
			"Lore (Nagarythe)",
			"Outdoor Survival",
			"Stealth"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Hatred (Druchii), Warrior Born"
		]
    }
	config.subspecies["helf"]["cothique"] = {
		name: "Cothique",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Lore (Cothique)",
			"Row",
			"Navigation",
			"Sail"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Hardy, Sea Legs"
		]
    }
	config.subspecies["helf"]["yvresse"] = {
		name: "Yvresse",
		skills: [
			"Cool",
			"Entertain (Singing)",
			"Evaluate",
			"Language (Eltharin",
			"Melee (Basic)",
			"Perception",
			"Ranged (Bow)",
			"Swim",
			"Melee (Polearm)",
			"Lore (Yvresse)",
			"Navigation",
			"Sail"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Second Sight, Sixth Sense",
			"Read/Write",
			"Coolheaded, Hatred (Greenskins)"
		]
    }	

	mergeObject(game.wfrp4e.config, config)
})