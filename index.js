let play1 = document.getElementById("home");
let play2 = document.getElementById("about");
let play3 = document.getElementById("skill");
let play4 = document.getElementById("contact");

function playMusic()
{
    let audio = new Audio("Click.mp3");
    audio.play()
}


play1.addEventListener("click", playMusic);
play2.addEventListener("click", playMusic);
play3.addEventListener("click", playMusic);
play4.addEventListener("click", playMusic);



function scrollToBottom()
{
    window.scrollTo(0, 6040);
}

function scrollToTop()
{
    window.scrollTo(0, 0);
}