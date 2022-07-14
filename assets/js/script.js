let kucing = document.getElementById("suaraKucing");
let kambing = document.getElementById("suaraKambing");
let kuda = document.getElementById("suaraKuda");

function playSoundCat(){
    kucing.play();
}

function playSoundGoat(){
    kambing.play();
}

function playSoundHorse(){
    kuda.play();
}

let btnUp = document.getElementById('btn-up');

btnUp.addEventListener('click', function(){
    this.scrollTo(0,0);
});