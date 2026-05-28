// ═══════════════════════════════════════════════════════════════════════
// PORTFOLIO CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════
// Modifie les URLs de tes projets ici. Ajoute les repos/démos dès qu'ils sont disponibles.

const CONTACT_EMAIL = 'saminnothy@gmail.com';
const GITHUB_PROFILE = 'https://github.com/Innothy';
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/samson-innothy-b491623ba/';

// Configuration des projets - Ajoute tes repos et démos ici
const PROJECTS = {
  payflow: {
    github: 'https://github.com/Innothy/payflow', // TODO: ajoute le repo quand il existe
    demo: '', // TODO: ajoute l'URL de la démo
  },
  databot: {
    github: 'https://github.com/Innothy/databot', // TODO: ajoute le repo quand il existe
    demo: '', // TODO: ajoute l'URL de la démo
  },
  docgen: {
    github: 'https://github.com/Innothy/docgen', // TODO: ajoute le repo quand il existe
    demo: '', // TODO: ajoute l'URL de la démo
  },
};

// ═══════════════════════════════════════════════════════════════════════
// CURSOR INTERACTIF
// ═══════════════════════════════════════════════════════════════════════

const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .stack-chip, .project-card, .cyber-skill').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ═══════════════════════════════════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.stack-chip').forEach(c => c.classList.add('visible'));
      }, 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

const chipObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.stack-chip').forEach(c => chipObserver.observe(c));

// ═══════════════════════════════════════════════════════════════════════
// NAVIGATION ACTIVE STATE
// ═══════════════════════════════════════════════════════════════════════

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--text)'
      : '';
  });
});

// ═══════════════════════════════════════════════════════════════════════
// TERMINAL ANIMATION
// ═══════════════════════════════════════════════════════════════════════

const terminal = document.querySelector('.terminal');
const termObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      terminal.style.opacity = '0';
      terminal.style.transform = 'translateY(20px)';
      terminal.style.transition = 'opacity 0.6s 0.2s, transform 0.6s 0.2s';
      requestAnimationFrame(() => {
        terminal.style.opacity = '1';
        terminal.style.transform = 'translateY(0)';
      });
    }
  });
}, { threshold: 0.2 });
if (terminal) termObserver.observe(terminal);

// ═══════════════════════════════════════════════════════════════════════
// HERO GLOW EFFECT
// ═══════════════════════════════════════════════════════════════════════

const hero = document.getElementById('hero');
hero.addEventListener('mousemove', e => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  document.querySelector('.hero-orb').style.background =
    `radial-gradient(circle at ${x}% ${y}%, rgba(0,255,179,0.09) 0%, transparent 65%)`;
});

// ═══════════════════════════════════════════════════════════════════════
// COUNTER ANIMATION FOR STATS
// ═══════════════════════════════════════════════════════════════════════

function animateCounter(el, target) {
  let start = 0;
  const duration = 1200;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.hero-stat-num');
      nums.forEach(n => {
        const full = n.textContent.trim();
        const num = parseInt(full);
        const span = n.querySelector('span');
        const suffix = span ? span.textContent : '';
        n.innerHTML = `<span id="c${num}">${num}</span><span>${suffix}</span>`;
        animateCounter(document.getElementById(`c${num}`), num);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

// ═══════════════════════════════════════════════════════════════════════
// UTILITY: UPDATE PROJECT LINKS
// ═══════════════════════════════════════════════════════════════════════
// Cette fonction met à jour les liens des projets. Appelle-la si besoin.

function updateProjectLink(projectKey, type, url) {
  if (PROJECTS[projectKey]) {
    PROJECTS[projectKey][type] = url;
    console.log(`✓ Mis à jour ${projectKey}.${type} → ${url}`);
  }
}

// Export pour usage externe (si nécessaire)
window.Portfolio = {
  CONTACT_EMAIL,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  PROJECTS,
  updateProjectLink
};
