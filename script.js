// ═══════════════════════════════════════════════════════════
//  LINDA SHANSON – Website JavaScript
// ═══════════════════════════════════════════════════════════

// ─── NAVBAR SCROLL ────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── MOBILE NAV TOGGLE ────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── SCROLL REVEAL ────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.bio-layout > *, .music-feature, .album-art, .art-item, .story-card, .video-card, .pq, .stat, .listen-strip, .press-quotes, .contact-info'
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
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => observer.observe(el));

// Stagger children
document.querySelectorAll('.art-grid, .press-quotes, .bio-stats').forEach(grid => {
  const children = grid.querySelectorAll('.reveal');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
  });
});

// ─── ACTIVE NAV LINK ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.toggle('active',
      link.getAttribute('href') === `#${current}`
    );
  });
}, { passive: true });

// ─── SMOOTH SCROLL WITH OFFSET ────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ─── HERO PARALLAX ────────────────────────────────────────
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.2}px) scale(1.05)`;
    }
  }, { passive: true });
}

// ─── FOOTER YEAR ──────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
