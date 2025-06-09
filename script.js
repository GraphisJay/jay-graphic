// script.js

// Toggle mobile navigation menu
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu after selection
        nav.classList.remove('active');
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        try {
            // Replace this URL with your own backend or Formspree endpoint
            const response = await fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                alert('Message sent successfully!');
                this.reset();
            } else {
                alert('There was a problem sending your message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send the message.');
        }
    });
}
