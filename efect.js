const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;
let index = 0;

function showSlide(n) {
  index = (n + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateButtons();
}


function updateButtons() {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Se estiver no primeiro slide, esconde o botão "prev"
  if (index === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "block";
  }
  // Se estiver no último slide, esconde o botão "next"
  else if (index === total - 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "block";
  }
  // Nos demais, mostra os dois
  else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}


setInterval(() => {
  showSlide(index + 1)
}, 6000);


// Botão "next"
document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));

// Botão "prev"
document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));

// Inicializa
showSlide(0);


const boxes = document.querySelectorAll('.banner-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

boxes.forEach(box => observer.observe(box));

// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const menuEspaco = document.querySelector('.menu-espaco');

hamburger.addEventListener('click', () => {
    menuEspaco.classList.toggle('open');
});

