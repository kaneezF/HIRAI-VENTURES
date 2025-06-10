const testimonials = [
  {
    text: "Hirai Ventures transformed our energy infrastructure. Their EV solutions are top-notch and truly sustainable.",
    name: "Jane Doe",
    title: "CEO, ElectroCharge Inc.",
  },
  {
    text: "Their expertise in waste management helped us reduce our carbon footprint.",
    name: "John Smith",
    title: "Operations Director, Green Harvest",
  },
  {
    text: "We partnered with Hirai for our renewable energy project and saw immediate results.",
    name: "Alice Brown",
    title: "CTO, SunPower Corp.",
  },
  {
    text: "Exceptional team and great solutions that actually work.",
    name: "Michael Lee",
    title: "Sustainability Lead, EcoWise Ltd.",
  },
  {
    text: "Hirai Ventures helped us reimagine energy use across our facilities.",
    name: "Priya Kumar",
    title: "VP, FutureGrid",
  },
  {
    text: "Reliable, innovative, and eco-conscious – we’re very happy with their service.",
    name: "Carlos Vega",
    title: "Director, EnviroTech",
  },
];

const track = document.getElementById("carouselTrack");
const dotsContainer = document.getElementById("paginationDots");
const cardsPerSlide = window.innerWidth <= 768 ? 1 : 2;
let currentIndex = 0;
let totalSlides;

function renderCarousel() {
  track.innerHTML = "";
  dotsContainer.innerHTML = "";
  totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  testimonials.forEach((t, index) => {
    const positionClass =
      index % cardsPerSlide === 0
        ? "left-card"
        : (index + 1) % cardsPerSlide === 0 || index === testimonials.length - 1
        ? "right-card"
        : "";

    const cardHTML = `
    <div class="testimonial-card ${positionClass}">
      <div class="card">
        <p>"${t.text}"</p>
        <div class="author">
          <div class="author-info">
            <strong>${t.name}</strong>
            <p>${t.title}</p>
          </div>
        </div>
      </div>
    </div>
  `;
    track.innerHTML += cardHTML;
  });

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === currentIndex ? " active" : "");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  updateCarousel();
}

function updateCarousel() {
  const shift = -(currentIndex * 100);
  track.style.transform = `translateX(${shift}%)`;

  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

window.addEventListener("resize", () => {
  location.reload(); // Reload to reset slides on resize
});

renderCarousel();

function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("show");
}
