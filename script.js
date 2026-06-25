function unlockWebsite() {

    const password =
        document.getElementById("password").value;

    if (password === "1225") {

        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

    } else {

        alert("Wrong password ❤️");

    }
}