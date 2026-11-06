import { renderAll } from './render.js';
import { initTheme } from './theme.js';
import { initMotion } from './motion.js';
import { initTrail } from './trail.js';

document.documentElement.classList.add('js');
renderAll();
initTheme();
initMotion();
initTrail();


function initMobileNav() {
  const header = document.querySelector('.nav');
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (!header || !toggle || !nav) return;

  const closeMenu = () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
      return;
    }
    header.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 861px)').matches) closeMenu();
  }, { passive: true });
}

initMobileNav();
