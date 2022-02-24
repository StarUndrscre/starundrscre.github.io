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
        "meri cute <3",
        "dglakjdasjkfahslkdfhsakfjadsjghsdflkadlkfja",
        //"is it all just trickery to you?",
        "i detest trickery",
        "<a href=\"/other/plush\">get your own star plush today</a>",
        "you disingenuous dense motherbleeper",
        "ease {24, 2, outCubic, 20000, \'drunk\'}",
        "???????????????????????????????????????????????????????????????????????",
        "g",
        "onclick=\"perish()\"",
        "wabada",
        "the holds go crazy at the end (they go crazy at the end)",
        "alright, who\'s the wise guy that just signed his own death warrant",
        "pain",
        "<a href=\"/other/plush\"><img class=\"small\" src=\"img/starplush.png\"></a>"
    ];
    return flavortext[Math.floor((Math.random() * flavortext.length))];
}
document.getElementById("flavortext").innerHTML = randomtext();

function doTheThing() {
    document.getElementById("flavortext").innerHTML = randomtext();
}

