const type_advantage_chart = {
    "Normal": {
      "Rock": 0.5, "Ghost": 0, "Steel": 0.5
    },
    "Fire": {
      "Fire": 0.5, "Water": 0.5, "Grass": 2, "Ice": 2,"Bug": 2, "Rock": 0.5, "Steel": 2
    },
    "Water": {
        "Fire": 2, "Water": 0.5, "Grass": 0.5,"Ground": 2,"Rock": 2,"Dragon": 0.5
    },
    "Electric": {
      "Water": 2, "Electric": 0.5, "Grass": 0.5, "Ground": 0, "Flying": 2,"Dragon": 0.5
    },
    "Grass": {
      "Fire": 0.5, "Water": 2,"Grass": 0.5,"Poison": 0.5, "Ground": 2, "Flying": 0.5,"Bug": 0.5, "Rock": 2,"Dragon": 0.5,"Steel": 0.5,
    },
    "Ice": {
        "Fire": 0.5, "Water": 0.5,"Grass": 2, "Ice": 0.5,"Ground": 2, "Flying": 2,"Dragon": 2,"Steel": 0.5,
    },
    "Fighting": {
        "Normal": 2, "Ice": 2, "Rock": 2, "Dark": 2, "Steel": 2, "Bug": 0.5, "Psychic": 0.5, "Fairy": 0.5, "Flying": 0.5, "Poison": 0.5, "Ghost": 0
    },
    "Poison": {
        "Grass": 2, "Fairy": 2, "Fighting": 0.5, "Poison": 0.5, "Bug": 0.5, "Rock": 0.5, "Ghost": 0.5, "Ground": 0.5, "Steel": 0
    },
    "Ground": {
        "Fire": 2, "Electric": 2, "Poison": 2, "Rock": 2, "Steel": 2, "Bug": 0.5, "Grass": 0.5, "Flying": 0
    },
    "Flying": { 
        "Grass": 2, "Fighting": 2, "Bug": 2, "Electric": 0.5, "Rock": 0.5, "Steel": 0.5,
    },
    "Psychic": {
        "Fighting": 2, "Poison": 2, "Psychic": 0.5, "Steel": 0.5, "Dark": 0
    },
    "Bug": { 
        "Grass": 2, "Psychic": 2, "Dark": 2, "Fire": 0.5, "Fighting": 0.5, "Poison": 0.5, "Flying": 0.5, "Ghost": 0.5, "Steel": 0.5, "Fairy": 0.5
    },
    "Rock": { 
        "Fire": 2, "Ice": 2, "Flying": 2, "Bug": 2, "Fighting": 0.5, "Ground": 0.5, "Steel": 0.5,
      },
    "Ghost": { 
        "Psychic": 2, "Ghost": 2, "Dark": 0.5, "Normal": 0,
    },
    "Dragon": { 
        "Dragon": 2, "Steel": 0.5, "Fairy": 0
    },
    "Dark": { 
        "Psychic": 2, "Ghost": 2, "Fighting": 0.5, "Dark": 0.5, "Fairy": 0.5,
    },
      "Steel": { 
        "Ice": 2, "Rock": 2, "Fairy": 2, "Steel": 0.5, "Fire": 0.5, "Water": 0.5, "Electric": 0.5,
    },
      "Fairy": { 
        "Fighting": 2, "Dragon": 2, "Dark": 2, "Poison": 0.5, "Steel": 0.5, "Fire": 0.5,
    }
};

function type_advantage(attacker, defender) {
    var attacker_type = attacker.type[Math.floor(Math.random() * attacker.type.length)];
    console.log("attacker type: " + attacker_type)
    var multiplier = 1;
    console.log("defender:" + defender.type)
    for (defender_type of defender.type) {
        console.log("defender type: " + defender_type)
        var adv = type_advantage_chart[attacker_type][defender_type]
        console.log("adv "+adv);
        if (!isNaN(adv)) {
            multiplier *= adv;
        }
    }

    console.log("multiplier:"+multiplier)
    return multiplier;
}

