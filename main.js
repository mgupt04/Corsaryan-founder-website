document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (menu.classList.contains('open') && !event.target.closest('.header-inner')) closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -40px 0px', threshold: .05 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('in-view'));
}

const progressBar = document.querySelector('#scroll-progress');
let progressQueued = false;
function updateProgress() {
  const root = document.documentElement;
  const available = root.scrollHeight - root.clientHeight;
  progressBar.style.width = `${available > 0 ? root.scrollTop / available * 100 : 0}%`;
  progressQueued = false;
}
window.addEventListener('scroll', () => {
  if (!progressQueued) {
    progressQueued = true;
    requestAnimationFrame(updateProgress);
  }
}, { passive: true });
window.addEventListener('resize', updateProgress, { passive: true });
updateProgress();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function mountConstellation(canvas) {
  const section = canvas.parentElement;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let points = [];
  let visible = false;
  let frameId = 0;
  let lastFrame = 0;
  const pointer = { x: -1000, y: -1000 };

  function resize() {
    const bounds = section.getBoundingClientRect();
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(78, Math.max(34, Math.round(width * height / 18500)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .2,
      vy: (Math.random() - .5) * .2,
      radius: .8 + Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2
    }));
    paint(0, false);
  }

  function paint(time, advance) {
    ctx.clearRect(0, 0, width, height);
    const reach = 165;
    for (const point of points) {
      if (advance) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
        const dx = point.x - pointer.x;
        const dy = point.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 125 && distance > 0) {
          point.x += dx / distance * .55;
          point.y += dy / distance * .55;
        }
      }
    }
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const next = points[j];
        const distance = Math.hypot(point.x - next.x, point.y - next.y);
        if (distance < reach) {
          ctx.strokeStyle = `rgba(145, 196, 209, ${(1 - distance / reach) * .27})`;
          ctx.lineWidth = .8;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      }
      if (finePointer.matches) {
        const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        if (distance < 190) {
          ctx.strokeStyle = `rgba(238, 181, 160, ${(1 - distance / 190) * .42})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
      const shimmer = advance ? .56 + .23 * Math.sin(time / 1050 + point.phase) : .63;
      ctx.fillStyle = `rgba(194, 222, 226, ${shimmer})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function tick(time) {
    if (!visible || document.hidden || reducedMotion.matches) {
      frameId = 0;
      return;
    }
    if (time - lastFrame >= 32) {
      paint(time, true);
      lastFrame = time;
    }
    frameId = requestAnimationFrame(tick);
  }

  function setVisible(next) {
    visible = next;
    if (!visible && frameId) cancelAnimationFrame(frameId);
    if (!visible) frameId = 0;
    if (visible) {
      paint(0, false);
      if (!reducedMotion.matches && !frameId && !document.hidden) frameId = requestAnimationFrame(tick);
    }
  }

  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(section);
  else window.addEventListener('resize', resize, { passive: true });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => setVisible(entries[0].isIntersecting), { threshold: 0 }).observe(section);
  } else setVisible(true);

  section.addEventListener('pointermove', event => {
    if (!finePointer.matches || reducedMotion.matches) return;
    const bounds = section.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
  }, { passive: true });
  section.addEventListener('pointerleave', () => { pointer.x = pointer.y = -1000; });
  document.addEventListener('visibilitychange', () => setVisible(visible));
  reducedMotion.addEventListener('change', () => setVisible(visible));
  resize();
}

document.querySelectorAll('.constellation').forEach(mountConstellation);
