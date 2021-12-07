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
        "is that a threat?"
    ];
    return flavortext[Math.floor((Math.random() * flavortext.length))];
}
document.getElementById("flavortext_404").innerHTML = randomtext();

// https://twitter.com/ScottWozQuotes