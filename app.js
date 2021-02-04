/* Rules to Folllow
1. Allow User to guess number and submit
2. Display error message if it does not match the random number
3. change border color and color of the error message to red 
4. Display success message if matches
5. Change border color and itself to green 
6. if out of count, we will change the buttton to 'play again'

*/

// declaration
let min = 1,
    max = 10,
    winningNum = getWinningNum();
    guesses = 5;

// grab UI elements

let inputNum = document.querySelector('#input-value'),
    inputBtn = document.querySelector('#input-btn'),
    message = document.querySelector('#small');
    minNum = document.querySelector('#min'),
    maxNum = document.querySelector('#max');
    gameWrapper = document.querySelector('.container');

//  Targetting the whole div to reload the window
gameWrapper.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
    window.location.reload();
    }
})

// Add even listener to  the button upon click
inputBtn.addEventListener('click',runEvent);

function runEvent(){
    let guessNum = parseInt(inputNum.value);

// Validation
    if(isNaN(guessNum) || guessNum < min || guessNum > max){
        setMessage(`Please enter guess between ${min} and ${max}`, 'red');
    }else{
        if(guessNum === winningNum ){
            gameOver(true, `${winningNum} is correct, You Win!`);
        }else{
            guesses--;
            if(guesses === 0){
                gameOver(false, `Game is over! The correct number was ${winningNum}. You lost!`)
            }else{
                inputNum.value = '';
                setMessage(`${guessNum}  is not correct, ${guesses} guesses left.`, 'red')
    
            }
        }
    } 
    
}

// set message to instruct
function setMessage(mssg, color){
    message.textContent = mssg;
    message.style.color = color;
    inputNum.style.borderColor = color;
}

// if won or lost

function gameOver(won, mssg){
    let color;
    won === true ? color ='lime' : color = 'red';
    inputNum.disabled = true;
    // inputBtn.style.borderColor = color;
    inputNum.style.borderColor = color;
    message.style.color = color;
    setMessage(mssg);
//   play again
    inputBtn.textContent = 'Play Again';
    inputBtn.className += 'play-again';
}
//  To get random number
function getWinningNum(){
    return Math.floor(Math.random()*11)
}

// color generator for header

let header = document.querySelector('h2');

function getRandomColor(){
    var color = '#';
    var letter = "0123456789ABCDEF";
    for(var i = 0; i<6; i++){
        color += letter[Math.floor(Math.random()*16)];

    } return color;
}

// Random Color generator
function getColor(){
    let colorInput = getRandomColor();
    header.style.color = colorInput;
}setInterval("getColor()",1000);
