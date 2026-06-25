function unlockWebsite() {

    const password =
        document.getElementById("password").value;

    if (password === "1225") {

        createHeartBurst();

        setTimeout(() => {

            document.getElementById("lockScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
            
            

        }, 1200);

    } else {

        alert("Wrong password ❤️");

    }
}
function createHeartBurst(){

    for(let i=0;i<40;i++){

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random()*100 + "vw";

        heart.style.bottom =
            "0px";

        heart.style.animationDuration =
            (1 + Math.random()*2) + "s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },3000);
    }
}

/* 🌸 PETALS */
function startEffects(){

    setInterval(createPetal, 250);
}

function createPetal(){

    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";
    petal.style.animationDuration = (3+Math.random()*3)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{petal.remove();},6000);
}
function updateTimer() {

    const timer = document.getElementById("timer");

    if (!timer) return;

    const startDate = new Date("2025-12-25T00:00:00");
    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        timer.innerHTML = "Our journey begins on 25 Dec 2025 ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();

function openLetter(){

    document
        .getElementById("loveLetter")
        .classList.toggle("show");
}
function openImage(src){

    document.getElementById("fullImage").src = src;

    document.getElementById("imageViewer")
        .style.display = "flex";
}

function closeImage(){

    document.getElementById("imageViewer")
        .style.display = "none";
}
const message =
"Mimi, you are my favorite place in the world ❤️";

let i = 0;

function typeMessage(){

    if(i < message.length){

        document.getElementById("typingText")
            .innerHTML += message.charAt(i);

        i++;

        setTimeout(typeMessage,70);
    }
}

setTimeout(typeMessage,1500);

let musicPlaying = false;

function toggleMusic(){

    const song =
        document.getElementById("song");

    if(musicPlaying){
        song.pause();
    }else{
        song.play();
    }

    musicPlaying = !musicPlaying;
}