const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesSize = 1;

yesBtn.addEventListener("click", () => {
    question.innerHTML = "💖 Aaaa! i like you to! 💖";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";


    noBtn.style.display = "none";
    // 🌹 Hujan bunga mawar
const flowers = ["🌹", "🌺", "🌸", "🌷", "💮"];

for (let i = 0; i < 80; i++) {

    const flower = document.createElement("div");

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.position = "fixed";
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = "-60px";
    flower.style.fontSize = (20 + Math.random() * 30) + "px";
    flower.style.pointerEvents = "none";
    flower.style.zIndex = "9999";
    flower.style.transition =
        (4 + Math.random() * 2) + "s linear";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.style.top = window.innerHeight + 80 + "px";
        flower.style.transform = `
            translateX(${(Math.random() - 0.5) * 200}px)
            rotate(${Math.random() * 720}deg)
        `;
    }, 30);

    setTimeout(() => {
        flower.remove();
    }, 6000);
}

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-20px";
        heart.style.fontSize = "24px";
        heart.style.transition = "3s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = window.innerHeight + "px";
        }, 10);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    yesSize += 0.1;
    yesBtn.style.transform = `scale(${yesSize})`;
});
