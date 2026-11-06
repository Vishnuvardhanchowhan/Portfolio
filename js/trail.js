// Lightweight cursor trail + click bursts. Off on touch devices and under reduced motion.
export function initTrail() {
  if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas');
  c.id = 'trail'; c.setAttribute('aria-hidden', 'true'); document.body.append(c);
  const x = c.getContext('2d');
  let w, h, ps = [], last = 0, raf = 0;
  const size = () => { const d = devicePixelRatio || 1; w = innerWidth; h = innerHeight; c.width = w * d; c.height = h * d; x.setTransform(d, 0, 0, d, 0, 0); };
  size(); addEventListener('resize', size);
  const add = (px, py, n, sp) => {
    for (let i = 0; i < n; i++) {
      if (ps.length > 140) ps.shift();
      const a = Math.random() * 6.283, s = Math.random() * sp;
      ps.push({ x: px, y: py, vx: Math.cos(a) * s, vy: Math.sin(a) * s, l: 1, c: Math.random() < .2 ? '#29b6f6' : '#ff3b30' });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  };
  addEventListener('pointermove', (e) => { const t = performance.now(); if (t - last < 24) return; last = t; add(e.clientX, e.clientY, 1, .8); }, { passive: true });
  addEventListener('pointerdown', (e) => add(e.clientX, e.clientY, 14, 4));
  function tick() {
    x.clearRect(0, 0, w, h);
    ps = ps.filter((p) => p.l > 0);
    for (const p of ps) { p.x += p.vx; p.y += p.vy; p.l -= .025; x.globalAlpha = Math.max(p.l, 0); x.fillStyle = p.c; x.fillRect(p.x, p.y, 3, 3); }
    raf = ps.length ? requestAnimationFrame(tick) : 0;
    if (!raf) x.clearRect(0, 0, w, h);
  }
}
