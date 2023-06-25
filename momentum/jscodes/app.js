const form = document.querySelector(".form");
const play = document.querySelector(".play");
const guess = document.querySelector(".guess");
const show = document.querySelector(".show");
const result = document.querySelector(".result");

function PlayNumberGame(event) {
  event.preventDefault(); // stop the browser from refreshing

  let typedNumber = play.value;
  typedNumber = parseInt(typedNumber);
  console.log(typedNumber)
  const randomNumber = Math.ceil(Math.random() * typedNumber +1);
  let myGuess = guess.value;
  console.log(myGuess)
  console.log(randomNumber)
  
  if (typedNumber < myGuess){
    alert("type a number within the range, please");
    return;
  } 

  show.innerHTML = `You chose: ${myGuess}, the machine chose: ${randomNumber}`;

  if (randomNumber === parseInt(myGuess)){
    result.innerHTML = "You win!"; 
    } else{
    result.innerText = "You lost!";
    }
}

form.addEventListener("submit", PlayNumberGame);
