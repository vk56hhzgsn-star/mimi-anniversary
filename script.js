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
function updateTimer(){

    const startDate =
        new Date("2025-12-25T00:00:00");

    const now = new Date();

    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();