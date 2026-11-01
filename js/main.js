// Renders the whole page from data/profile.json. Edit content there, not here.

const UI = {
  en: {
    skip: 'Skip to content',
    'nav.projects': 'Projects', 'nav.experience': 'Experience', 'nav.education': 'Education',
    'nav.recognition': 'Honors', 'nav.certs': 'Certifications', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
    'hero.hello': 'hello, I’m', 'hero.currently': 'currently', 'hero.previously': 'previously',
    'hero.cta': 'See my work', 'hero.cv': 'Download CV',
    'projects.hint': 'tap a card to look inside', 'projects.all': 'All', 'projects.live': 'Live demo',
    'projects.demo': 'Try it here', 'projects.video': 'Demo video', 'projects.gallery': 'Gallery',
    'projects.code': 'Code on GitHub', 'projects.open': 'Open in new tab', 'projects.full': 'Full screen',
    'projects.exitFull': 'Exit full screen', 'projects.loading': 'Loading the live demo…', 'projects.camera': 'This demo asks for camera access. Nothing leaves your device.',
    'exp.volunteering': 'Volunteering', 'exp.details': 'Details', 'exp.present': 'Present',
    'rec.honors': 'Honors', 'rec.certs': 'Licenses & certifications', 'rec.hint': 'verify any of them with one tap', 'rec.id': 'ID',
    'rec.verify': 'Verify credential', 'rec.view': 'View certificate',
    'skills.hint': 'tap a skill to see where I used it', 'skills.languages': 'Languages',
    'contact.lead': 'I’m open to work and happy to talk about AI, research or a project idea.',
    'contact.birthday': 'Birthday',
    'a11y.menu': 'Menu', 'a11y.theme': 'Toggle dark mode', 'a11y.close': 'Close', 'a11y.prev': 'Previous', 'a11y.next': 'Next', 'a11y.home': 'Home',
    langBtn: 'ع', langLabel: 'عربي',
  },
  ar: {
    skip: 'انتقل إلى المحتوى',
    'nav.projects': 'المشاريع', 'nav.experience': 'الخبرات', 'nav.education': 'التعليم',
    'nav.recognition': 'التكريمات', 'nav.certs': 'الشهادات', 'nav.skills': 'المهارات', 'nav.contact': 'التواصل',
    'hero.hello': 'أهلًا، أنا', 'hero.currently': 'حاليًا', 'hero.previously': 'سابقًا',
    'hero.cta': 'شاهد أعمالي', 'hero.cv': 'تحميل السيرة الذاتية',
    'projects.hint': 'اضغط على البطاقة لترى التفاصيل', 'projects.all': 'الكل', 'projects.live': 'تجربة حيّة',
    'projects.demo': 'جرّبه هنا', 'projects.video': 'فيديو العرض', 'projects.gallery': 'الصور',
    'projects.code': 'الكود على GitHub', 'projects.open': 'فتح في تبويب جديد', 'projects.full': 'ملء الشاشة',
    'projects.exitFull': 'إنهاء ملء الشاشة', 'projects.loading': 'جارٍ تحميل التجربة الحيّة…', 'projects.camera': 'هذه التجربة تطلب إذن الكاميرا، ولا يغادر شيء جهازك.',
    'exp.volunteering': 'التطوع', 'exp.details': 'التفاصيل', 'exp.present': 'حتى الآن',
    'rec.honors': 'التكريمات', 'rec.certs': 'الشهادات والرخص', 'rec.hint': 'تحقّق من أي شهادة بضغطة', 'rec.id': 'المعرّف',
    'rec.verify': 'التحقق من الشهادة', 'rec.view': 'عرض الشهادة',
    'skills.hint': 'اضغط على مهارة لترى أين استخدمتها', 'skills.languages': 'اللغات',
    'contact.lead': 'متاحة لفرص العمل، ويسعدني الحديث عن الذكاء الاصطناعي أو البحث العلمي أو فكرة مشروع.',
    'contact.birthday': 'تاريخ الميلاد',
    'a11y.menu': 'القائمة', 'a11y.theme': 'تبديل الوضع الداكن', 'a11y.close': 'إغلاق', 'a11y.prev': 'السابق', 'a11y.next': 'التالي', 'a11y.home': 'الرئيسية',
    langBtn: 'EN', langLabel: 'English',
  },
};

const ICONS = {
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.9 2.3h7l4.8 6.4 5.5-6.4zm-1.2 17.9h1.9L7 4.2H5l12 16z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
  cake: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6a2 2 0 0 0 2-2c0-.4-.1-.7-.3-1L12 0l-1.7 3c-.2.3-.3.6-.3 1a2 2 0 0 0 2 2zm6 3h-5V7h-2v2H6a3 3 0 0 0-3 3v1.5c0 1.1.9 2 2 2 .5 0 1-.2 1.4-.6L8.5 13l2.1 2.1a2 2 0 0 0 2.8 0l2.1-2.1 2.1 1.9c.4.4.9.6 1.4.6 1.1 0 2-.9 2-2V12a3 3 0 0 0-3-3zm-1 7.7-1-1-1.6 1.7a3.7 3.7 0 0 1-5.2 0L7.6 15.7l-1 1c-.5.5-1.2.8-2 .8a2.9 2.9 0 0 1-1.6-.5V21c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-4c-.5.3-1 .5-1.6.5-.8 0-1.5-.3-2-.8z"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  expand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
};

const $ = (s, el = document) => el.querySelector(s);
const root = document.documentElement;

let data;
let lang = root.lang === 'ar' ? 'ar' : 'en';
const state = { filter: 'all', certFilter: 'all', openProject: null, gallery: [], galleryIndex: 0 };

const t = (v) => (v == null ? '' : typeof v === 'object' ? (v[lang] ?? v.en ?? '') : String(v));
const ui = (k, vars = {}) => (UI[lang][k] ?? UI.en[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => vars[n]);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const get = (path) => path.split('.').reduce((o, k) => o?.[k], data);

function fmtDate(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  if (!m) return String(y);
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en', { month: 'short', year: 'numeric' }).format(new Date(y, m - 1));
}
const range = (s, e) => (s ? `${fmtDate(s)} – ${e ? fmtDate(e) : ui('exp.present')}` : '');

/* ---------- Static text ---------- */

function applyStatic() {
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = ui(el.dataset.i18n)));
  document.querySelectorAll('[data-bind]').forEach((el) => (el.textContent = t(get(el.dataset.bind))));
  const langBtn = $('#langBtn');
  langBtn.textContent = ui('langBtn');
  langBtn.setAttribute('aria-label', ui('langLabel'));
  langBtn.lang = lang === 'ar' ? 'en' : 'ar';
  $('#themeBtn').setAttribute('aria-label', ui('a11y.theme'));
  $('#menuBtn').setAttribute('aria-label', ui('a11y.menu'));
  $('.nav__logo').setAttribute('aria-label', ui('a11y.home'));
  document.querySelectorAll('[data-close]').forEach((b) => b.setAttribute('aria-label', ui('a11y.close')));
  $('.lightbox__prev').setAttribute('aria-label', ui('a11y.prev'));
  $('.lightbox__next').setAttribute('aria-label', ui('a11y.next'));
  $('#year').textContent = `© ${new Date().getFullYear()}`;
}

/* ---------- Hero ---------- */

function renderHero() {
  const [current] = data.education.filter((e) => !e.end || e.end >= new Date().toISOString().slice(0, 7));
  const now = [
    current && [current.degree, current.school],
    ...data.volunteering.filter((v) => v.start && !v.end).map((v) => [v.title, v.organization]),
  ].filter(Boolean);
  const prev = [
    ...data.experience.map((x) => [x.title, x.company]),
    ...data.education.filter((e) => e !== current).map((e) => [e.degree, e.school]),
  ];
  const line = ([a, b]) => `<span><b>${esc(t(a))}</b> @ ${esc(t(b))}</span>`;
  $('#nowList').innerHTML = now.map(line).join('');
  $('#prevList').innerHTML = prev.map(line).join('');
}

/* ---------- Projects ---------- */

const projectSkills = (p) => p.tags || [];

function thumbFor(p) {
  if (p.thumb) return { src: p.thumb.src, cls: p.thumb.fit || '' };
  if (p.images?.length) return { src: p.images[0].src, cls: /architecture|framework/.test(p.images[0].src) ? 'contain' : '' };
  if (p.video) return { src: p.video.poster, cls: '' };
  return null;
}

function renderFilters() {
  const cats = Object.keys(data.projectCategories).filter((c) => data.projects.some((p) => p.category === c));
  const chips = [['all', ui('projects.all')], ...cats.map((c) => [c, t(data.projectCategories[c])])];
  if (state.filter.startsWith('tag:')) chips.push([state.filter, state.filter.slice(4)]);
  $('#filters').innerHTML = chips
    .map(([id, label]) => `<button class="chip" type="button" data-filter="${esc(id)}" aria-pressed="${state.filter === id}">${esc(label)}</button>`)
    .join('');
}

function matches(p) {
  if (state.filter === 'all') return true;
  if (state.filter.startsWith('tag:')) return projectSkills(p).includes(state.filter.slice(4));
  return p.category === state.filter;
}

function renderProjects() {
  renderFilters();
  $('#projectGrid').innerHTML = data.projects
    .map((p) => {
      const th = thumbFor(p);
      return `
      <button class="card reveal" type="button" data-project="${esc(p.id)}" ${matches(p) ? '' : 'hidden'}>
        <div class="card__media">
          ${th ? `<img src="${esc(th.src)}" alt="" loading="lazy" class="${th.cls}">` : ''}
          ${p.demo ? `<span class="badge">${ui('projects.live')}</span>` : ''}
        </div>
        <div class="card__body">
          <span class="card__meta">${esc(t(data.projectCategories[p.category]))} · ${esc(p.date || '')}</span>
          <span class="card__title">${esc(t(p.name))}</span>
          <span class="card__short">${esc(t(p.short))}</span>
          <ul class="tags">${projectSkills(p).map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
        </div>
      </button>`;
    })
    .join('');
  observeReveal($('#projectGrid'));
}

function setFilter(f) {
  state.filter = f;
  renderFilters();
  document.querySelectorAll('.card').forEach((c) => {
    c.hidden = !matches(data.projects.find((p) => p.id === c.dataset.project));
  });
}

/* ---------- Project modal ---------- */

function demoBlock(p) {
  const url = p.demo.url;
  return `
    <h3>${ui('projects.demo')}</h3>
    ${p.demo.allow === 'camera' ? `<p class="modal__meta" style="margin:-.25rem 0 .75rem">${ui('projects.camera')}</p>` : ''}
    <div class="browser" id="browser">
      <div class="browser__bar">
        <span class="browser__dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="browser__url">${esc(url.replace(/^https?:\/\//, ''))}</span>
        <button class="browser__btn" type="button" data-full title="${ui('projects.full')}" aria-label="${ui('projects.full')}">${ICONS.expand}</button>
        <a class="browser__btn" href="${esc(url)}" target="_blank" rel="noopener" title="${ui('projects.open')}" aria-label="${ui('projects.open')}">${ICONS.external}</a>
      </div>
      <div class="browser__frame">
        <span class="browser__loading">${ui('projects.loading')}</span>
        <iframe src="${esc(url)}" title="${esc(t(p.name))}" loading="lazy" ${p.demo.allow ? `allow="${esc(p.demo.allow)}"` : ''}
          onload="this.previousElementSibling.remove()"></iframe>
      </div>
    </div>`;
}

function openProject(id, push = true) {
  const p = data.projects.find((x) => x.id === id);
  if (!p) return;
  state.openProject = id;
  state.gallery = p.images || [];
  const links = [
    p.demo && `<a class="btn btn--small" href="${esc(p.demo.url)}" target="_blank" rel="noopener">${ICONS.external.replace('<svg', '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"')} ${ui('projects.open')}</a>`,
    p.repo && `<a class="btn btn--small btn--ghost" href="${esc(p.repo)}" target="_blank" rel="noopener">${ui('projects.code')}</a>`,
  ].filter(Boolean);
  $('#modalBody').innerHTML = `
    <h2 id="modalTitle">${esc(t(p.name))}</h2>
    <p class="modal__meta">${esc(t(data.projectCategories[p.category]))} · ${esc(p.date || '')}</p>
    <ul class="tags">${projectSkills(p).map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    <p class="modal__desc">${esc(t(p.description))}</p>
    ${links.length ? `<div class="modal__links">${links.join('')}</div>` : ''}
    ${p.demo ? demoBlock(p) : ''}
    ${p.video ? `<h3>${ui('projects.video')}</h3><video class="video" controls preload="none" playsinline poster="${esc(p.video.poster)}" src="${esc(p.video.src)}"></video>` : ''}
    ${state.gallery.length ? `<h3>${ui('projects.gallery')}</h3>
      <div class="gallery">${state.gallery
        .map((img, i) => `<button type="button" data-shot="${i}"><figure style="margin:0"><img src="${esc(img.src)}" alt="${esc(t(img.caption))}" loading="lazy"><figcaption>${esc(t(img.caption))}</figcaption></figure></button>`)
        .join('')}</div>` : ''}`;
  const modal = $('#projectModal');
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
  if (push) history.replaceState(null, '', `#${id}`);
}

function closeProject() {
  const modal = $('#projectModal');
  if (modal.open) modal.close();
}

$('#projectModal').addEventListener('close', (e) => {
  if (e.target.open) return; // another project was opened before this event fired
  $('#modalBody').innerHTML = ''; // stops the iframe and video
  state.openProject = null;
  if (location.hash && data.projects.some((p) => `#${p.id}` === location.hash)) history.replaceState(null, '', '#projects');
});

/* ---------- Lightbox ---------- */

function showShot(i) {
  const n = state.gallery.length;
  state.galleryIndex = (i + n) % n;
  const img = state.gallery[state.galleryIndex];
  $('#lightboxImg').src = img.src;
  $('#lightboxImg').alt = t(img.caption);
  $('#lightboxCap').textContent = `${t(img.caption)} · ${state.galleryIndex + 1}/${n}`;
  $('.lightbox__prev').style.visibility = $('.lightbox__next').style.visibility = n < 2 ? 'hidden' : '';
}
function openLightbox(i) {
  showShot(i);
  $('#lightbox').showModal();
}
$('.lightbox__prev').addEventListener('click', () => showShot(state.galleryIndex - 1));
$('.lightbox__next').addEventListener('click', () => showShot(state.galleryIndex + 1));
$('#lightbox').addEventListener('keydown', (e) => {
  const step = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
  if (step) showShot(state.galleryIndex + (lang === 'ar' ? -step : step));
});

/* ---------- Experience ---------- */

function tlItem(x, i, prefix) {
  const hasMore = x.summary || x.groups || x.description;
  const panel = hasMore
    ? `<div class="tl__panel" id="${prefix}-${i}"><div>
        ${x.summary || x.description ? `<p>${esc(t(x.summary || x.description))}</p>` : ''}
        ${x.groups ? `<div class="tl__groups">${x.groups.map((g) => `<div><h4>${esc(t(g.name))}</h4><ul>${g.items.map((it) => `<li>${esc(t(it))}</li>`).join('')}</ul></div>`).join('')}</div>` : ''}
      </div></div>`
    : '';
  const org = [t(x.company || x.organization), t(x.type), t(x.location)].filter(Boolean).join(' · ');
  const head = `
    <span class="tl__top"><span class="tl__title">${esc(t(x.title))}</span><span class="tl__date">${esc(range(x.start, x.end))}</span></span>
    <span class="tl__org">${esc(org)}</span>
    ${hasMore ? `<span class="tl__more">${ui('exp.details')}</span>` : ''}`;
  return `<li class="tl reveal">${hasMore ? `<button class="tl__toggle" type="button" aria-expanded="false" aria-controls="${prefix}-${i}">${head}</button>` : head}${panel}</li>`;
}

function renderExperience() {
  $('#expList').innerHTML = data.experience.map((x, i) => tlItem(x, i, 'exp')).join('');
  $('#volList').innerHTML = data.volunteering.map((x, i) => tlItem(x, i, 'vol')).join('');
}

/* ---------- Education, honors, certifications ---------- */

function renderEducation() {
  $('#eduList').innerHTML = data.education
    .map((e) => `<li class="row reveal"><span class="row__title">${esc(t(e.degree))}</span><span class="row__sub">${esc(t(e.school))}</span><span class="row__date">${esc(range(e.start, e.end))}</span></li>`)
    .join('');
}

function renderRecognition() {
  $('#honorList').innerHTML = data.honors
    .map((h) => `<li class="row reveal"><span class="row__title">${esc(t(h.title))}</span><span class="row__sub">${esc(t(h.issuer))}</span><span class="row__date">${esc(fmtDate(h.date))}</span>${h.description ? `<span class="row__desc">${esc(t(h.description))}</span>` : ''}</li>`)
    .join('');
  renderCerts();
}

function renderCerts() {
  const certs = data.certifications;
  const issuers = [...new Set(certs.map((c) => t(c.issuer)))];
  const chips = [['all', ui('projects.all')], ...issuers.map((i) => [i, i])];
  $('#certFilters').innerHTML = chips
    .map(([id, label]) => `<button class="chip" type="button" data-cert-filter="${esc(id)}" aria-pressed="${state.certFilter === id}">${esc(label)}</button>`)
    .join('');
  $('#certList').innerHTML = certs
    .map((c, i) => `
      <li class="cert reveal" ${state.certFilter !== 'all' && t(c.issuer) !== state.certFilter ? 'hidden' : ''}>
        <div class="cert__body">
          ${c.image
            ? `<button class="cert__mark cert__thumb" type="button" data-cert-shot="${i}" aria-label="${ui('rec.view')}: ${esc(t(c.name))}"><img src="${esc(c.image.src)}" alt="" loading="lazy"></button>`
            : `<span class="cert__mark" aria-hidden="true">${esc(t(c.issuer).charAt(0))}</span>`}
          <div>
            <div class="cert__name">${esc(t(c.name))}</div>
            <div class="cert__meta">${esc(t(c.issuer))} · ${esc(fmtDate(c.date))}</div>
            ${c.credentialId ? `<div class="cert__meta cert__id" dir="ltr">${ui('rec.id')}: ${esc(c.credentialId)}</div>` : ''}
          </div>
        </div>
        ${c.url || c.image ? `<div class="cert__actions">
          ${c.url ? `<a class="cert__link" href="${esc(c.url)}" target="_blank" rel="noopener">${ui('rec.verify')} ${ICONS.external}</a>` : ''}
          ${c.image ? `<button class="cert__link" type="button" data-cert-shot="${i}">${ui('rec.view')}</button>` : ''}
        </div>` : ''}
      </li>`)
    .join('');
  observeReveal($('#certList'));
}

function openCertImage(i) {
  const withImages = data.certifications.filter((c) => c.image);
  state.gallery = withImages.map((c) => c.image);
  openLightbox(withImages.indexOf(data.certifications[i]));
}

/* ---------- Skills ---------- */

function renderSkills() {
  const used = new Set(data.projects.flatMap(projectSkills));
  $('#skillGroups').innerHTML = data.skills
    .map((g) => `
      <div class="skill-group reveal">
        <h3>${esc(t(g.group))}</h3>
        <div class="chips">${g.items
          .map((s) => {
            const key = typeof s === 'object' ? s.en : s;
            const linked = used.has(key);
            return `<button class="chip chip--skill ${linked ? 'has-projects' : ''}" type="button" ${linked ? `data-skill="${esc(key)}"` : 'tabindex="-1" aria-disabled="true"'}>${esc(t(s))}</button>`;
          })
          .join('')}</div>
      </div>`)
    .join('');
  $('#langList').innerHTML = data.languages.map((l) => `<li><b>${esc(t(l.name))}</b><span>${esc(t(l.level))}</span></li>`).join('');
}

/* ---------- Contact ---------- */

function renderContact() {
  const L = data.basics.links;
  const email = $('#emailLink');
  email.href = `mailto:${L.email}`;
  email.textContent = L.email;
  email.dir = 'ltr';
  const items = [
    L.linkedin && `<a href="${esc(L.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin} LinkedIn</a>`,
    L.github && `<a href="${esc(L.github)}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>`,
    L.x && `<a href="${esc(L.x)}" target="_blank" rel="noopener">${ICONS.x} @${esc(L.x.split('/').pop())}</a>`,
    L.phone && `<a href="tel:${esc(L.phone)}">${ICONS.phone} <span dir="ltr" style="all:unset">${esc(L.phone.replace(/^(\+966)(\d{2})(\d{3})(\d{4})$/, '$1 $2 $3 $4'))}</span></a>`,
    `<span>${ICONS.pin} ${esc(t(data.basics.location))}</span>`,
    data.basics.birthday && `<span>${ICONS.cake} ${ui('contact.birthday')} · ${esc(t(data.basics.birthday))}</span>`,
  ].filter(Boolean);
  $('#contactList').innerHTML = items.map((i) => `<li>${i}</li>`).join('');
}

/* ---------- Behaviour ---------- */

let revealObserver;
function observeReveal(scope = document) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px' },
    );
  }
  scope.querySelectorAll('.reveal:not(.in)').forEach((el) => revealObserver.observe(el));
}

function setupNavSpy() {
  const links = [...document.querySelectorAll('.nav__links a')];
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.remove('is-active'));
      byId.get(e.target.id)?.classList.add('is-active');
    }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main > section').forEach((s) => spy.observe(s));
  const nav = $('.nav');
  addEventListener('scroll', () => nav.classList.toggle('is-scrolled', scrollY > 8), { passive: true });
}

function renderAll() {
  applyStatic();
  renderHero();
  renderProjects();
  renderExperience();
  renderEducation();
  renderRecognition();
  renderSkills();
  renderContact();
  observeReveal();
  if (state.openProject && $('#projectModal').open) openProject(state.openProject, false);
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-project],[data-filter],[data-cert-filter],[data-cert-shot],[data-skill],[data-shot],[data-full],[data-close],.tl__toggle,#menuBtn,#langBtn,#themeBtn,.nav__links a');
  if (!el) {
    if (e.target.matches('dialog')) e.target.close(); // click on the backdrop
    return;
  }
  if (el.dataset.project) openProject(el.dataset.project);
  else if (el.dataset.filter) setFilter(el.dataset.filter);
  else if (el.dataset.certFilter) {
    state.certFilter = el.dataset.certFilter;
    renderCerts();
  } else if (el.dataset.certShot) openCertImage(Number(el.dataset.certShot));
  else if (el.dataset.skill) {
    setFilter(`tag:${el.dataset.skill}`);
    $('#projects').scrollIntoView();
  } else if (el.dataset.shot) openLightbox(Number(el.dataset.shot));
  else if (el.hasAttribute('data-full')) {
    const b = $('#browser');
    const full = b.classList.toggle('is-full');
    el.setAttribute('aria-label', ui(full ? 'projects.exitFull' : 'projects.full'));
    el.title = ui(full ? 'projects.exitFull' : 'projects.full');
  } else if (el.hasAttribute('data-close')) el.closest('dialog').close();
  else if (el.classList.contains('tl__toggle')) {
    const open = el.getAttribute('aria-expanded') !== 'true';
    el.setAttribute('aria-expanded', open);
    el.parentElement.classList.toggle('is-open', open);
  } else if (el.id === 'menuBtn') {
    const open = $('#navLinks').classList.toggle('is-open');
    el.setAttribute('aria-expanded', open);
  } else if (el.id === 'langBtn') {
    lang = lang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('lang', lang); } catch (err) {}
    renderAll();
  } else if (el.id === 'themeBtn') {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (err) {}
  } else if (el.matches('.nav__links a')) {
    $('#navLinks').classList.remove('is-open');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
  }
});

// Escape leaves the demo's full-screen mode before it closes the modal.
$('#projectModal').addEventListener('cancel', (e) => {
  const b = $('#browser');
  if (b?.classList.contains('is-full')) { e.preventDefault(); b.classList.remove('is-full'); }
});

// Set basics.cv to the PDF path once it is uploaded; null keeps the button hidden.
function showCv() {
  const btn = $('#cvBtn');
  btn.hidden = !data.basics.cv;
  if (data.basics.cv) btn.href = data.basics.cv;
}

async function init() {
  const res = await fetch('data/profile.json', { cache: 'no-cache' });
  data = await res.json();
  renderAll();
  setupNavSpy();
  showCv();
  const id = location.hash.slice(1);
  if (data.projects.some((p) => p.id === id)) openProject(id, false);
}

init();
