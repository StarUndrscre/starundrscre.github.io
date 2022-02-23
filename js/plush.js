function mobileCheck() {
    var Image_Id = document.getElementById('plush');
    var Text = document.getElementById('mobile-text');
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        Image_Id.style.display = 'none';
        Text.style.display = 'inline';
    }
    else {
        Image_Id.style.display = 'inline';
        Text.style.display = 'none';
    }
}

function squish() {
    var Image_Id = document.getElementById('plush');
    if (Image_Id.src.match("../img/starplush.png")) {
        Image_Id.src = "../img/starplush_squish.png";
    }

    var audio = document.getElementById("squish");    
    document.body.appendChild(audio);
    audio.play();
}

function unsquish() {
    var Image_Id = document.getElementById('plush');
    if (Image_Id.src.match("../img/starplush_squish.png")) {
        Image_Id.src = "../img/starplush.png";
    }
    var audio = document.getElementById("unsquish");    
    document.body.appendChild(audio);
    audio.play();
}

function unsquishNoAud() {
    var Image_Id = document.getElementById('plush');
    if (Image_Id.src.match("../img/starplush_squish.png")) {
        Image_Id.src = "../img/starplush.png";
    }
}