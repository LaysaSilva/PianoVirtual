const keys = document.querySelectorAll('.key');/*Seleciona as classes key*/
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();

}

const handleMouseDown = (key) => {   /*Tecla fica acinzentada ao pressionar*/
    playNote(key.getAttribute('data-note'));


    if(key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    } /*Se a tecla com classe 'black' for pressionada, nada acontece*/
    
    key.style.background = '#ddd'; 

}  

const handleMouseUp = (key) => {

    if(key.className.includes('black')) {
        key.classList.remove('black--pressed'); /*Remove a classe da tecla preta pressionada, voltando ao estado anterior*/
        return;
    } 

    key.style.background = 'white';  /*Tecla fica branca ao soltar*/
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => 
    handleMouseDown(key))
    key.addEventListener('mouseup', () => 
    handleMouseUp(key))

});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;

    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');

});

const keyDownMapper = {
    "a": () => handleMouseDown(keys[0]),
    "q": () => handleMouseDown(keys[1]),
    "s": () => handleMouseDown(keys[2]),
    "w": () => handleMouseDown(keys[3]),
    "d": () => handleMouseDown(keys[4]),
    "f": () => handleMouseDown(keys[5]),
    "e": () => handleMouseDown(keys[6]),
    "g": () => handleMouseDown(keys[7]),
    "r": () => handleMouseDown(keys[8]),
    "h": () => handleMouseDown(keys[9]),
    "t": () => handleMouseDown(keys[10]),
    "j": () => handleMouseDown(keys[11]),
    "k": () => handleMouseDown(keys[12]),
    "y": () => handleMouseDown(keys[13]),
    "l": () => handleMouseDown(keys[14]),
    "u": () => handleMouseDown(keys[15]),
    "ç": () => handleMouseDown(keys[16]),
    "[": () => handleMouseDown(keys[17]),
    "i": () => handleMouseDown(keys[18]),
    "]": () => handleMouseDown(keys[19]),
    "o": () => handleMouseDown(keys[20]),
    "z": () => handleMouseDown(keys[21]),
    "p": () => handleMouseDown(keys[22]),
    "x": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "a": () => handleMouseUp(keys[0]),
    "q": () => handleMouseUp(keys[1]),
    "s": () => handleMouseUp(keys[2]),
    "w": () => handleMouseUp(keys[3]),
    "d": () => handleMouseUp(keys[4]),
    "f": () => handleMouseUp(keys[5]),
    "e": () => handleMouseUp(keys[6]),
    "g": () => handleMouseUp(keys[7]),
    "r": () => handleMouseUp(keys[8]),
    "h": () => handleMouseUp(keys[9]),
    "t": () => handleMouseUp(keys[10]),
    "j": () => handleMouseUp(keys[11]),
    "k": () => handleMouseUp(keys[12]),
    "y": () => handleMouseUp(keys[13]),
    "l": () => handleMouseUp(keys[14]),
    "u": () => handleMouseUp(keys[15]),
    "ç": () => handleMouseUp(keys[16]),
    "[": () => handleMouseUp(keys[17]),
    "i": () => handleMouseUp(keys[18]),
    "]": () => handleMouseUp(keys[19]),
    "o": () => handleMouseUp(keys[20]),
    "z": () => handleMouseUp(keys[21]),
    "p": () => handleMouseUp(keys[22]),
    "x": () => handleMouseUp(keys[23]),

}

document.addEventListener('keydown', (event) => {
    keyDownMapper[event.key]()
    vent.preventDefault();

});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()

});