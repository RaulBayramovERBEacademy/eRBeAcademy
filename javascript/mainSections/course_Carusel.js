import { courses } from "/javascript/data/data.js";
// Qiyməti formatlama funksiyası
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GEL",
  }).format(price);
};
export function renderCourses(coursesList) {
  console.log("Rendering courses:", coursesList);
  const createCourseCard = (course) => {
    return `
    <div class="course-card" data-category="${course.category.toLowerCase()}" data-id="${
      course.id
    }">
      <div class="course-image">
        <img src= "../../images/${course.coverImg}.png" />
      </div>
      <div class="course-info">
        <h3 class="course-title">${course.title}</h3>
        <div class="course-tutor">By ${course.tutorName}</div>
        <div class="course-price">
          <span class="current-price">
          ${formatPrice(course.price || 0)}</span>
        </div>
      </div>
    </div>
  `;
  };

  try {
    const coursesContainer = document.querySelector(".course-wrapper");
    if (!coursesContainer) {
      return;
    }

    if (!coursesList || coursesList.length === 0) {
      coursesContainer.innerHTML =
        '<div class="no-courses">No courses available at the moment.</div>';
      return;
    }

    let coursesHTML = `
      <button class="scroll-btn left">◀</button>
      <div class="course-container">
        ${coursesList.map((course) => createCourseCard(course)).join("")}
      </div>
      <button class="scroll-btn right">▶</button>
    `;
    coursesContainer.innerHTML = "";
    coursesContainer.innerHTML = coursesHTML;
    const container = document.querySelector(".course-container");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    leftBtn.addEventListener("click", () => {
      container.scrollLeft -= 320;
    });

    rightBtn.addEventListener("click", () => {
      container.scrollLeft += 320;
    });

    container.addEventListener("click", (e) => {
      const card = e.target.closest(".course-card");
      const id = card ? card.getAttribute("data-id") : null;
      if (card) {
        window.location.href = `/HTML/course.html?id=${id}`;
      }
    });
  } catch (error) {
    console.error("Error initializing courses:", error);
  }
}

renderCourses(courses);
