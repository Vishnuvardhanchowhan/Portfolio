import { renderAll } from './render.js';
import { initTheme } from './theme.js';
import { initMotion } from './motion.js';
import { initTrail } from './trail.js';

document.documentElement.classList.add('js');
renderAll();
initTheme();
initMotion();
initTrail();
