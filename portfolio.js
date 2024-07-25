document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars-container');
    const brightStarsContainer = document.querySelector('.bright-stars-container');

    const numberOfStars = 200;
    const numberOfBrigtStars =10;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        setRandomPosition(star);
        starsContainer.appendChild(star);
    }
    // Create bright stars
    for (let i = 0; i < numberOfBrigtStars; i++) {
        const brightStar = document.createElement('div');
        brightStar.classList.add('bright-star');
        setRandomPosition(brightStar, brightStarsContainer);
        brightStarsContainer.appendChild(brightStar);
    }


    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    function setRandomPosition(element) {
        const containerRect = document.querySelector('.stars-container').getBoundingClientRect();
        const randomX = Math.random() * containerRect.width;
        const randomY = Math.random() * containerRect.height;

        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }
});
