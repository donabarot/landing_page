document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = 500;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        setRandomPosition(star);
        starsContainer.appendChild(star);
    }

    function updateStars() {
        stars.forEach((star) => {
          const newX = Math.random() * window.innerWidth; // new random x position
          const newY = Math.random() * window.innerHeight; // new random y position
          star.style.left = `${newX}px`;
          star.style.top = `${newY}px`;
        });
      }
    
    
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

function setRandomPosition(element) {
    const containerRect = document.body.getBoundingClientRect();
    const randomX = Math.random() * containerRect.width;
    const randomY = Math.random() * containerRect.height;

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}

