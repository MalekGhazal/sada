// Header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), i * 60);
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    item.classList.toggle('open', !isOpen);
    a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
  });
});

(function () {
  const words = [
    'فيديو واحد',
    'بث واحد',
    'أغنية واحدة',
    'منتج واحد',
    'خدمة واحدة',
    'حدث واحد',
    'فلم واحد',
    'مسلسل واحد',
  ];
  const el = document.getElementById('rotWord');
  if (!el) return;

  let i = 0;
  setInterval(() => {
    el.classList.add('rot-out');
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove('rot-out');
    }, 350); // matches the CSS transition duration
  }, 2000);
})();
