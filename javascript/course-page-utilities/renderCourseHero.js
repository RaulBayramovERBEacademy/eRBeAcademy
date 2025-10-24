import { courses, SUBCATEGORY_LIST } from "../data/data.js";
export function renderCourseHeroSection() {
  const heroSection = document.querySelector(".course-hero");
  if (heroSection) {
    const id = new URLSearchParams(window.location.search).get("id");
    const course = courses.find((c) => c.id === parseInt(id));

    let courseHeroSectionHTML = `
        <div class="course-hero-container">
          <div class="course-hero-content">
            <div class="breadcrumb">
              <a href="../index.html">Ana Səhifə</a>
              <i class="fa-solid fa-chevron-right"></i>
              <a href="#">Kurslar</a>
              <i class="fa-solid fa-chevron-right"></i>
              <span>${
                SUBCATEGORY_LIST[course.category].find((subcategory) => {
                  return subcategory.value === course.subcategory;
                })?.label
              }</span>
            </div>

            <div class="course-hero-main">
              <div class="course-hero-info">
                <div class="course-category">
                  <i class="fa-solid fa-code"></i>
                  <span>${course.category}</span>
                </div>
                <h1>${
                  SUBCATEGORY_LIST[course.category].find((subcategory) => {
                    return subcategory.value === course.subcategory;
                  })?.label
                }</h1>
                <p class="course-description">
                  ${course.description}
                </p>

                <div class="course-meta">
                  <div class="meta-item">
                    <i class="fa-solid fa-clock"></i>
                    <span>${course.duration}</span>
                  </div>
                  <!-- <div class="meta-item">
                    <i class="fa-solid fa-users"></i>
                    <span>24 tələbə</span>
                  </div>
                  <div class="meta-item">
                    <i class="fa-solid fa-star"></i>
                    <span>4.9 (156 rəy)</span>
                  </div> -->
                  <div class="meta-item">
                    <i class="fa-solid fa-language"></i>
                    <span>Azərbaycan dili</span>
                  </div>
                </div>

                <div class="course-price">
                  <span class="current-price">&#8382;${
                    course.price - (course.price * (course.discount || 0)) / 100
                  }</span>
                  <span class="original-price">&#8382;${course.price}</span>
                  <span class="discount">${String(
                    course.discount
                  )}% endirim</span>
                </div>
              </div>

              <div class="course-hero-image">
                <img src="../../images/${
                  course.coverImg
                }.png" alt="JavaScript Kursu" />
                <div class="course-badge">
                  <i class="fa-solid fa-fire"></i>
                  <span>Populyar</span>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    heroSection.innerHTML = courseHeroSectionHTML;
  }
}
export function renderCurriculumAccordion() {
  const id = new URLSearchParams(window.location.search).get("id");
  const course = courses.find((c) => c.id === parseInt(id));
  let HTML = "";
  if (course.schedule.length === 0) {
    HTML = `<div class="no-curriculum">Bu kurs üçün hələlik dərs planı mövcud deyil.</div>`;
  } else {
    course.schedule.forEach((week) => {
      HTML += `<div class = "curriculum-module">
      <div class="module-header">
        <h3>Həftə ${week.week}: ${week.module}</h3>
        <p>${week.title}</p>
      </div>
      <div class="module-lessons">
      ${week.topics
        .map(
          (lesson) => `
        <div class="lesson-item">
          <i class="fa-solid fa-play-circle"></i>
          <span>${lesson}</span>
        </div>
      `
        )
        .join("")}
      </div></div>`;
    });
  }
  let curriculumContainer = document.querySelector(".curriculum");
  curriculumContainer.innerHTML = HTML;
  renderEnrollmentCardPrice(course);
  renderRelatedCourses(course);
}

function renderEnrollmentCardPrice(course) {
  let enrollmentPrice = document.querySelector(".enrollment-price");
  enrollmentPrice.innerHTML = `
    <span class="price-current">&#8382;${
      course.price - (course.price * (course.discount || 0)) / 100
    }</span>
    <span class="price-original">&#8382;${course.price}</span>
 `;
}

function renderRelatedCourses(course) {
  let relatedCoursesHTML = "<h3>Əlaqəli Kurslar</h3>";
  const relatedCourses = courses.filter((course_) => {
    return course_.category === course.category;
  });
  console.log(relatedCourses);
  relatedCourses.forEach((course_) => {
    relatedCoursesHTML += `
              <div class="related-course-item">
                <img src="/images/${course_.coverImg}.png" alt="HTML/CSS Kursu" />
                <div class="related-course-info">
                  <h4>${course_.title}</h4>
                  <span class="related-course-price">&#8382;${course_.price}</span>
                </div>
              </div>
    `;
  });
  document.querySelector(".related-courses").innerHTML = relatedCoursesHTML;
}
