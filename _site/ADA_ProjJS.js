// Navigation functionality
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all buttons and sections
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.cv-section').forEach(section => section.classList.remove('active'));

    // Add active class to clicked button and corresponding section
    this.classList.add('active');
    const sectionId = this.getAttribute('data-section');
    document.getElementById(sectionId).classList.add('active');

    // Smooth scroll to content
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Smooth scroll for footer links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item, .project-card, .experience-card, .skill-category, .language-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
