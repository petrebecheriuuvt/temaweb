
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Validate name
      const nameInput = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Numele este obligatoriu';
        nameError.style.display = 'block';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }
      
      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Email-ul este obligatoriu';
        emailError.style.display = 'block';
        isValid = false;
      } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Email-ul nu este valid';
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // Validate message
      const messageInput = document.getElementById('message');
      const messageError = document.getElementById('message-error');
      
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Mesajul este obligatoriu';
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }
      
      // If form is valid, simulate submission
      if (isValid) {
        const submitButton = contactForm.querySelector('.submit-button');
        submitButton.textContent = 'Se trimite...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
          contactForm.reset();
          submitButton.textContent = 'Trimite mesaj';
          submitButton.disabled = false;
          
          alert('Mesajul a fost trimis cu succes! Vă mulțumim.');
        }, 1500);
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Animated elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-header, .service-card, .testimonial-card, .portfolio-item, .process-step, .contact-card, .faq-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (elementPosition < screenPosition * 0.9) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
