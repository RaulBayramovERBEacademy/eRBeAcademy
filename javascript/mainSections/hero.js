import { heroSlides } from "/javascript/data/heroData.js";

let currentSlideIndex = 0;
let autoSlideInterval;

// Store original hero HTML for mobile responsiveness
const originalHero = document.querySelector(".hero").innerHTML;

function createHeroSlide(slide) {
  return `
    <div class="hero-slide" data-category="${slide.category}">
      <div class="hero_text">
        <span class="eyebrow">${slide.eyebrow}</span>
        <h1>${slide.title}</h1>
        <p>${slide.description}</p>
        <button onclick="filterCoursesByCategory('${slide.category}')">${slide.buttonText}</button>
      </div>
      <div class="hero_image">
        <img src="${slide.image}" alt="${slide.title}" />
      </div>
    </div>
  `;
}

function updateHeroContent() {
  const hero = document.querySelector(".hero");
  const currentSlide = heroSlides[currentSlideIndex];
  
  hero.innerHTML = `
    <i id="chevron-left" class="fa-solid fa-chevron-left"></i>
    ${createHeroSlide(currentSlide)}
    <i id="chevron-right" class="fa-solid fa-chevron-right"></i>
    <div class="hero-indicators">
      ${heroSlides.map((_, index) => 
        `<span class="indicator ${index === currentSlideIndex ? 'active' : ''}" data-slide="${index}"></span>`
      ).join('')}
    </div>
  `;
  
  // Re-attach event listeners
  attachHeroEventListeners();
  updateHeroLayout();
}

function attachHeroEventListeners() {
  const leftChevron = document.getElementById("chevron-left");
  const rightChevron = document.getElementById("chevron-right");
  const indicators = document.querySelectorAll(".indicator");
  
  if (leftChevron) {
    leftChevron.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex - 1 + heroSlides.length) % heroSlides.length;
      updateHeroContent();
    });
  }
  
  if (rightChevron) {
    rightChevron.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
      updateHeroContent();
    });
  }
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlideIndex = index;
      updateHeroContent();
    });
  });
}

function updateHeroLayout() {
  const hero = document.querySelector(".hero");
  if (window.innerWidth <= 768) {
    const heroImage = document.querySelector(".hero_image");
    const heroText = document.querySelector(".hero_text");
    if (heroImage && heroText) {
      hero.insertBefore(heroImage, heroText);
      // Position chevrons
      const [leftChevron, rightChevron] = hero.querySelectorAll("i");
      const heroImageHeight = heroImage.offsetHeight;
      if (leftChevron) leftChevron.style.top = heroImageHeight / 2 + "px";
      if (rightChevron) rightChevron.style.top = heroImageHeight / 2 + "px";
    }
  } else {
    // Desktop layout - chevrons positioned normally
    const [leftChevron, rightChevron] = hero.querySelectorAll("i");
    if (leftChevron) leftChevron.style.top = "";
    if (rightChevron) rightChevron.style.top = "";
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
    updateHeroContent();
  }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// Initialize hero carousel
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for other scripts to load
  setTimeout(() => {
    updateHeroContent();
    startAutoSlide();
    
    // Pause auto-slide on hover
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("mouseenter", stopAutoSlide);
      hero.addEventListener("mouseleave", startAutoSlide);
    }
  }, 100);
});

// Handle window resize
window.addEventListener("resize", updateHeroLayout);

// Global function for course filtering (called from hero buttons)
window.filterCoursesByCategory = function(category) {
  // Scroll to courses section
  const coursesSection = document.querySelector(".courses");
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Trigger course filtering
  setTimeout(() => {
    const categorySelect = document.getElementById("category-select");
    const categoryMenu = document.getElementById("category-menu");
    if (categorySelect && categoryMenu) {
      // Find and click the matching category
      const categoryItems = categoryMenu.querySelectorAll("li");
      categoryItems.forEach(item => {
        if (item.dataset.value === category) {
          item.click();
        }
      });
    }
  }, 500);
};
