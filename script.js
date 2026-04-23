document.addEventListener('DOMContentLoaded', () => {

  /* ================= HERO TYPING ================= */
  const heroText = document.querySelector('.hero-content h1');
  const fullText = "Yahya Outkoumit";
  let index = 0;

  if(heroText){
    heroText.textContent = "";
    function typeEffect() {
      if (index <= fullText.length) {
        heroText.innerHTML =
          fullText.substring(0, index) +
          '<span class="cursor">|</span>';
        index++;
        setTimeout(typeEffect, 80);
      }
    }
    typeEffect();
  }

  /* ================= SMOOTH SCROLL ================= */
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ================= BACK TO TOP ================= */
  const backTop = document.createElement('button');
  backTop.id = 'backTop';
  backTop.innerHTML = '↑';
  document.body.appendChild(backTop);

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ================= PROGRESS BAR ================= */
  const progress = document.createElement('div');
  progress.id = 'progressBar';
  document.body.appendChild(progress);

  window.addEventListener('scroll', () => {
    const scrollPercent =
      (window.scrollY /
        (document.body.scrollHeight - window.innerHeight)) * 100;

    progress.style.width = scrollPercent + '%';

    backTop.style.opacity = window.scrollY > 300 ? '1' : '0';
  });

  /* ================= SCROLL ANIMATIONS ================= */
  const elements = document.querySelectorAll('.card, section h2, .about-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

});
