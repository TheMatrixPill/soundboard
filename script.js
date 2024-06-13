//Year for Copyrighthttp://127.0.0.1:3000/index.html
document.getElementById("year").innerHTML = new Date().getFullYear();

//Detecting Button press
let soundButtons = document.querySelectorAll(".button-74");
for (let i = 0; i < soundButtons.length; i++) {
    soundButtons[i].addEventListener("click", function () {
        this.style.color = "white"; //pressed Buttons getting white
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
    })
}

const darkModeSettingName = "isDarkMode";

document.getElementById("darkModeToggle").addEventListener("click", (e) => {
    darkMode(e.target.checked);
    localStorage.setItem(darkModeSettingName, e.target.checked);
});

const localDarkModeSetting = localStorage.getItem(darkModeSettingName) == "true";
if (localDarkModeSetting) {
    document.getElementById("darkModeToggle").checked = true;
    darkMode(true);
}

//Detecting Key Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "q":
            playAudio("Sounds/Maik-Zeit-zu-flippen.mp3", [spin, maikBack]);
            break;
        case "w":
            playAudio("Sounds/woJakob.mp3");
            break;
        case "e":
            playAudio("Sounds/michaelZittert.mp3");
            break;
        case "r":
            playAudio("Sounds/Kathi.mp3", pink);
            break;
        case "t":
            playAudio("Sounds/Eugen.mp3", russia);
            break;
        case "z":
            playAudio("Sounds/JakobDabbed.mp3", dabBack);
            break;
        case "u":
            playAudio("Sounds/Mert.mp3", mertBack);
            break;
        case "i":
            playAudio("Sounds/niklasDabbed.mp3", dabBack);
            break;
        case "o":
            playAudio("Sounds/maikDabbed.mp3", dabBack);
            break;
        case "p":
            playAudio("Sounds/moinEugen.mp3");
            break;
        case "ü":
            playAudio("Sounds/danko.mp3");
            break;
        case "a":
            playAudio("Sounds/russeEugen.mp3", russia);
            break;
        case "s":
            playAudio("Sounds/like.mp3");
            break;
        default: console.log(key);
    }
}

function playAudio(src, onPlay) {
    let audioElement = new Audio(src);
    let onEnd = [];
    let actions = [];
    if(!Array.isArray(onPlay))
        actions = [onPlay];
    else
        actions = onPlay;

    audioElement.addEventListener("loadeddata", () => {
        if (actions.length > 0)
            onEnd = actions.map(action => action());
        audioElement.play();
    });

    audioElement.addEventListener("ended", () => {
        if (onEnd.length > 0)
            onEnd.forEach(action => action ? action() : {});
    });
}

//Darkmode - getting triggerd by switch button
function darkMode(isDark) {
    document.getElementsByTagName('body')[0].classList.toggle("darkMode", isDark);
}

//durchsucht die h3 titel
function search() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let x = document.querySelectorAll('.tile');
    x.forEach((item) => {
        if (!item.querySelector('h3').innerHTML.toLocaleLowerCase().includes(input)) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    })
}

//custom backgrounds
function spin() {
    let classList = document.getElementsByTagName('body')[0].classList;
    classList.add("spin");
    return () => { classList.remove("spin"); }
}

function russia() {
    const classList = document.getElementsByTagName('body')[0].classList
    classList.add("russia");
    return () => { classList.remove("russia"); }
}

function pink() {
    const classList = document.getElementsByTagName('body')[0].classList;
    classList.add("pinkMode");
    return () => {
        classList.remove("pinkMode");
    }
}

function mertBack() {
    const classList = document.getElementsByTagName('body')[0].classList;
    classList.add("mertBackground");
    return () => {
        classList.remove("mertBackground");
    }
}

function maikBack() {
    const classList = document.getElementsByTagName('body')[0].classList;
    classList.add("maikBackground");
    return () => {
        classList.remove("maikBackground");
    }
}

function dabBack() {
    const classList = document.getElementsByTagName('body')[0].classList;
    classList.add("dabMode");
    return () => {
        classList.remove("dabMode");
    }
}