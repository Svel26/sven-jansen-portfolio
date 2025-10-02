// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile hamburger menu toggle
class MobileMenu {
    constructor() {
        this.nav = document.querySelector('nav');
        this.hamburger = document.createElement('button');
        this.hamburger.innerHTML = '&#9776;'; // Hamburger icon
        this.hamburger.classList.add('hamburger');
        this.hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        this.nav.parentElement.insertBefore(this.hamburger, this.nav);
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => {
            this.nav.classList.toggle('open');
            this.hamburger.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
new MobileMenu();

// Skill progress bars animation with Intersection Observer
class SkillProgress {
    constructor() {
        this.skillsSection = document.getElementById('skills');
        this.skills = this.skillsSection.querySelectorAll('li');
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
            threshold: 0.5
        });
        this.init();
    }

    init() {
        this.skills.forEach(skill => {
            // Create progress bar elements
            const progressContainer = document.createElement('div');
            progressContainer.classList.add('progress-container');

            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');

            const progressFill = document.createElement('div');
            progressFill.classList.add('progress-fill');
            progressFill.style.width = '0%';

            progressBar.appendChild(progressFill);
            progressContainer.appendChild(progressBar);
            skill.appendChild(progressContainer);

            // Observe each skill item
            this.observer.observe(skill);
        });
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                // Animate to 80% as default (can be customized with data attributes)
                const targetWidth = entry.target.dataset.progress || '80%';
                progressFill.style.width = targetWidth;
                // Stop observing after animation
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Initialize skill progress
new SkillProgress();

// Contact form validation and submission
class ContactForm {
    constructor() {
        this.form = document.querySelector('form');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.clearErrors();

        const isValid = this.validateForm();

        if (isValid) {
            this.submitForm();
        }
    }

    validateForm() {
        let isValid = true;

        // Name validation
        if (!this.nameInput.value.trim()) {
            this.showError(this.nameInput, 'Name is required');
            isValid = false;
        }

        // Email validation
        if (!this.emailInput.value.trim()) {
            this.showError(this.emailInput, 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(this.emailInput.value)) {
            this.showError(this.emailInput, 'Please enter a valid email address');
            isValid = false;
        }

        // Message validation
        if (!this.messageInput.value.trim()) {
            this.showError(this.messageInput, 'Message is required');
            isValid = false;
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(input, message) {
        input.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        input.parentElement.appendChild(errorElement);
    }

    clearErrors() {
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        document.querySelectorAll('.error-message').forEach(el => el.remove());
    }

    submitForm() {
        // Simulate form submission (replace with actual API call)
        this.showSuccessMessage('Thank you! Your message has been sent successfully.');
        this.form.reset();
    }

    showSuccessMessage(message) {
        const successElement = document.createElement('div');
        successElement.classList.add('success-message');
        successElement.textContent = message;
        this.form.appendChild(successElement);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successElement.remove();
        }, 5000);
    }
}

// Initialize contact form
new ContactForm();

// Fade-in animations for sections using Intersection Observer
class FadeInAnimation {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        this.init();
    }

    init() {
        this.sections.forEach(section => {
            this.observer.observe(section);
        });
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Stop observing after animation
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Initialize fade-in animations
new FadeInAnimation();