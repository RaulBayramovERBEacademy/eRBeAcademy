import { Course, courses } from "./data/data.js";

function renderCourseCategories(containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ""; // Clear previous content

  courses.forEach((course) => {
    // Card div
    const card = document.createElement("div");
    card.className = "course-card";

    // Icon
    const iconDiv = document.createElement("div");
    iconDiv.className = "course-icon";
    const icon = document.createElement("i");
    icon.className = course.iconClass;
    iconDiv.appendChild(icon);

    // Title
    const title = document.createElement("h3");
    title.textContent = course.title;

    // Tutor section
    const tutorDiv = document.createElement("div");
    tutorDiv.className = "course-tutor";
    const tutorImg = document.createElement("img");
    tutorImg.src = course.tutorPhoto;
    tutorImg.alt = course.tutorName;
    tutorImg.className = "course-tutor-photo";
    const tutorName = document.createElement("span");
    tutorName.textContent = course.tutorName;
    tutorDiv.appendChild(tutorImg);
    tutorDiv.appendChild(tutorName);

    // Description
    const desc = document.createElement("p");
    desc.textContent = course.description;

    // Start date
    const startDate = document.createElement("div");
    startDate.className = "course-start-date";
    startDate.textContent = `Başlama tarixi: ${course.startDate}`;

    // Duration
    const duration = document.createElement("div");
    duration.className = "course-duration";
    duration.textContent = `Müddət: ${course.duration}`;

    // Level
    const level = document.createElement("div");
    level.className = "course-level";
    level.textContent = `Səviyyə: ${course.level}`;

    // Append all
    card.appendChild(iconDiv);
    card.appendChild(title);
    card.appendChild(tutorDiv);
    card.appendChild(desc);
    card.appendChild(startDate);
    card.appendChild(duration);
    card.appendChild(level);

    container.appendChild(card);
  });
}

// Sayfa yüklenince otomatik çalışsın
document.addEventListener("DOMContentLoaded", function () {
  renderCourses(".courses-container");
});
