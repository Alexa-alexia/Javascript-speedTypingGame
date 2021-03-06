window.onload = addEventListener('load', init); 

//Global variables

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'state',
    'generate',
    'stubborn',
    'cocktail',
    'joke',
    'runaway',
    'developer',
    'establishment',
    'work',
    'echo',
    'touch',
    'song',
    'bag',
    'bed',
    'javascript',
    'adapter',
    'siblings',
    'laughter',
    'space',
    'definition', 
    'look',
    'talk'
];

//initialize game
function init(){
    // show number of seconds in UI
    seconds.innerHTML = currentLevel;
     //load word from array
     showWord(words); 
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // check status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }

    // if score is -1, display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }
}

 //pick and show random word
    function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
  //ouput random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
    // make sure time is not run out
    if (time > 0) {
        //Decrement
        time--;
    } else if(time === 0) {
        //Game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}
// check status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}
