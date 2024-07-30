document.addEventListener('DOMContentLoaded', () => {
  //Generating Stars
  const starsContainer = document.querySelector('.stars-container');
  const brightStarsContainer = document.querySelector('.bright-stars-container');
  const numberOfStars = 150;
  const numberOfBrightStars = 50;

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

  // Hamburger Menu Functionality
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');
  if (hamburgerMenu && navLinks) {
      hamburgerMenu.addEventListener('click', () => {
          navLinks.classList.toggle('open');
      });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
          event.preventDefault();

          // EmailJS configuration
          const serviceID = 'service_zjqgunv';
          const templateID = 'template_fzjsv1s'; 
          const userID = 'cAYZN911HphDJKT0B'; 
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
            })}
  

 // External links redirection
const emailLink = document.querySelector('a[href="mailto:barotdona4@gmail.com"]');
const podcastLink = document.querySelector('a[href="https://www.youtube.com/watch?v=TDVRQoM-5No"]');
const linkedInLink = document.querySelector('a[href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"]');

if (emailLink) {
    emailLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('mailto:barotdona4@gmail.com', '_blank');
    });
}

if (podcastLink) {
    podcastLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('https://www.youtube.com/watch?v=TDVRQoM-5No', '_blank');
    });
}

if (linkedInLink) {
    linkedInLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit', '_blank');
    });
  
  }
})