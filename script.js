function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
}

// 🎉 Анимация конфетти
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];

for (let i = 0; i < confettiCount; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * confettiCount,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        tilt: Math.floor(Math.random() * 10) - 10
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
        ctx.fill();
    });
    updateConfetti();
}

function updateConfetti() {
    confetti.forEach(c => {
        c.y += Math.cos(c.d) + 1 + c.r / 2;
        c.x += Math.sin(c.d);
        if (c.y > canvas.height) {
            c.x = Math.random() * canvas.width;
            c.y = -10;
        }
    });
}

setInterval(drawConfetti, 20);
