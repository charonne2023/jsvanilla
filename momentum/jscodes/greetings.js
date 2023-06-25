const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault(); // stop the browser from refreshing
  loginForm.classList.add(HIDDEN_CLASSNAME); // hide the form again
  const username = loginInput.value; //save the login input into username
  //greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username); //save username on localstore 
  paintGreetings(username); //call the function and take username as an argument.
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}!`; 
  greeting.classList.remove(HIDDEN_CLASSNAME); // show the greeting
}

//thefirststep
const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //loginForm.classList.add(HIDDEN_CLASSNAME);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
