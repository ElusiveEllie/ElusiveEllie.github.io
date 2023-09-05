const oneDay = 24 * 60 * 60 * 1000;
const startDate = new Date(2023, 8, 5);
const currentDate = new Date().setHours(0, 0, 0, 0);

const diffDays = Math.round(Math.abs((startDate - currentDate) / oneDay));

let stepsAllowed = 150 + diffDays * 100;
if (currentDate < startDate) {
    stepsAllowed = 150;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function rotateColors(h3Element) {
    const text = h3Element.innerText;
    const anchors = [];
    h3Element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        const color = i % 4;
        const anchor = document.createElement('a');
        anchor.className = `color-${color}`;
        anchor.dataset.color = color;
        anchor.textContent = text[i]
        h3Element.appendChild(anchor);
        anchors.push(anchor);
    }
    
    setInterval(() => {
        for (const anchor of anchors) {
            const newColor = (Number.parseInt(anchor.dataset.color) + 1) % 4;
            anchor.className = `color-${newColor}`;
            anchor.dataset.color = newColor;
        }
    }, 500);
}

const main = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <h2>You are allowed:</h2>
    <h3>${stepsAllowed} steps!</h3>
    `;
    const h3 = document.querySelector("h3");
    console.log("Made you look");
    rotateColors(h3);
};

window.addEventListener("DOMContentLoaded", main);
