
document.addEventListener('DOMContentLoaded', () => {
    console.log('Setayesh Makeup Saloon website loaded');

    // Basic form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
