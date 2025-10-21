import { renderCourseHeroSection } from "./course-page-utilities/renderCourseHero.js";
import {
  addSmoothScrolling,
  initializeEnrollmentButton,
  initializeRelatedCourses,
  addInteractiveFeatures,
} from "./course-page-utilities/utilitie-functions.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initialize course page functionality
  initializeCoursePage();
});

function initializeCoursePage() {
  renderCourseHeroSection();
  // Add smooth scrolling for internal links
  addSmoothScrolling();

  // Initialize enrollment button functionality
  initializeEnrollmentButton();

  // Initialize related courses functionality
  initializeRelatedCourses();

  // Initialize curriculum accordion functionality
  initializeCurriculumAccordion();
}

function initializeCurriculumAccordion() {
  const moduleHeaders = document.querySelectorAll(".module-header");
  moduleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const module = this.parentElement;
      const lessons = module.querySelector(".module-lessons");

      // Toggle lessons visibility
      if (lessons.style.display === "none") {
        lessons.style.display = "block";
        this.style.background =
          "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)";
      } else {
        lessons.style.display = "none";
        this.style.background =
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
      }
    });

    // Add cursor pointer to indicate clickable
    header.style.cursor = "pointer";

    // Initially hide lessons
    const lessons = header.parentElement.querySelector(".module-lessons");
    if (lessons) {
      lessons.style.display = "none";
    }
  });
}

// Add some interactive features

// Initialize interactive features when DOM is loaded
document.addEventListener("DOMContentLoaded", addInteractiveFeatures);
