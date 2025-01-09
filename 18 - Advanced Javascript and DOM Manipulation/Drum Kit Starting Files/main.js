// addeventlistener for click events
document.querySelectorAll('.js-drum-pad').forEach(drum => {
    drum.addEventListener('click', function () {
        assignSounds(this.textContent).play(); // this command is use to play() the audio
        buttonAnimation(this.textContent);
    });
});

// addeventlistener for keydown events
document.addEventListener('keydown', function (e) {
    try {
        assignSounds(e.key).play();
    } catch (error) {
        console.log(e.key, 'is not a valid key');
    }
    buttonAnimation(e.key);
});

function assignSounds(key) {
    switch (key) {
        case 'w':
            return new Audio('./sounds/tom-1.mp3');
        case 'a':
            return new Audio('./sounds/tom-2.mp3');
        case 's':
            return new Audio('./sounds/tom-3.mp3');
        case 'd':
            return new Audio('./sounds/tom-4.mp3');
        case 'j':
            return new Audio('./sounds/snare.mp3');
        case 'k':
            return new Audio('./sounds/crash.mp3');
        case 'l':
            return new Audio('./sounds/kick-bass.mp3');
        default:
            return key;
    }
}
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}