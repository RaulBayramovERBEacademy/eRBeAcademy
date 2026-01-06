import { addToCart, updateCartBadge } from "../cart/cart-utilities.js";

export function addSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

export function initializeEnrollmentButton() {
  const enrollBtn = document.querySelector(".enroll-btn");

  if (enrollBtn) {
    enrollBtn.addEventListener("click", function () {
      // Add loading state
      this.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Yüklənir...';
      this.disabled = true;

      // Simulate enrollment process
      setTimeout(() => {
        this.innerHTML = '<i class="fa-solid fa-check"></i> Uğurla Qoşuldu!';
        this.style.background = "var(--secondary-color)";

        // Show success message
        showNotification("Kursa uğurla qoşuldunuz!", "success");

        // Reset button after 3 seconds
        setTimeout(() => {
          this.innerHTML =
            '<i class="fa-solid fa-shopping-cart"></i> Kursa Qoşul';
          this.disabled = false;
          this.style.background = "";
        }, 3000);
      }, 2000);
      const id = new URLSearchParams(window.location.search).get("id");
      addToCart(id);
      updateCartBadge();
    });
  }
}

export function initializeRelatedCourses() {
  const relatedCourseItems = document.querySelectorAll(".related-course-item");

  relatedCourseItems.forEach((item) => {
    item.addEventListener("click", function () {
      const courseTitle = this.querySelector("h4").textContent;

      // Simulate navigation to course page
      showNotification(`${courseTitle} kursuna keçid edilir...`, "info");

      // In a real application, you would navigate to the course page
      // window.location.href = `/course/${courseId}`;
    });
  });
}

export function addInteractiveFeatures() {
  // Add hover effects to course features
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
      this.style.boxShadow = "0 5px 15px rgba(34, 197, 94, 0.2)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
      this.style.boxShadow = "none";
    });
  });

  // Add click effect to lesson items
  const lessonItems = document.querySelectorAll(".lesson-item");
  lessonItems.forEach((item) => {
    item.addEventListener("click", function () {
      const lessonTitle = this.querySelector("span").textContent;
      showNotification(`${lessonTitle} dərsinə başlanılır...`, "info");
    });
  });
}

export function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fa-solid fa-${
              type === "success"
                ? "check-circle"
                : type === "error"
                ? "exclamation-circle"
                : "info-circle"
            }"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "var(--secondary-color)"
            : type === "error"
            ? "#ef4444"
            : "var(--primary-color)"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

  notification.querySelector(".notification-content").style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: var(--small);
        font-weight: 500;
    `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

export function initializeCurriculumAccordion() {
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
