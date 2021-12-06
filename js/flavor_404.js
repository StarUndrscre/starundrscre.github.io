function randomtext() {
    var flavortext = [
        "here\'s a gun, kill a frog!",
        "i hate walls, why do i live here?",
        "it <i>is</i> table season",
        "square enix fans, does this ever happen to you?",
        "grouse?",
        "i\'ll take one corn dog"
    ];
    return flavortext[Math.floor((Math.random() * flavortext.length))];
}
document.getElementById("flavortext_404").innerHTML = randomtext();