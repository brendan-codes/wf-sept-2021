var monster = {
    id: 1,
    name: "Bulbasaur",
    name: "gary",
    types: ["poison", "grass"],
    details: {
        info: "this is info"
    },
    doStuff: function(){
        console.log(this.name);
    }
};

var key = "name";
console.log(monster[key]);

console.log(monster.types[0]);

console.log(monster.details.info);

monster.doStuff();

// numbers (integers, floats)
// strings
// booleans (true and false)
// arrays [4, 5, 6]
// datetime
// object (dictionaries, hashes, associative arrays)

// key value pairs

