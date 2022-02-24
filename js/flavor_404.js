function randomtext() {
    var flavortext = [
        "here\'s a gun, kill a frog!",
        "i hate walls, why do i live here?",
        "it <i>is</i> table season",
        "square enix fans, does this ever happen to you?",
        "grouse?",
        "i\'ll take one corn dog",
        "beep beep, disappointment coming through",
        "i bleeping hate circles!",
        "oh shoot, it\'s a white guy!",
        "to buy video games right now, i have to leave my room?",
        "the wii was home to many wii games and wii games",
        "is that a threat?",
        "yup, it\'s official, i\'m certified worthless",
        "there\'s always next year, verizon",
        "metropolis zone. also known as, \"<b><i>AAAAAAAAAAAAAAAAAAAAAAAAAAAAA</i></b>\"",
        "fire emblem. (silence) <br><br> \"<b><i>AAAAAAAAAAAAAAAAAAAAAAAAAAAAA</i></b>\""
    ];
    return flavortext[Math.floor((Math.random() * flavortext.length))];
}
document.getElementById("flavortext_404").innerHTML = randomtext();

function doTheThing() {
    document.getElementById("flavortext_404").innerHTML = randomtext();
}


// https://twitter.com/ScottWozQuotes