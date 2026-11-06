import { C } from '../content.js';

// tiny element builder; empty strings / null / false are skipped so blank card fields vanish
const h = (t, a = {}, ...k) => {
  const e = document.createElement(t);
  for (const [n, v] of Object.entries(a)) if (v !== '' && v != null && v !== false) e.setAttribute(n, v);
  k.flat().forEach((c) => { if (c != null && c !== '' && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
  return e;
};
export const fmtStat = (d, v) => (d.pre || '') + (+v).toFixed(+d.dec || 0) + (d.suf || '');
const stat = (s) => {
  const b = h('b', { 'data-to': s.to, 'data-dec': s.dec || 0, 'data-pre': s.pre, 'data-suf': s.suf });
  b.textContent = fmtStat(b.dataset, s.to);
  return h('div', { class: 'stat' }, b, h('span', {}, s.label));
};
const btn = (t, href, primary) => h('a', { class: 'btn' + (primary ? ' primary' : ''), href }, t);
const tags = (arr = []) => h('div', { class: 'tags' }, arr.map((t) => h('span', {}, t)));
const row = (l, t) => t && h('p', { class: 'row' }, h('span', { class: 'lbl' }, l), t);
const sec = (id, eyebrow, title, ...k) =>
  h('section', { id, class: 'sec reveal', 'aria-labelledby': id + '-h' }, h('p', { class: 'eyebrow mono' }, eyebrow), h('h2', { id: id + '-h' }, title), ...k);

const card = (c) => h('article', { class: 'card sel', 'data-sel': 'card' },
  h('p', { class: 'tag mono' }, c.tag),
  h('h4', {}, c.title),
  row('Problem', c.problem), row('Approach', c.approach), row('Impact', c.impact),
  c.stats && h('div', { class: 'stats' }, c.stats.map(stat)),
  tags(c.stack),
  c.link && h('a', { class: 'ext mono', href: c.link, target: '_blank', rel: 'noopener' }, 'View repository ↗'),
  c.note && h('p', { class: 'note mono' }, c.note));

const hero = () => h('section', { id: 'home', class: 'hero' },
  h('div', { class: 'hero-word', 'aria-hidden': 'true' }, C.word),
  h('p', { class: 'hello' }, 'Hello, I’m'),
  h('h1', { class: 'name' }, C.name),
  h('p', { class: 'chip mono sel', 'data-sel': 'role' }, C.role),
  h('p', { class: 'pitch' }, C.pitch),
  C.core && h('div', { class: 'tags core' }, C.core.map((t) => h('span', {}, t))),
  h('div', { class: 'btns' }, btn('Get in touch', '#contact', 1), btn('Explore projects →', '#projects'), C.links.resume && btn('Resume', C.links.resume)),
  h('div', { class: 'cube-wrap', 'aria-hidden': 'true' }, h('div', { class: 'cube' }, ['ETL', 'CI/CD', 'SQL', 'PY', 'BI', 'VHDL'].map((f) => h('i', {}, f)))),
  h('div', { class: 'statbar' }, C.stats.map(stat)));

const about = () => {
  const a = C.about;
  return sec('about', a.eyebrow, a.title,
    h('div', { class: 'about-grid' },
      h('div', {},
        h('blockquote', {}, a.quote),
        h('p', { class: 'mono tagline' }, a.tagline),
        h('p', {}, a.body),
        a.beyond && h('p', { class: 'muted' }, a.beyond)),
      h('div', {},
        a.photo ? h('img', { class: 'photo', src: a.photo, alt: 'Portrait of ' + C.name, loading: 'lazy' }) : h('div', { class: 'photo ph mono' }, 'HEADSHOT · TODO'),
        h('div', { class: 'mini' }, a.cards.map((x) => h('div', { class: 'sel', 'data-sel': 'principle' }, h('b', {}, x.t), h('span', {}, x.d)))))));
};

const experience = () => sec('experience', '// EXPERIENCE', 'Where I’ve built things',
  C.experience.map((x) => h('div', { class: 'tl' },
    h('div', {}, h('p', { class: 'mono when' }, x.when), h('p', { class: 'muted' }, x.place)),
    h('div', {}, h('h3', {}, x.role, h('span', { class: 'org' }, ' · ' + x.org)), h('ul', {}, x.points.map((p) => h('li', {}, p)))))),
  h('h3', { class: 'sub' }, 'Achievements'),
  h('ul', { class: 'ach' }, C.achievements.map((a) => h('li', {}, a))));

const projects = () => sec('projects', '// SELECTED_WORK', 'Work that runs in production',
  C.tracks.map((t) => h('div', { class: 'track', id: t.id },
    h('h3', {}, t.name), h('p', { class: 'muted' }, t.blurb),
    h('div', { class: 'grid' }, t.cards.map(card)))));

const matrix = () => sec('matrix', '// SYSTEMS_MATRIX', 'The Systems Matrix',
  h('div', { class: 'grid' }, C.matrix.map((m) => h('div', { class: 'card sel', 'data-sel': 'stack' }, h('h4', {}, m.t), tags(m.c)))));

const approach = () => sec('approach', '// HOW_I_THINK', 'How I think about automation',
  h('div', { class: 'grid' }, C.approach.map((a, i) => h('div', { class: 'card sel', 'data-sel': 'principle' }, h('p', { class: 'tag mono' }, '0' + (i + 1)), h('h4', {}, a.t), h('p', { class: 'muted' }, a.d)))),
  h('ol', { class: 'flow mono', 'aria-label': 'Pipeline stages' }, C.flow.map((f) => h('li', {}, f))),
  h('p', { class: 'cicd mono' }, 'Checks at each step · clear outputs · straightforward handover'));

const offer = () => sec('offer', '// WHAT_I_BUILD', C.offer.title,
  h('div', { class: 'grid' }, C.offer.items.map((s) => h('div', { class: 'card sel', 'data-sel': 'service' }, h('h4', {}, s.t), h('p', { class: 'muted' }, s.d), tags(s.tags)))),
  h('p', { class: 'who mono' }, 'Built for: ' + C.offer.clients));

const howWork = () => sec('process', '// HOW_WE_WORK', 'From brief to handover',
  h('div', { class: 'grid' }, C.process.map((s, i) => h('div', { class: 'card sel', 'data-sel': 'step' }, h('p', { class: 'tag mono' }, '0' + (i + 1)), h('h4', {}, s.t), h('p', { class: 'muted' }, s.d)))));

const faq = () => sec('faq', '// FAQ', 'Straight answers',
  h('div', { class: 'faq' }, C.faq.map((f) => h('details', {}, h('summary', {}, f.q), h('p', { class: 'muted' }, f.a)))));

const contact = () => sec('contact', '// CONTACT', C.cta.title,
  h('p', { class: 'pitch' }, C.cta.text),
  h('div', { class: 'btns' },
    btn('Email', C.links.email, 1), C.links.phone && btn('Call ' + C.links.phoneText, C.links.phone), btn('LinkedIn ↗', C.links.linkedin), btn('GitHub ↗', C.links.github), C.links.archive && btn('Previous site ↗', C.links.archive)),
  C.cta.note && h('p', { class: 'muted note' }, C.cta.note),
  h('footer', { class: 'mono' }, `© ${new Date().getFullYear()} ${C.name} · Hyderabad, India`));

export function renderAll() {
  const nav = document.getElementById('nav');
  C.nav.forEach(([id, t]) => nav.append(h('a', { href: '#' + id }, t)));
  document.getElementById('main').replaceChildren(hero(), offer(), about(), projects(), experience(), matrix(), approach(), howWork(), faq(), contact());
}
