document.addEventListener('DOMContentLoaded', () => {

  /* Hero Typing Animation */
  const heroText = document.querySelector('.hero-content h1');
  const fullText = "Designing Dreams into Reality";
  let index = 0;
  heroText.textContent = "";
  function typeEffect() {
    if(index <= fullText.length){
      heroText.innerHTML = fullText.substring(0,index)+'<span class="cursor">|</span>';
      index++;
      setTimeout(typeEffect,100);
    }
  }
  typeEffect();

  /* Hero Bubbles */
  const hero = document.querySelector('#hero');
  if(hero){
    for(let i=0;i<15;i++){
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left=Math.random()*100+'vw';
      bubble.style.width=bubble.style.height=(10+Math.random()*30)+'px';
      bubble.style.animationDuration=(5+Math.random()*5)+'s';
      hero.appendChild(bubble);
    }
  }

  /* Smooth scrolling */
  document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      const target=document.querySelector(link.getAttribute('href'));
      if(target) window.scrollTo({top:target.offsetTop-70, behavior:'smooth'});
    });
  });

  /* Back-to-top + Progress Bar */
  const backTop=document.createElement('button');
  backTop.id='backTop'; backTop.textContent='↑';
  document.body.appendChild(backTop);
  backTop.addEventListener('click',()=>window.scrollTo({top:0, behavior:'smooth'}));

  const progress=document.createElement('div'); progress.id='progressBar';
  document.body.appendChild(progress);

  window.addEventListener('scroll', ()=>{
    const scrollPercent=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    progress.style.width=scrollPercent+'%';
    backTop.style.display=window.scrollY>300?'block':'none';
  });

  /* Fade-in Sections */
  const faders=document.querySelectorAll('.section, .card, .contact-cards');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('appear');
    });
  }, {threshold:0.2});
  faders.forEach(f=>observer.observe(f));

});
