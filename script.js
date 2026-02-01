const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.clientWidth;
    const maxY = container.clientHeight - noBtn.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    scale -= 0.15;

    if (scale <= 0) {
        noBtn.style.opacity = "0";
        noBtn.style.pointerEvents = "none";
        return;
    }

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
    window.location.href = "yay.html";
});
