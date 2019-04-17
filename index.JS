

const beeImage  = document.querySelector(".bottom-content-container");
beeImage.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'tan';
    
})
console.warn(beeImage);


const button = document.querySelectorAll(".button");
button.forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.style.fontSize = '35px';
        e.target.style.backgroundColor = '#5a4800';
    })
})

const change = document.querySelector("header");
window.addEventListener('scroll', () => {
    change.style.backgroundColor = '#B49156';
})
console.log(change)




// bee populations decline
// const years = [
//     {
//         year: '1880',
//         population: '10,200,000'
//     },
//     {
//         year: '1930',
//         population: '4,800,000'
//     }
// ];