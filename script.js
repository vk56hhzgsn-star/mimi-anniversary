function unlockWebsite() {

    const password =
        document.getElementById("password").value;

    if (password === "1225") {

        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        startEffects();

    } else {

        alert("Wrong password ❤️");

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