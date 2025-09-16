import { courses } from "/javascript/data/data.js";
// Qiyməti formatlama funksiyası
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// Kurs kartı yaratmaq
const createCourseCard = (course) => {
  return `
    <div class="course-card" data-category="${course.category.toLowerCase()}">
      <div class="course-image">
        <i class="${course.iconClass}"></i>
      </div>
      <div class="course-info">
        <h3 class="course-title">${course.title}</h3>
        <div class="course-tutor">By ${course.tutorName}</div>
        <div class="course-price">
          <span class="current-price">${formatPrice(course.price || 0)}</span>
        </div>
      </div>
      <div class = "add-to-cart-btn-container">
        <button class="add-to-cart" data-course-id="${
          course.id
        }">Add to Cart</button>
      </div>
    </div>
  `;
};

// Kursları HTML-ə əlavə etmək
document.addEventListener("DOMContentLoaded", () => {
  try {
    const coursesContainer = document.querySelector(".course-wrapper");
    if (!coursesContainer) {
      console.error(
        "courses container not found. Please add a div with class 'courses-container' to your HTML."
      );
      return;
    }

    if (!courses || courses.length === 0) {
      coursesContainer.innerHTML =
        '<div class="no-courses">No courses available at the moment.</div>';
      return;
    }

    let coursesHTML = `
      <button class="scroll-btn left">◀</button>
      <div class="course-container">
        ${courses.map((course) => createCourseCard(course)).join("")}
      </div>
      <button class="scroll-btn right">▶</button>
    `;
    coursesContainer.innerHTML = coursesHTML;
    const container = document.querySelector(".course-container");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    leftBtn.addEventListener("click", () => {
      container.scrollLeft -= 300; // 300px sola
    });

    rightBtn.addEventListener("click", () => {
      container.scrollLeft += 300; // 300px sağa
    });
    // Event listeners
    document.querySelectorAll(".quick-view").forEach((button) => {
      button.addEventListener("click", (e) => {
        const courseId = e.currentTarget.dataset.courseId;
        const course = courses.find((p) => p.id == courseId);
        if (course) console.log("Quick view:", course);
      });
    });

    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const courseId = e.currentTarget.dataset.courseId;
        const course = courses.find((p) => p.id == courseId);
        if (course) console.log("Added to cart:", course);
      });
    });
  } catch (error) {
    console.error("Error initializing courses:", error);
  }
});
