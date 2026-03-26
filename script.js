// ═══════════════════════════════════════════════════════════
//  LINDA SHANSON – Website JavaScript
// ═══════════════════════════════════════════════════════════

// ─── NAVBAR SCROLL ────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ─── MOBILE NAV TOGGLE ────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── SCROLL REVEAL ────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.album-card, .mission-card, .milestone, .press-card, .venue, .fact, .collab-list span'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealEls.forEach(el => observer.observe(el));

// ─── STAGGER REVEAL FOR GRIDS ──────────────────────────────
document.querySelectorAll('.albums-grid, .press-grid, .venues-grid, .about-facts').forEach(grid => {
  const children = grid.querySelectorAll('.reveal');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
  });
});

// ─── ACTIVE NAV LINK ON SCROLL ────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--gold)';
    }
  });
}, { passive: true });

// ─── VIDEO CLICK HANDLER ──────────────────────────────────
function openVideo(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── CONTACT FORM ─────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const form    = e.target;
  const success = document.getElementById('form-success');

  // Collect form data (in a real deployment, send to a backend/Formspree etc.)
  const data = {
    name:    form.name.value,
    email:   form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  console.log('Form submission:', data);

  // Show success state
  form.style.display = 'none';
  success.style.display = 'block';

  // Reset after 6 seconds
  setTimeout(() => {
    form.reset();
    form.style.display = 'flex';
    success.style.display = 'none';
  }, 6000);
}

// ─── FOOTER YEAR ──────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ─── SMOOTH ANCHOR OFFSET (for fixed navbar) ──────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ─── HERO PARALLAX ────────────────────────────────────────
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    const offset = window.scrollY * 0.3;
    const content = hero.querySelector('.hero-content');
    if (content) content.style.transform = `translateY(${offset}px)`;
  }
}, { passive: true });
