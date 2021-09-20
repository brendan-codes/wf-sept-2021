var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.floor(Math.random() * 4);

// console.log(floor);
// console.log(ceiling);
// console.log(random);

function d6() {
    // var roll = Math.random();
    // roll = roll * 6;
    // roll = Math.floor(roll);
    // roll += 1;
    return Math.floor(Math.random() * 6) + 1;
}

// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


var lifesAnswers = [
    "yes",
    "no",
    "maybe so",
    "???"
    // ??
];

function magicEightBall(answers){
    var random = Math.floor(Math.random() * answers.length);
    console.log(answers[random]);
}

magicEightBall(lifesAnswers);