//selecting button
var numberOfButtons = document.querySelectorAll(".string").length;

//doing sound and adding class by clicking
for(let i=0;i<numberOfButtons;i++) {
  document.querySelectorAll(".string")[i].addEventListener("click", function() {
    
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      animationButton(buttonInnerHTML);
})}

//doing sound and adding class by pressing buttons
document.addEventListener("keydown",(event) => {
  makeSound(event.key);
  animationButton(event.key);
})

//switch case to make sounds
function makeSound(key) {
  
  switch (key) {
    case "d":
      var stringThree = new Audio("sounds/stringThree.mp3");
      stringThree.play();
      break;
    case "j":
      var stringFour = new Audio("sounds/stringFour.mp3");
      stringFour.play();
      break;
    case "k":
      var stringFive = new Audio("sounds/stringFive.mp3");
      stringFive.play();
      break;
    case "l":
      var stringSix = new Audio("sounds/stringSix.mp3");
      stringSix.play();
      break;
    case "a":
      var stringOne = new Audio("sounds/stringOne.mp3");
      stringOne.play();
      break;
    case "s":
      var stringTwo = new Audio("sounds/stringTwo.mp3");
      stringTwo.play();
      break;
    default:
      break;
  }
}

//adding class to images when buttons are clicked or pressed
function animationButton(currentKey) {
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

    //removing class
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}