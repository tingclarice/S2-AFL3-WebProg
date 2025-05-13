// INDEX.HTML
// START - Speech Bubble Animation
document.addEventListener("DOMContentLoaded", () => {
    const bubbles = document.querySelectorAll(".speech-bubble");

    // Used the Intersection Observer API to trigger animations when the bubbles are in view! :D
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const bubble = entry.target;
            const isRight = bubble.classList.contains("self-end");
            bubble.classList.add(isRight ? "visible-right" : "visible-left");
            observer.unobserve(bubble); // Remove after triggering once
        }
        });
    },
    {
        threshold: 0.9, // Trigger when 30% of the bubble is visible
    }
    );

    bubbles.forEach((bubble) => observer.observe(bubble));
});
// END - Speech Bubble Animation

// HOBBY.HTML

// JavaScript for button functionality
const artButton = document.getElementById('art-button');
const musicButton = document.getElementById('music-button');

// Get HTML element
const title = document.getElementById('hobby-title');
const image = document.getElementById('hobby-image');
const description = document.getElementById('hobby-description');

// 
artButton.addEventListener('click', () => {
    title.textContent = 'Art';
    image.src = 'src/hobby/art.png'; // Replace with actual image path
    image.alt = 'Watercolor painting';
    description.textContent = "Drawing & painting used to be one of my favorite past times as a kid. Other than playing video games, of course. Not too long ago, I got into watercolor. I think it’s such a fun medium to experiment with! Though I rarely make any art now, I still consider it an important part of my life.";
});

musicButton.addEventListener('click', () => {
    // Add functionality for music button
    title.textContent = 'Music';
    image.src = 'src/hobby/music.png'; // Replace with actual image path
    image.alt = 'Playing piano';
    description.textContent = "One of my favorite leisure activities is singing & playing the piano! Though I'm still quite an amateur at it, I find it quite relaxing to do. Especially for winding down after a long day. I started playing the piano when I was around 6 or 7 years old, but never really studied it at a more advanced level. Still, I enjoy teaching my youngest sister to play simple songs!";
});

const buttons = document.querySelectorAll('.hobby-button');

buttons.forEach(button => {
button.addEventListener('click', () => {
    // Remove "active" color from all
    buttons.forEach(btn => {
    btn.classList.remove('bg-[#B86B69]');
    btn.classList.add('bg-[#D79694]');
    });

    // Add "active" color to the clicked button
    button.classList.remove('bg-[#D79694]');
    button.classList.add('bg-[#B86B69]');
});
});