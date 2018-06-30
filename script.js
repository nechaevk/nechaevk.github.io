const keyboard = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''], ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']];

const notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];

function createLayout() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            let button = document.createElement('button');
            button.innerHTML = keyboard[i][j];
            if (i == 0) {
                if (j > 6) {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j % 7])
                } else {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j])
                }
                const up = document.querySelector(".top")
                up.appendChild(button, up.firstChild);
            } else if (i == 1) {
                if (j > 6) {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j % 7])
                } else {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j])
                }
                const mid = document.querySelector(".mid")
                mid.appendChild(button, mid.firstChild);
                button.className = "middlerow button";
            } else if (i == 2) {
                if (j > 6) {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j % 7])
                } else {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j])
                }
                const bot = document.querySelector(".bot")
                bot.appendChild(button, bot.firstChild);
                button.className = "bottomrow button";
            }
        }
    }
}

const checker = document.querySelector(".checkBox");

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};


const buttons = Array.from(document.querySelectorAll("button"));
const temp = document.querySelector(".output")

function callback() {

    let letter = event.key;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            if (letter == keyboard[i][j]) {
                temp.innerHTML += letter;
                if (i == 0) {
                    const findAllClass = document.querySelectorAll(".toprow");
                    findAllClass[j].className = "toprow button keyboard__btn--active";

                    if (checker.checked == true) {
                        let note = findAllClass[j].getAttribute('data-note');
                        playSound(note);
                    }


                } else if (i == 1) {
                    const findAllClass = document.querySelectorAll(".middlerow");
                    findAllClass[j].className = "middlerow button keyboard__btn--active";
                    if (checker.checked == true) {
                        let note = findAllClass[j].getAttribute('data-note');
                        playSound(note);
                    }
                } else {
                    const findAllClass = document.querySelectorAll(".bottomrow");
                    findAllClass[j].className = "bottomrow button keyboard__btn--active";
                    if (checker.checked == true) {
                        let note = findAllClass[j].getAttribute('data-note');
                        playSound(note);
                    }
                }
            }
        }
    }
    window.addEventListener("keyup", callOut);
}

function callOut() {
    let findClassToRemove = document.querySelector(".keyboard__btn--active");
    findClassToRemove.classList.remove("keyboard__btn--active");
}

window.addEventListener("keydown", callback);
createLayout();