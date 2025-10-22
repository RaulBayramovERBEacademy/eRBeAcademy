import {
  renderCourseHeroSection,
  renderCurriculumAccordion,
} from "./course-page-utilities/renderCourseHero.js";
import {
  addSmoothScrolling,
  initializeEnrollmentButton,
  initializeRelatedCourses,
  addInteractiveFeatures,
  initializeCurriculumAccordion,
} from "./course-page-utilities/utilitie-functions.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initialize course page functionality
  initializeCoursePage();
});

function initializeCoursePage() {
  renderCourseHeroSection();
  renderCurriculumAccordion();
  // Add smooth scrolling for internal links
  addSmoothScrolling();

  // Initialize enrollment button functionality
  initializeEnrollmentButton();

  // Initialize related courses functionality
  initializeRelatedCourses();

  // Initialize curriculum accordion functionality
  initializeCurriculumAccordion();
  function heroLayoutAdjust() {
    const courseHero = document.querySelector(".course-hero-main");
    if (window.innerWidth <= 768) {
      courseHero.insertBefore(
        document.querySelector(".course-hero-image"),
        courseHero.querySelector(".course-hero-info")
      );
    } else {
      courseHero.insertBefore(
        courseHero.querySelector(".course-hero-info"),
        document.querySelector(".course-hero-image")
      );
    }
  }
  window.addEventListener("resize", heroLayoutAdjust);
  heroLayoutAdjust();
}

// Add some interactive features

// Initialize interactive features when DOM is loaded
document.addEventListener("DOMContentLoaded", addInteractiveFeatures);
