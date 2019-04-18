const beeIcon = document.querySelector(".beeIcon");
const buttonLight = document.querySelector("button");
const ddButtonLight = document.querySelector(".dropdown-button");

// BEE ICON GROW ON HOVER //////////////////////////////////////////////////////////////////////////////////////////////
beeIcon.addEventListener("mouseover", function( event ) {   
    event.target.style.width = "6rem";
    event.target.style.height = "6.5rem";
  setTimeout(function() {
      event.target.style.width = "";
      event.target.style.height = "";
      }, 500);
    }, false);

// BACKGROUND "LIGHT" FOR BUTTON //////////////////////////////////////////////////////////////////////////////////////
buttonLight.addEventListener("mouseenter", function( event ) {   

    event.target.style.background = "rgb(116, 83, 17)";
    event.target.style.color = "#C7D035";
  setTimeout(function() {
    event.target.style.background = "rgb(116, 83, 17)";
    event.target.style.color = "black";
      
      }, 3000);
    }, false);

    ddButtonLight.addEventListener("click", function( event ) {   
        event.target.style.background = "rgb(116, 83, 17)";
        event.target.style.color = "#C7D035";
    setTimeout(function() {
        event.target.style.background = "rgb(116, 83, 17)";
        event.target.style.color = "black";
        }, 3000);
      }, false);
  
// BEE FACTS DROP DOWN ///////////////////////////////////////////////////////////////////////////////////////////////    
class Dropdown {
        constructor(element) {
          this.element = element;
          this.button = this.element.querySelector('.dropdown-button');          
          this.content = this.element.querySelector('.dropdown-content');
          this.button.addEventListener('click', () => this.toggleContent());
        }
      
toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    const drop = document.querySelector('.dropdown-content');
          if (this.content.classList.contains('dropdown-hidden')) {
            TweenMax.to(drop, 2, {top: -350})
          } else {
            TweenMax.to(drop, 2, {top: 50})
          };
      
        }
      }

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));


let navA = document.querySelectorAll("a");
navA.forEach (element => {
      element.style.background = 'rgb(116, 83, 17)';
      element.style.boxShadow = '0px 0px 5px 5px rgb(56, 34, 6)';
});

let beeInfo = document.querySelectorAll(".dropdown-button");
beeInfo.forEach (element => {
      element.style.background = 'rgb(116, 83, 17)';
      element.style.boxShadow = '0px 0px 5px 5px rgb(56, 34, 6)';
      element.style.marginTop = '0px';
});

let hoverShadow = document.querySelectorAll("form");
hoverShadow.forEach (element => {
      element.style.borderRadius = '15px';
});



