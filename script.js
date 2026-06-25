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

/* 🌸 EFFECTS */
function startEffects(){

    setInterval(createPetal, 300);
}

/* 🌸 FALLING PETALS */
function createPetal(){

    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";
    petal.style.animationDuration = (3+Math.random()*3)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{petal.remove();},6000);
}