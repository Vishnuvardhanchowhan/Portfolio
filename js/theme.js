export function initTheme() {
  const root = document.documentElement, btn = document.getElementById('theme');
  let t = 'dark';
  try { t = localStorage.getItem('theme') || 'dark'; } catch {}
  const set = (v) => {
    t = v; root.dataset.theme = v;
    btn.textContent = v === 'dark' ? '☀' : '☾';
    btn.setAttribute('aria-label', v === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('theme', v); } catch {}
  };
  set(t);
  btn.addEventListener('click', () => set(t === 'dark' ? 'light' : 'dark'));
}
