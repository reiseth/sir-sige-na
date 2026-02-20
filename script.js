const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const catGif = document.getElementById("catGif");

let texts = [
    "sir sige na 😗",
    "alam kong mabait kayo sir 🥰",
    "pleaseee uwu 👉👈",
    "love namin kayo sir <3 😘",
    "sir wag nyo na ipilit ang NO 😜"
    
];

let gifs = [
    "https://media.tenor.com/aJeIvS0AuHcAAAAM/cat1.gif", 
    "https://media.tenor.com/W8lPAPMQnU8AAAAM/cat-scared.gif",
    "https://media.tenor.com/JCdmUCqHJo8AAAAM/cat.gif",
    "https://media.tenor.com/_3BqrlB6mVIAAAAm/sad-sad-cat.webp",
    "https://media.tenor.com/0yJbcfwQyu8AAAAM/cry-crying.gif"
];

let index = 0;

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * 100 - 300;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    message.textContent = texts[index];
    catGif.src = gifs[index];

    index = (index + 1) % texts.length;
}

document.getElementById("yesBtn").addEventListener("click", () => {
    message.textContent = "SALAMAT SIR UWU ❤️";
    catGif.src = "https://media.tenor.com/Jd0bY1J9VOoAAAAM/cat-cat-rocked.gif"; // happy cat
});