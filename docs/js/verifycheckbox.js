document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("verify-checkbox");
    const downloadContainer = document.getElementById("download-container");
    const fireworksCanvas = document.getElementById("fireworks-canvas");

    // Check if elements exist before using them
    if (!checkbox || !downloadContainer || !fireworksCanvas) {
        console.error("One or more required elements are missing from the page.");
        return;  // Stop script execution if elements are not found
    }

    const ctx = fireworksCanvas.getContext("2d");

    // Ensure checkbox resets on page refresh
    checkbox.checked = false;
    downloadContainer.style.display = "none";

    function startFireworks() {
        fireworksCanvas.style.display = "block";
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;

        const particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * fireworksCanvas.width,
                y: Math.random() * fireworksCanvas.height / 2,
                vx: (Math.random() - 0.5) * 5,
                vy: Math.random() * -5 - 2,
                size: Math.random() * 3 + 2,
                color: `hsl(${Math.random() * 360}, 100%, 60%)`,
                life: 100
            });
        }

        function animate() {
            ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05;  // Simulates gravity
                p.life -= 1;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                if (p.life <= 0) particles.splice(i, 1);
            });

            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    fireworksCanvas.style.display = "none";
                }, 500);
            }
        }

        animate();
    }

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            startFireworks();
            downloadContainer.style.display = "block";
        }
    });
});
