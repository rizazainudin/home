/* ──────────────────────────────────
   Navigation — sticky + hamburger
   ────────────────────────────────── */

const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  highlightActiveNav();
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ──────────────────────────────────
   Active nav link on scroll
   ────────────────────────────────── */

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

function highlightActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 110) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle(
      'active-nav',
      link.getAttribute('href') === `#${current}`
    );
  });
}

/* ──────────────────────────────────
   Scroll-triggered animations
   ────────────────────────────────── */

const animatedEls = document.querySelectorAll('.fade-in, .fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

animatedEls.forEach(el => observer.observe(el));

/* ──────────────────────────────────
   Project Filtering
   ────────────────────────────────── */

function initFilter(filterBarId, gridId) {
  const buttons = document.querySelectorAll(`#${filterBarId} .filter-btn`);
  const cards   = document.querySelectorAll(`#${gridId} .project-card`);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}

initFilter('autoFilters', 'automationGrid');
initFilter('analyticsFilters', 'analyticsGrid');

/* ──────────────────────────────────
   Smooth scroll offset for fixed nav
   ────────────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height')) || 68;
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
