/* ===== ICON LIBRARY (SVG) ===== */
const ICONS = {
  droplet: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  flame: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  tool: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
  'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
};

function getIcon(name) { return ICONS[name] || ICONS['tool']; }

/* ===== CONTENT LOADER ===== */
document.addEventListener('DOMContentLoaded', () => {
  fetch('content.json')
    .then(r => r.json())
    .then(data => {
      data.sections.sort((a, b) => a.order - b.order).forEach(s => renderSection(s));
      initNavigation();
      initAnimations();
      initCounters();
    })
    .catch(e => console.error('Error loading content:', e));
});

function renderSection(section) {
  const el = document.getElementById(section.id);
  if (!el) return;
  const renderers = {
    navigation: renderNav,
    hero: renderHero,
    about: renderAbout,
    stats: renderStats,
    services_grid: renderServices,
    features: renderFeatures,
    gallery: renderGallery,
    testimonials: renderTestimonials,
    cta_banner: renderCTA,
    map: renderMap,
    footer: renderFooter
  };
  (renderers[section.type] || renderDefault)(el, section);
}

/* ===== RENDERERS ===== */

function renderNav(el, s) {
  setText(el, 'logo_text', s.fields.logo_text);
  const ul = el.querySelector('[data-field="links"]');
  if (ul && s.fields.links) {
    ul.innerHTML = s.fields.links.map(l =>
      `<li data-section="${s.id}" data-field="links" data-item="${l.id}"><a href="${l.url}" data-field="label">${l.label}</a></li>`
    ).join('');
  }
}

function renderHero(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'subheadline', f.subheadline);
  const cta = el.querySelector('[data-field="cta_text"]');
  if (cta && f.cta_text) { cta.innerHTML = getIcon('phone') + ' ' + f.cta_text; if (f.cta_url) cta.href = f.cta_url; }
  const cta2 = el.querySelector('[data-field="cta_secondary_text"]');
  if (cta2 && f.cta_secondary_text) { cta2.textContent = f.cta_secondary_text; if (f.cta_secondary_url) cta2.href = f.cta_secondary_url; }

  // Trust badges
  const trustEl = el.querySelector('[data-field="trust_badges"]');
  if (trustEl && f.trust_badges) {
    trustEl.innerHTML = f.trust_badges.map(b =>
      `<div class="trust-item"><span class="trust-value">${b.value}</span><span class="trust-label">${b.label}</span></div>`
    ).join('');
  }

  // Image mosaic
  const mosaicEl = el.querySelector('[data-field="hero_images"]');
  if (mosaicEl && f.hero_images) {
    mosaicEl.innerHTML = f.hero_images.map((img, i) =>
      `<div class="mosaic-img"><img src="${img}" alt="Projekt ${i+1}"${i === 0 ? '' : ' loading="lazy"'}></div>`
    ).join('');
  }
}

function renderAbout(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'text', f.text);
  setText(el, 'text_secondary', f.text_secondary);
  const mainImg = el.querySelector('[data-field="image"]');
  if (mainImg && f.image) mainImg.src = f.image;
  const secImg = el.querySelector('[data-field="image_secondary"]');
  if (secImg && f.image_secondary) secImg.src = f.image_secondary;

  // Highlights
  const hlEl = el.querySelector('[data-field="highlights"]');
  if (hlEl && f.highlights) {
    hlEl.innerHTML = f.highlights.map(h =>
      `<div class="about-highlight-chip" data-section="${s.id}" data-field="highlights" data-item="${h.id}">${getIcon(h.icon)}<span>${h.text}</span></div>`
    ).join('');
  }
}

function renderStats(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  const grid = el.querySelector('[data-field="items"]');
  if (grid && f.items) {
    grid.innerHTML = f.items.map(item =>
      `<div class="stat-card" data-section="${s.id}" data-field="items" data-item="${item.id}">
        <div class="stat-icon">${getIcon(item.icon)}</div>
        <span class="stat-value" data-count="${item.value}" data-suffix="${item.suffix || ''}">0${item.suffix || ''}</span>
        <span class="stat-label">${item.label}</span>
        <span class="stat-desc">${item.description || ''}</span>
      </div>`
    ).join('');
  }
}

function renderServices(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'subheadline', f.subheadline);
  const grid = el.querySelector('[data-field="items"]');
  if (grid && f.items) {
    grid.innerHTML = f.items.map(item =>
      `<div class="svc-card" data-section="${s.id}" data-field="items" data-item="${item.id}">
        <div class="svc-img"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
        <div class="svc-body">
          <div class="svc-icon">${getIcon(item.icon)}</div>
          <h3 data-field="title">${item.title}</h3>
          <p data-field="description">${item.description}</p>
        </div>
      </div>`
    ).join('');
  }
}

function renderFeatures(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'subheadline', f.subheadline);
  const img = el.querySelector('.features-visual img[data-field="image"]');
  if (img && f.image) img.src = f.image;
  const list = el.querySelector('[data-field="items"]');
  if (list && f.items) {
    list.innerHTML = f.items.map(item =>
      `<div class="feature-item" data-section="${s.id}" data-field="items" data-item="${item.id}">
        <div class="feature-icon">${getIcon(item.icon)}</div>
        <div class="feature-text"><h3>${item.title}</h3><p>${item.description}</p></div>
      </div>`
    ).join('');
  }
}

function renderGallery(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'subheadline', f.subheadline);
  const grid = el.querySelector('[data-field="items"]');
  if (grid && f.items) {
    grid.innerHTML = f.items.map(item =>
      `<div class="bento-item" data-section="${s.id}" data-field="items" data-item="${item.id}">
        <img src="${item.image}" alt="${item.caption}" loading="lazy">
        <div class="bento-caption"><span data-field="caption">${item.caption}</span></div>
      </div>`
    ).join('');
  }
}

function renderTestimonials(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'subheadline', f.subheadline);
  const grid = el.querySelector('[data-field="items"]');
  if (grid && f.items) {
    grid.innerHTML = f.items.map(item => {
      const stars = Array(item.rating || 5).fill(getIcon('star')).join('');
      const initials = item.name.split(' ').map(n => n[0]).join('');
      return `<div class="review-card" data-section="${s.id}" data-field="items" data-item="${item.id}">
        <div class="review-stars">${stars}</div>
        <p class="review-text">"${item.text}"</p>
        <div class="review-author">
          <div class="review-avatar">${initials}</div>
          <div class="review-info"><h4>${item.name}</h4><p>${item.role}</p></div>
        </div>
      </div>`;
    }).join('');
  }
}

function renderCTA(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  setText(el, 'text', f.text);
  const cta = el.querySelector('[data-field="cta_text"]');
  if (cta && f.cta_text) { cta.textContent = f.cta_text; if (f.cta_url) cta.href = f.cta_url; }
}

function renderMap(el, s) {
  const f = s.fields;
  setText(el, 'headline', f.headline);
  const iframe = el.querySelector('iframe[data-field="embed_url"]');
  if (iframe && f.embed_url) iframe.src = f.embed_url;
}

function renderFooter(el, s) {
  const f = s.fields;
  setText(el, 'description', f.description);
  setText(el, 'copyright_text', f.copyright_text);
  const linksList = el.querySelector('[data-field="links"]');
  if (linksList && f.links) {
    linksList.innerHTML = f.links.map(l =>
      `<li data-section="${s.id}" data-field="links" data-item="${l.id}"><a href="${l.url}">${l.label}</a></li>`
    ).join('');
  }
  const socialEl = el.querySelector('[data-field="social"]');
  if (socialEl && f.social) {
    socialEl.innerHTML = '<h4>Sledujte nás</h4><div class="social-icons">' + f.social.map(sc =>
      `<a href="${sc.url}" class="social-link" data-section="${s.id}" data-field="social" data-item="${sc.id}" target="_blank" rel="noopener">${getIcon(sc.platform)}</a>`
    ).join('') + '</div>';
  }
}

function renderDefault(el, s) {
  Object.entries(s.fields).forEach(([k, v]) => {
    if (typeof v === 'string') {
      const target = el.querySelector(`[data-field="${k}"]`);
      if (!target) return;
      if (target.tagName === 'IMG') target.src = v;
      else target.textContent = v;
    }
  });
}

function setText(el, field, val) {
  if (!val) return;
  const target = el.querySelector(`[data-field="${field}"]`);
  if (!target) return;
  if (target.tagName === 'IMG') target.src = val;
  else target.textContent = val;
}

/* ===== NAV ===== */
function initNavigation() {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));
  if (toggle) toggle.addEventListener('click', () => links.classList.toggle('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('active')));
}

/* ===== ANIMATIONS ===== */
function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
}

/* ===== COUNTERS ===== */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-value[data-count]').forEach(c => {
          const target = parseInt(c.dataset.count);
          const suffix = c.dataset.suffix || '';
          let current = 0;
          const step = target / 100;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            c.textContent = Math.floor(current) + suffix;
          }, 16);
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const statsEl = document.querySelector('.stats-section');
  if (statsEl) obs.observe(statsEl);
}
