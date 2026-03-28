// ── AUTO-LOAD PHOTO ──
// Place peter.jpg in the same folder as index.html
const img = new Image();
img.src = 'peter.jpg';
img.onload = function () {
  const frame = document.getElementById('photoFrame');
  frame.innerHTML = '';
  img.style.cssText =
    'width:260px;height:320px;object-fit:cover;display:block;' +
    'filter:grayscale(20%) contrast(1.05);' +
    'border:1px solid rgba(0,245,255,0.15);position:relative;z-index:1;';
  frame.appendChild(img);
};

// ── SKILL BAR ANIMATIONS (triggered on scroll) ──
const fills = document.querySelectorAll('.skill-bar-fill');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const w = e.target.dataset.width;
        e.target.style.width = w + '%';
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 }
);
fills.forEach((f) => observer.observe(f));

// ── CONTACT FORM SUBMIT FEEDBACK ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'MESSAGE SENT ✓';
  btn.style.background = 'var(--cyan)';
  btn.style.color = 'var(--dark)';
  setTimeout(() => {
    btn.textContent = 'SEND MESSAGE';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}
