import { fmtStat } from './render.js';

export function initMotion() {
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (rm) return; // CSS shows everything; stats keep their final values

  // scroll reveal
  const rev = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach((el) => rev.observe(el));

  // count-up
  const cnt = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    cnt.unobserve(e.target);
    const el = e.target, to = +el.dataset.to, t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / 900, 1), v = to * (1 - Math.pow(1 - p, 3));
      el.textContent = fmtStat(el.dataset, v);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: .6 });
  document.querySelectorAll('[data-to]').forEach((el) => { el.textContent = fmtStat(el.dataset, 0); cnt.observe(el); });

  // hero parallax
  const word = document.querySelector('.hero-word');
  let tick = false;
  addEventListener('scroll', () => {
    if (tick || scrollY > innerHeight) return; tick = true;
    requestAnimationFrame(() => { word.style.transform = `translateY(${scrollY * .18}px)`; tick = false; });
  }, { passive: true });

  // active nav link
  const links = [...document.querySelectorAll('#nav a')];
  const act = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => act.observe(s));
}
