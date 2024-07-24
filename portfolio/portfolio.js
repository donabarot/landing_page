document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = 150; // Number of stars

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        setRandomPosition(star);
        starsContainer.appendChild(star);
    }
});

function setRandomPosition(element) {
    const containerRect = document.body.getBoundingClientRect();
    const randomX = Math.random() * containerRect.width;
    const randomY = Math.random() * containerRect.height;

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}
