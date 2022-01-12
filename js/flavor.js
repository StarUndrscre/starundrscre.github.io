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
        "is that a threat?",
        "do you <i>still</i> remember?",
        "nope, no hints here!",
        "i love video games",
        "srt lore",
        "why is it called \"oisrt tournament\" when its full title<br> is \"\'<b>o</b>nline <b>i</b>nternet <b>s</b>ight <b>r</b>eading <b>t</b>ournament\' tournament\"??????<br>why are there two \
tournaments\"??????????????????????????",
    ];
    return flavortext[Math.floor((Math.random() * flavortext.length))];
}
document.getElementById("flavortext").innerHTML = randomtext();
