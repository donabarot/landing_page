document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
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
=======
    // 1. Generating Stars
    const starsContainer = document.querySelector('.stars-container');
    const brightStarsContainer = document.querySelector('.bright-stars-container');
    const numberOfStars = 100;
    const numberOfBrightStars = 20;

    function setRandomPosition(element, containerRect) {
        const randomX = Math.random() * containerRect.width;
        const randomY = Math.random() * containerRect.height;
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    const containerRect = starsContainer.getBoundingClientRect();
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        setRandomPosition(star, containerRect);
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < numberOfBrightStars; i++) {
        const brightStar = document.createElement('div');
        brightStar.classList.add('bright-star');
        setRandomPosition(brightStar, containerRect);
        brightStarsContainer.appendChild(brightStar);
    }

    // 2. Hamburger Menu Functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    //Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_n6kv74d';
    const templateID = 'template_id'; // Replace with your EmailJS template ID
    const userID = 'cAYZN911HphDJKT0B'; // Replace with your EmailJS user ID

    emailjs.init(userID);

    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    emailjs.send(serviceID, templateID, data)
      .then(() => {
        alert('Your message has been sent successfully!');
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again later.');
      });
  });
}

// LinkedIn link click event
// const linkedinLink = document.querySelector('a[href*="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"]');
// if (linkedinLink) {
//   linkedinLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.open(linkedinLink.href, '_blank');
   });
// }})
>>>>>>> 31a250b (problem with form and links)
