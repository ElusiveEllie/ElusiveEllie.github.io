const oneDay = 24 * 60 * 60 * 1000;
const startDate = new Date(2023, 8, 5);
const currentDate = new Date(new Date().toLocaleDateString());

const diffDays = Math.round(Math.abs((startDate - currentDate) / oneDay));

const stepsAllowed = 150 + diffDays * 100;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function rotateColors(h3Element) {
    const text = h3Element.innerText;
    h3Element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        h3Element.innerHTML =
            h3Element.innerHTML +
            `<a class="color-${(i + 3) % 4}">${text[i]}</a>`;
    }
    while (true) {
        await delay(500);
        h3Element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            h3Element.innerHTML =
                h3Element.innerHTML +
                `<a class="color-${i % 4}">${text[i]}</a>`;
        }
        await delay(500);
        h3Element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            h3Element.innerHTML =
                h3Element.innerHTML +
                `<a class="color-${(i + 1) % 4}">${text[i]}</a>`;
        }
        await delay(500);
        h3Element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            h3Element.innerHTML =
                h3Element.innerHTML +
                `<a class="color-${(i + 2) % 4}">${text[i]}</a>`;
        }
        await delay(500);
        h3Element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            h3Element.innerHTML =
                h3Element.innerHTML +
                `<a class="color-${(i + 3) % 4}">${text[i]}</a>`;
        }
    }
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
