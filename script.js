// CURSOR
const cursor = document.getElementById("cursor");
const border = document.getElementById("cursor-border");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";

  border.style.top = e.clientY - 10 + "px";
  border.style.left = e.clientX - 10 + "px";
});

// PROGRESS
window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progressBar").style.width = (scrollTop / height) * 100 + "%";

  // HEADER BG
  if(scrollTop > 50){
    document.getElementById("header").classList.add("scrolled");
  } else {
    document.getElementById("header").classList.remove("scrolled");
  }
};

// REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// PARALLAX
const parallax = document.querySelector(".parallax");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth - e.pageX) / 50;
  let y = (window.innerHeight - e.pageY) / 50;
  parallax.style.transform = `translate(${x}px, ${y}px)`;
});
