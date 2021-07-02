
class Challenge {
    constructor(challenge, detail = null, img = "../img/cord.png") {
        this.id = null;
        this.challenge = challenge;
        this.img = img;
        this.detail = detail;
        this.completed = false;
    }

    completeChallenge() {
        this.completed = true;
    }
}

// shuffle function
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
