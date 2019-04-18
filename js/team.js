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
