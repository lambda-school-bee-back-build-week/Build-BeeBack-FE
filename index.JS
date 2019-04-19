

const beeImage  = document.querySelector(".bottom-content-container");
beeImage.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'tan';
    
})
//console.warn(beeImage);


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




// nector sources object
const plants = [
    {
        name: 'Bugleweed',
        type: 'flower',
        gene: 'perennial',
        production: 'minor',
    },
    {
        name: 'Chives',
        type: 'flower',
        gene: 'perennial',
        production: 'minor',
    },
    {
        name: 'Leadwort',
        type: 'flower',
        gene: 'perennial',
        production: 'minor',
    },
    {
        name: 'Milkweed',
        type: 'flower',
        gene: 'perennial',
        production: 'major',
    },
    {
        name: 'Aster',
        type: 'flower',
        gene: 'perennial',
        production: 'major',
    },
    {
        name: 'Borage',
        type: 'flower',
        gene: 'annual',
        production: 'minor',
    },
    {
        name: 'Melon',
        type: 'crop',
        gene: 'annual',
        production: 'minor',
    },
    {
        name: 'Pumpkin',
        type: 'crop',
        gene: 'annual',
        production: 'minor',
    },
    {
        name: 'Fireweed',
        type: 'flower',
        gene: 'perennial',
        production: 'major',
    },
    {
        name: 'Heather',
        type: 'flower',
        gene: 'perennial',
        production: 'minor',
    },
];

// OBJECT

const plantListEl = document.getElementById("plant-list");

// loop through array and append list item to list 
plants.forEach(rec => {
    // create new li element
    const li = document.createElement("li");
    // make list item string
    const rowData = `Name: ${rec.name}, Type: ${rec.type}, Gene: ${rec.gene}, Production: ${rec.production}`;
    // set text in element
    li.innerText = rowData;
    // add element to list
    plantListEl.append(li);
});