document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.cursor-particles');
    const particles = [];
    const particleCount = 8; // Total of 8 circles (1 leading + 7 trailing)
    let mouseX = 0;
    let mouseY = 0;

    // Create 8 particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
        // Start each particle at position (0, 0)
        particles.push({
            element: particle,
            x: 0,
            y: 0
        });
    }

    // Track the mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Update particle positions to create a trailing effect
    function updateParticles() {
        // The first particle follows the mouse directly.
        if (particles.length > 0) {
            const first = particles[0];
            first.x += (mouseX - first.x) * 0.2;
            first.y += (mouseY - first.y) * 0.2;
            first.element.style.transform = `translate(${first.x}px, ${first.y}px)`;
        }

        // Each subsequent particle follows the position of the one before it.
        for (let i = 1; i < particles.length; i++) {
            const prev = particles[i - 1];
            const curr = particles[i];
            curr.x += (prev.x - curr.x) * 0.2;
            curr.y += (prev.y - curr.y) * 0.2;
            curr.element.style.transform = `translate(${curr.x}px, ${curr.y}px)`;
        }

        requestAnimationFrame(updateParticles);
    }

    updateParticles();
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();
    const messagesDiv = document.getElementById("messages");
    const container = document.querySelector(".container");

    if (message === "") return;

    // Expand chatbox when message is sent
    container.classList.add("expanded");
    messagesDiv.classList.add("expanded");

    // Show user message
    messagesDiv.innerHTML += `<div class="user-message"><strong>You:</strong> ${message}</div>`;
    inputField.value = "";

    fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message }),
        mode: "cors"  // Ensure CORS is enabled
    })
    
    .then(response => response.json())
    .then(data => {
        // Show chatbot response
        messagesDiv.innerHTML += `<div class="bot-message"><strong>Bot:</strong> ${data.response}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    })
    .catch(error => {
        messagesDiv.innerHTML += `<div class="error-message">Error: ${error}</div>`;
    });
}
