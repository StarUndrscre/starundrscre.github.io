fetch('https://raw.githubusercontent.com/StarUndrscre/starundrscre-megapack/main/version.txt')
    .then(response => response.text())
    .then((data) => document.getElementById("version").innerHTML = (data))