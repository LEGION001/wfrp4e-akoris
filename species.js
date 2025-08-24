Hooks.on("setup", () => {
    const WFRP4E = game.wfrp4e.config
    WFRP4E.species["delf"] = "Dark Elf"

    WFRP4E.speciesCharacteristics["delf"] = {
        "ws": "2d10+30",
		"bs": "2d10+30",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+40",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+30",
		"wp": "2d10+30",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["delf"] = [
		"Evaluate",
		"Intimidate",
		"Language (Any Common)",
		"Lore (Torture)",
		"Melee (Basic)",
		"Perception",
		"Ranged (Crossbow or Bow)",
		"Swim",
		"Bribery",
		"Stealth (Underground)",
		"Dodge",
		"Endurance"
    ]

    WFRP4E.speciesTalents["delf"] = [
        "Acute Sense (Sight)",
        "Second Sight, Sixth Sense",
        "Night Vision",
        "Read/Write, Warrior Born",
        "Savvy, Suave",
        1
    ]

    WFRP4E.speciesFate["delf"] = 0;

    WFRP4E.speciesRes["delf"] = 1;

    WFRP4E.speciesExtra["delf"] = 2;

    WFRP4E.speciesMovement["delf"] = 5;

    WFRP4E.speciesAge.delf = "30+10d10"

    WFRP4E.speciesHeight.delf = {
        feet : 5,
        inches : 11,
        die : "1d10"
    }
	
	
	
    WFRP4E.species["orc"] = "Orc"

    WFRP4E.speciesCharacteristics["orc"] = {
		"ws": "2d10+30",
		"bs": "2d10+10",
		"s": "2d10+40",
		"t": "2d10+30",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+10",
		"int": "2d10+20",
		"wp": "2d10+30",
		"fel": "2d10+10"
    }

    WFRP4E.speciesSkills["orc"] = [
		"Animal Care",
		"Athletics",
		"Language (Any Common)",
		"Consume Alcohol",
		"Endurance",
		"Entertain (Storytelling)",
		"Outdoor Survival",
		"Navigation",
		"Play (Drums)",
		"Melee (Basic or Two-Handed)",
		"Ranged (Throwing)",
		"Track"	
    ]

    WFRP4E.speciesTalents["orc"] = [
		"Warrior Born, Very Resilient",
		"Tenacious, Stout-hearted",
		"Relentless, Hardy",
		"Night Vision",
        2
    ]

    WFRP4E.speciesFate["orc"] = 0;

    WFRP4E.speciesRes["orc"] = 3;

    WFRP4E.speciesExtra["orc"] = 2;

    WFRP4E.speciesMovement["orc"] = 4;

    WFRP4E.speciesAge.orc = "15+1d10"

    WFRP4E.speciesHeight.orc = {
		feet: 5,
		inches: 10,
		die: "1d10"
    }

	
	
    WFRP4E.species["gnome"] = "Gnome"

    WFRP4E.speciesCharacteristics["gnome"] = {
		"ws": "2d10+20",
		"bs": "2d10+10",
		"s": "2d10+10",
		"t": "2d10+15",
		"i": "2d10+30",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+30",
		"wp": "2d10+40",
		"fel": "2d10+15"
    }

    WFRP4E.speciesSkills["gnome"] = [
		"Charm",
		"Consume Alcohol",
		"Dodge",
		"Entertain (Any)",
		"Gossip",
		"Haggle",
		"Language (Any Common)",
		"Language (Any Common)",
		"Trade (Any)",
		"Stealth (Urban)",
		"Evaluate",
		"Intuition"	
    ]

    WFRP4E.speciesTalents["gnome"] = [
		"Beneath Notice, Blather, Brave",
		"Craftsman, Super Numerate",
		"Night Vision",
		"Fisherman, Read/Write",
		"Master Tradesman, Gregarious",
		"Small",
        1
    ]

    WFRP4E.speciesFate["gnome"] = 2;

    WFRP4E.speciesRes["gnome"] = 0;

    WFRP4E.speciesExtra["gnome"] = 2;

    WFRP4E.speciesMovement["gnome"] = 3;

    WFRP4E.speciesAge.gnome = "15+10d10"

    WFRP4E.speciesHeight.gnome = {
		feet: 3,
		inches: 5,
		die: "1d10"
    }


	
	
    WFRP4E.species["dragonborn"] = "Dragonborn"

    WFRP4E.speciesCharacteristics["dragonborn"] = {
		"ws": "2d10+25",
		"bs": "2d10+15",
		"s": "2d10+40",
		"t": "2d10+40",
		"i": "2d10+10",
		"ag": "2d10+10",
		"dex": "2d10+10",
		"int": "2d10+20",
		"wp": "2d10+30",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["dragonborn"] = [
		"Athletics",
		"Climb",
		"Endurance",
		"Intimidate",
		"Language (Draconic)",
		"Language (Any Common)",
		"Leadership",
		"Outdoor Survival",
		"Perception",
		"Evaluate",
		"Melee (Any)",
		"Track"	
    ]

    WFRP4E.speciesTalents["dragonborn"] = [
		"Acute Sense (Sight), Acute Sense (Smell)",
		"Very Resilient, Very Strong, Sturdy",
		"Dragonborn Breath",
		"Dragonborn Tail",
		"Dragonborn Scales",
        1
    ]

    WFRP4E.speciesFate["dragonborn"] = 0;

    WFRP4E.speciesRes["dragonborn"] = 1;

    WFRP4E.speciesExtra["dragonborn"] = 1;

    WFRP4E.speciesMovement["dragonborn"] = 4;

    WFRP4E.speciesAge.dragonborn = "15+1d10"

    WFRP4E.speciesHeight.dragonborn = {
		feet: 6,
		inches: 1,
		die: "1d10"
    }


	
	
    WFRP4E.species["halfelf"] = "Half-Elf"

    WFRP4E.speciesCharacteristics["halfelf"] = {
		"ws": "2d10+25",
		"bs": "2d10+25",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+30",
		"ag": "2d10+25",
		"dex": "2d10+25",
		"int": "2d10+25",
		"wp": "2d10+25",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["halfelf"] = [
		"Cool",
		"Leadership",
		"Perception",
		"Ranged (Bow or Crossbow)",
		"Melee (Basic)",
		"Dodge",
		"Intuition",
		"Entertain (Any)",
		"Play (Any)",
		"Language (Elven)",
		"Perform (Any)",
		"Stealth (Any)"	
    ]

    WFRP4E.speciesTalents["halfelf"] = [
		"Acute Sense (Sight), Warrior Born, Marksman",
		"Coolheaded, Savvy, Suave",
		"Night Vision",
		"Second Sight, Sixth Sense, Read/Write",
        2
    ]

    WFRP4E.speciesFate["halfelf"] = 1;

    WFRP4E.speciesRes["halfelf"] = 2;

    WFRP4E.speciesExtra["halfelf"] = 2;

    WFRP4E.speciesMovement["halfelf"] = 4;

    WFRP4E.speciesAge.halfelf = "15+5d10"

    WFRP4E.speciesHeight.halfelf = {
		feet: 5,
		inches: 4,
		die: "1d10"
    }


	
	
    WFRP4E.species["halfdwarf"] = "Half-Dwarf"

    WFRP4E.speciesCharacteristics["halfdwarf"] = {
		"ws": "2d10+25",
		"bs": "2d10+20",
		"s": "2d10+20",
		"t": "2d10+25",
		"i": "2d10+20",
		"ag": "2d10+15",
		"dex": "2d10+25",
		"int": "2d10+20",
		"wp": "2d10+30",
		"fel": "2d10+15"
    }

    WFRP4E.speciesSkills["halfdwarf"] = [
		"Consume Alcohol",
		"Cool",
		"Endurance",
		"Gossip",
		"Haggle",
		"Evaluate",
		"Melee (Basic)",
		"Lore (Local)",
		"Melee (Basic)",
		"Language (Dwarven)",
		"Language (Any Common)",
		"Lore (Dwarfs, Geology or Metallurgy)"	
    ]

    WFRP4E.speciesTalents["halfdwarf"] = [
		"Savvy, Suave",
		"Night Vision",
		"Read/Write, Strong-minded",
		"Sturdy",
        2
    ]

    WFRP4E.speciesFate["halfdwarf"] = 1;

    WFRP4E.speciesRes["halfdwarf"] = 2;

    WFRP4E.speciesExtra["halfdwarf"] = 2;

    WFRP4E.speciesMovement["halfdwarf"] = 4;

    WFRP4E.speciesAge.halfdwarf = "15+5d10"

    WFRP4E.speciesHeight.halfdwarf = {
		feet: 4,
		inches: 6,
		die: "1d10"
    }


	
	
    WFRP4E.species["humanling"] = "Humanling"

    WFRP4E.speciesCharacteristics["humanling"] = {
		"ws": "2d10+15",
		"bs": "2d10+25",
		"s": "2d10+15",
		"t": "2d10+20",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+25",
		"int": "2d10+20",
		"wp": "2d10+25",
		"fel": "2d10+25"
    }

    WFRP4E.speciesSkills["humanling"] = [
		"Charm",
		"Dodge",
		"Gamble",
		"Haggle",
		"Intuition",
		"Language (Halfling)",
		"Lore (Local)",
		"Perception",
		"Slight of Hand",
		"Stealth (Any)",
		"Ranged (Any)",
		"Gossip"	
    ]

    WFRP4E.speciesTalents["humanling"] = [
		"Suave, Marksman",
		"Acute Sense (Taste)",
		"Small",
		"Night Vision",
        3
    ]

    WFRP4E.speciesFate["humanling"] = 2;

    WFRP4E.speciesRes["humanling"] = 1;

    WFRP4E.speciesExtra["humanling"] = 2;

    WFRP4E.speciesMovement["humanling"] = 3;

    WFRP4E.speciesAge.humanling = "15+2d10"

    WFRP4E.speciesHeight.humanling = {
		feet: 3,
		inches: 11,
		die: "1d10"
    }


	
	
    WFRP4E.species["halforc"] = "Half-Orc"

    WFRP4E.speciesCharacteristics["halforc"] = {
		"ws": "2d10+25",
		"bs": "2d10+15",
		"s": "2d10+30",
		"t": "2d10+25",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+15",
		"int": "2d10+20",
		"wp": "2d10+25",
		"fel": "2d10+15"
    }

    WFRP4E.speciesSkills["halforc"] = [
		"Athletics",
		"Endurance",
		"Melee(Basic or Two-Handed)",
		"Outdoor Survival",
		"Animal Care",
		"Intimidate",
		"Leadership",
		"Lore (Local)",
		"Language (Orcish)",
		"Gossip",
		"Cool",
		"Charm"	
    ]

    WFRP4E.speciesTalents["halforc"] = [
		"Savvy, Suave",
		"Warrior Born, Very Resilient",
		"Tenacious, Hardy",
        3
    ]

    WFRP4E.speciesFate["halforc"] = 1;

    WFRP4E.speciesRes["halforc"] = 2;

    WFRP4E.speciesExtra["halforc"] = 2;

    WFRP4E.speciesMovement["halforc"] = 4;

    WFRP4E.speciesAge.halforc = "15+1d10"

    WFRP4E.speciesHeight.halforc = {
		feet: 5,
		inches: 4,
		die: "1d10"
    }


	
	
    WFRP4E.species["dwarfelf"] = "Dwarven-Elf"

    WFRP4E.speciesCharacteristics["dwarfelf"] = {
		 "ws": "2d10+30",
		 "bs": "2d10+25",
		  "s": "2d10+20",
		  "t": "2d10+25",
		  "i": "2d10+30",
		 "ag": "2d10+20",
		"dex": "2d10+30",
		"int": "2d10+25",
		 "wp": "2d10+35",
		"fel": "2d10+15"
    }

    WFRP4E.speciesSkills["dwarfelf"] = [
		"Art (Any)",
		"Athletics",
		"Cool",
		"Dodge",
		"Endurance",
		"Entertain (Storytelling or Singing)",
		"Intuition",
		"Language (Elven)",
		"Language (Dwarven)",
		"Melee (Basic)",
		"Ranged (Bow)",
		"Perception"	
    ]

    WFRP4E.speciesTalents["dwarfelf"] = [
		"Night Vision",
		"Read/Write",
		"Strong-minded, Sixth Sense",
		"Sturdy, Acute Sense (Sight)",
		"Coolheaded, Savvy",
        1
    ]

    WFRP4E.speciesFate["dwarfelf"] = 0;

    WFRP4E.speciesRes["dwarfelf"] = 2;

    WFRP4E.speciesExtra["dwarfelf"] = 2;

    WFRP4E.speciesMovement["dwarfelf"] = 4;

    WFRP4E.speciesAge.dwarfelf = "25+10d10"

    WFRP4E.speciesHeight.dwarfelf = {
		feet: 5,
		inches: 1,
		die: "1d10"
    }


	
	
    WFRP4E.species["dwarfling"] = "Dwarfling"

    WFRP4E.speciesCharacteristics["dwarfling"] = {
		 "ws": "2d10+20",
		 "bs": "2d10+25",
		  "s": "2d10+15",
		  "t": "2d10+25",
		  "i": "2d10+20",
		 "ag": "2d10+15",
		"dex": "2d10+30",
		"int": "2d10+20",
		 "wp": "2d10+35",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["dwarfling"] = [
		"Consume Alcohol",
		"Gamble",
		"Cool",
		"Endurance",
		"Dodge",
		"Perception",
		"Slight of Hand",
		"Stealth (Any)",
		"Language (Halfling)",
		"Language (Dwarven)",
		"Intuition",
		"Haggle"	
    ]

    WFRP4E.speciesTalents["dwarfling"] = [
		"Night Vision",
		"Acute Sense (Taste), Hardy",
		"Sturdy, Strong-Minded",
		"Small",
        3
    ]

    WFRP4E.speciesFate["dwarfling"] = 1;

    WFRP4E.speciesRes["dwarfling"] = 1;

    WFRP4E.speciesExtra["dwarfling"] = 2;

    WFRP4E.speciesMovement["dwarfling"] = 3;

    WFRP4E.speciesAge.dwarfling = "15+7d10"

    WFRP4E.speciesHeight.dwarfling = {
		feet: 3,
		inches: 8,
		die: "1d10"
    }


	
	
    WFRP4E.species["dwarforc"] = "Dwarven-Orc"

    WFRP4E.speciesCharacteristics["dwarforc"] = {
		"ws": "2d10+30",
		 "bs": "2d10+15",
		  "s": "2d10+30",
		  "t": "2d10+30",
		  "i": "2d10+20",
		 "ag": "2d10+15",
		"dex": "2d10+20",
		"int": "2d10+20",
		 "wp": "2d10+35",
		"fel": "2d10+10"
    }

    WFRP4E.speciesSkills["dwarforc"] = [
		"Athletics",
		"Consume Alcohol",
		"Endurance",
		"Intimidate",
		"Melee (Basic or Two-Handed)",
		"Perception",
		"Language (Dwarven)",
		"Language (Orcish)",
		"Outdoor Survival",
		"Lore (Geology)",
		"Entertain (Storytelling)",
		"Cool"	
    ]

    WFRP4E.speciesTalents["dwarforc"] = [
		"Resolute, Strong-minded",
		"Relentless, Hardy",
		"Stout-hearted, Tenacious",
		"Sturdy",
		"Night Vision",
        1
    ]

    WFRP4E.speciesFate["dwarforc"] = 0;

    WFRP4E.speciesRes["dwarforc"] = 2;

    WFRP4E.speciesExtra["dwarforc"] = 2;

    WFRP4E.speciesMovement["dwarforc"] = 4;

    WFRP4E.speciesAge.dwarforc = "15+5d10"

    WFRP4E.speciesHeight.dwarforc = {
		feet: 5,
		inches: 0,
		die: "1d10"
    }


	
	
    WFRP4E.species["elfling"] = "Elfling"

    WFRP4E.speciesCharacteristics["elfling"] = {
		 "ws": "2d10+20",
		 "bs": "2d10+30",
		  "s": "2d10+15",
		  "t": "2d10+20",
		  "i": "2d10+30",
		 "ag": "2d10+25",
		"dex": "2d10+30",
		"int": "2d10+25",
		 "wp": "2d10+30",
		"fel": "2d10+25"
    }

    WFRP4E.speciesSkills["elfling"] = [
		"Cool",
		"Charm",
		"Consume Alcohol",
		"Language (Elven)",
		"Language (Halfling)",
		"Entertain (Sing)",
		"Leadership",
		"Melee (Basic)",
		"Ranged (Bow)",
		"Navigation",
		"Dodge",
		"Intuition"	
    ]

    WFRP4E.speciesTalents["elfling"] = [
		"Coolheaded, Savvy",
		"Acute Sense (Sight), Acute Sense (Taste)",
		"Night Vision",
		"Second Sight, Sixth Sense, Read/Write",
        2
    ]

    WFRP4E.speciesFate["elfling"] = 0;

    WFRP4E.speciesRes["elfling"] = 1;

    WFRP4E.speciesExtra["elfling"] = 3;

    WFRP4E.speciesMovement["elfling"] = 4;

    WFRP4E.speciesAge.elfling = "25+7d10"

    WFRP4E.speciesHeight.elfling = {
		feet: 4,
		inches: 6,
		die: "1d10"
    }


	
	
    WFRP4E.species["elforc"] = "Elven-Orc"

    WFRP4E.speciesCharacteristics["elforc"] = {
		 "ws": "2d10+30",
		 "bs": "2d10+20",
		  "s": "2d10+30",
		  "t": "2d10+25",
		  "i": "2d10+30",
		 "ag": "2d10+25",
		"dex": "2d10+20",
		"int": "2d10+25",
		 "wp": "2d10+30",
		"fel": "2d10+15"
    }

    WFRP4E.speciesSkills["elforc"] = [
		"Athletics",
		"Cool",
		"Entertain (Any)",
		"Melee (Basic or Two-Handed)",
		"Ranged (Bow or Throwing)",
		"Language (Elven)",
		"Language (Orcish)",
		"Perception",
		"Outdoor Survival",
		"Endurance",
		"Intimidate",
		"Climb"	
    ]

    WFRP4E.speciesTalents["elforc"] = [
		"Night Vision",
		"Hardy, Relentless",
		"Second Sight, Tenacious",
		"Rover, ",
		"Warrior Born, Very Resilient, Read/Write",
        1
    ]

    WFRP4E.speciesFate["elforc"] = 0;

    WFRP4E.speciesRes["elforc"] = 2;

    WFRP4E.speciesExtra["elforc"] = 2;

    WFRP4E.speciesMovement["elforc"] = 4;

    WFRP4E.speciesAge.elforc = "25+5d10"

    WFRP4E.speciesHeight.elforc = {
		feet: 5,
		inches: 11,
		die: "1d10"
    }


	
	
    WFRP4E.species["orcling"] = "Orcling"

    WFRP4E.speciesCharacteristics["orcling"] = {
		 "ws": "2d10+20",
		 "bs": "2d10+20",
		  "s": "2d10+25",
		  "t": "2d10+25",
		  "i": "2d10+20",
		 "ag": "2d10+20",
		"dex": "2d10+20",
		"int": "2d10+20",
		 "wp": "2d10+30",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["orcling"] = [
		"Athletics",
		"Consume Alcohol",
		"Dodge",
		"Endurance",
		"Language (Halfling)",
		"Language (Orcish)",
		"Melee (Basic or Two-Handed)",
		"Ranged (Any)",
		"Charm",
		"Gossip",
		"Intuition",
		"Lore (Local)"	
    ]

    WFRP4E.speciesTalents["orcling"] = [
		"Night Vision",
		"Acute Sense (Taste), Relentless",
		"Warrior Born, Very Resilient",
		"Tenacious, Stout-Hearted",
        2
    ]

    WFRP4E.speciesFate["orcling"] = 0;

    WFRP4E.speciesRes["orcling"] = 2;

    WFRP4E.speciesExtra["orcling"] = 3;

    WFRP4E.speciesMovement["orcling"] = 4;

    WFRP4E.speciesAge.orcling = "15+2d10"

    WFRP4E.speciesHeight.orcling = {
		feet: 4,
		inches: 5,
		die: "1d10"
    }


	
	
    WFRP4E.species["dwarf"] = "Dwarf"

    WFRP4E.speciesCharacteristics["dwarf"] = {
		"ws": "2d10+30",
		"bs": "2d10+20",
		"s": "2d10+20",
		"t": "2d10+30",
		"i": "2d10+20",
		"ag": "2d10+10",
		"dex": "2d10+30",
		"int": "2d10+20",
		"wp": "2d10+40",
		"fel": "2d10+10"
    }

    WFRP4E.speciesSkills["dwarf"] = [
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
    ]

    WFRP4E.speciesTalents["dwarf"] = [
		"Magic Resistance, Hardy",
		"Night Vision",
		"Read/Write, Relentless",
		"Resolute, Strong-minded",
		"Sturdy",
        1
    ]

    WFRP4E.speciesFate["dwarf"] = 0;

    WFRP4E.speciesRes["dwarf"] = 2;

    WFRP4E.speciesExtra["dwarf"] = 2;

    WFRP4E.speciesMovement["dwarf"] = 3;

    WFRP4E.speciesAge.dwarf = "15+10d10"

    WFRP4E.speciesHeight.dwarf = {
		feet: 4,
		inches: 3,
		die: "1d10"
    }

	
	
	
    WFRP4E.species["halfling"] = "Halfling"

    WFRP4E.speciesCharacteristics["halfling"] = {
		"ws": "2d10+10",
		"bs": "2d10+30",
		"s": "2d10+10",
		"t": "2d10+20",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+30",
		"int": "2d10+20",
		"wp": "2d10+30",
		"fel": "2d10+30"
    }

    WFRP4E.speciesSkills["halfling"] = [
		"Charm",
		"Consume Alcohol",
		"Dodge",
		"Gamble",
		"Haggle",
		"Ranged (Sling)",
		"Language (Any Common)",
		"Lore (Local)",
		"Perception",
		"Sleight of Hand",
		"Stealth (Any)",
		"Trade (Cook)"
    ]

    WFRP4E.speciesTalents["halfling"] = [
		"Acute Sense (Taste)",
		"Night Vision",
		"Resistance (Corruption), Brave",
		"Small",
        3
    ]

    WFRP4E.speciesFate["halfling"] = 3;

    WFRP4E.speciesRes["halfling"] = 0;

    WFRP4E.speciesExtra["halfling"] = 2;

    WFRP4E.speciesMovement["halfling"] = 3;

    WFRP4E.speciesAge.halfling = "15+1d10"

    WFRP4E.speciesHeight.halfling = {
		feet: 3,
		inches: 1,
		die: "1d10"
    }


	
	
    WFRP4E.species["goblin"] = "Goblin"

    WFRP4E.speciesCharacteristics["goblin"] = {
		"ws": "2d10+20",
		"bs": "2d10+20",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+30",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+20",
		"wp": "2d10+20",
		"fel": "2d10+10"
    }

    WFRP4E.speciesSkills["goblin"] = [
		"Consume Alcohol",
		"Cool",
		"Endurance",
		"Dodge",
		"Evaluate",
		"Athletics",
		"Ranged (Bow)",
		"Climb",
		"Stealth (Any)",
		"Set Trap",
		"Melee (Basic)",
		"Outdoor Survival"
    ]

    WFRP4E.speciesTalents["goblin"] = [
		"Brave, Nimble Fingered",
		"Fleet Footed, Strider",
		"Step Aside, Jump Up",
		"Coolheaded, Lightning Reflexes",
		"Small",
        1
    ]

    WFRP4E.speciesFate["goblin"] = 1;

    WFRP4E.speciesRes["goblin"] = 2;

    WFRP4E.speciesExtra["goblin"] = 2;

    WFRP4E.speciesMovement["goblin"] = 3;

    WFRP4E.speciesAge.goblin = "10+1d10"

    WFRP4E.speciesHeight.goblin = {
		feet: 3,
		inches: 3,
		die: "1d10"
    }


	
	
    WFRP4E.species["human"] = "Human"

    WFRP4E.speciesCharacteristics["human"] = {
		"ws": "2d10+20",
		"bs": "2d10+20",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+20",
		"int": "2d10+20",
		"wp": "2d10+20",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["human"] = [
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
    ]

    WFRP4E.speciesTalents["human"] = [
		"Savvy, Suave",
		"Argumentative, Fisherman",
		4
    ]

    WFRP4E.speciesFate["human"] = 2;

    WFRP4E.speciesRes["human"] = 1;

    WFRP4E.speciesExtra["human"] = 3;

    WFRP4E.speciesMovement["human"] = 4;

    WFRP4E.speciesAge.human = "15+1d10"

    WFRP4E.speciesHeight.human = {
		feet: 4,
		inches: 9,
		die: "2d10"
    }


	
	
    WFRP4E.species["helf"] = "High Elf"

    WFRP4E.speciesCharacteristics["helf"] = {
		"ws": "2d10+30",
		"bs": "2d10+30",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+40",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+30",
		"wp": "2d10+30",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["helf"] = [
		"Cool",
		"Entertain (Sing)",
		"Evaluate",
		"Language (Any Common)",
		"Leadership",
		"Melee (Basic)",
		"Navigation",
		"Perception",
		"Play (any one)",
		"Ranged (Bow)",
		"Sail",
		"Swim"
    ]

    WFRP4E.speciesTalents["helf"] = [
		"Acute Sense (Sight)",
		"Coolheaded, Savvy",
		"Night Vision",
		"Second Sight, Sixth Sense",
		"Read/Write",
		1
    ]

    WFRP4E.speciesFate["helf"] = 0;

    WFRP4E.speciesRes["helf"] = 1;

    WFRP4E.speciesExtra["helf"] = 2;

    WFRP4E.speciesMovement["helf"] = 5;

    WFRP4E.speciesAge.helf = "30+10d10"

    WFRP4E.speciesHeight.helf = {
		feet: 5,
		inches: 11,
		die: "1d10"
    }


	
	
    WFRP4E.species["welf"] = "Wood Elf"

    WFRP4E.speciesCharacteristics["welf"] = {
		"ws": "2d10+30",
		"bs": "2d10+30",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+40",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+30",
		"wp": "2d10+30",
		"fel": "2d10+20"
    }

    WFRP4E.speciesSkills["welf"] = [
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
    ]

    WFRP4E.speciesTalents["welf"] = [
		"Acute Sense (Sight)",
		"Hardy, Second Sight",
		"Night Vision",
		"Read/Write, Very Resilient",
		"Rover",
		1
    ]

    WFRP4E.speciesFate["welf"] = 0;

    WFRP4E.speciesRes["welf"] = 1;

    WFRP4E.speciesExtra["welf"] = 2;

    WFRP4E.speciesMovement["welf"] = 5;

    WFRP4E.speciesAge.welf = "30+10d10"

    WFRP4E.speciesHeight.welf = {
		feet: 5,
		inches: 11,
		die: "1d10"
    }
	

});