function randomtext() {
    var flavortext = [
        "i\'m making mac and cheese, and nobody can stop me",
        "and you\'re watching disney channel",
        "i hate walls, why do i live here?",
        "not big soup rice.",
        "it\'s probably not a problem, probably",
        "rescued at last! thank god you\'re here!",
        "you\'ll never hit me! you\'ll never hit my tiny little head!",
        "it\'s pronounced \"star-under-score\"",
        "non-binary rights",
        "the wii was home to many wii games and wii games",
        "is that a threat?"
    ];
    return flavortext[Math.floor((Math.random() * flavortext.length))];
}
document.getElementById("flavortext").innerHTML = randomtext();