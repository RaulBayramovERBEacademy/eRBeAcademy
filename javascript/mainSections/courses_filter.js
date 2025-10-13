import { CATEGORY_LIST, SUBCATEGORY_LIST, courses } from "../data/data.js";
import { renderCourses } from "/javascript/mainSections/course_Carusel.js";

document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("category-select");
  const categoryMenu = document.getElementById("category-menu");
  const subcategorySelect = document.getElementById("subcategory-select");
  const subcategoryMenu = document.getElementById("subcategory-menu");
  const categoryLabel = categorySelect?.querySelector(".selected-label");
  const subcategoryLabel = subcategorySelect?.querySelector(".selected-label");

  if (!categorySelect || !categoryMenu) return;

  // Initial render (all courses)
  renderCourses(courses);

  // Populate categories
  const addMenuItem = (menu, text, value) => {
    const li = document.createElement("li");
    li.textContent = text;
    li.dataset.value = value;
    menu.appendChild(li);
    return li;
  };

  addMenuItem(categoryMenu, "Bütün kateqoriyalar", "__all__");
  CATEGORY_LIST.forEach((cat) => addMenuItem(categoryMenu, cat.label, cat.value));

  const toggleOpen = (elem) => elem.classList.toggle("open");
  categorySelect.querySelector(".fake-select-toggle").addEventListener("click", () => toggleOpen(categorySelect));
  subcategorySelect?.querySelector(".fake-select-toggle")?.addEventListener("click", () => toggleOpen(subcategorySelect));

  let currentCategory = "__all__";
  let currentSubcategory = "__all__";

  const applyFilter = () => {
    let filtered = courses;
    if (currentCategory !== "__all__") {
      filtered = filtered.filter((c) => c.category === currentCategory);
      if (currentSubcategory !== "__all__") {
        filtered = filtered.filter((c) => c.subcategory === currentSubcategory);
      }
    }
    renderCourses(filtered);
  };

  const populateSubcategories = () => {
    subcategoryMenu.innerHTML = "";
    addMenuItem(subcategoryMenu, "Hamısı", "__all__");
    (SUBCATEGORY_LIST[currentCategory] || []).forEach((sub) => addMenuItem(subcategoryMenu, sub.label, sub.value));
  };

  categoryMenu.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    currentCategory = li.dataset.value;
    categoryLabel.textContent = currentCategory === "__all__" ? "Bütün kateqoriyalar" : li.textContent;
    categorySelect.classList.remove("open");

    // Reset and show/hide subcategory selector
    currentSubcategory = "__all__";
    subcategoryLabel.textContent = "Alt kateqoriya";
    if (currentCategory === "__all__") {
      subcategorySelect.hidden = true;
    } else {
      subcategorySelect.hidden = false;
      populateSubcategories();
    }
    applyFilter();
  });

  subcategoryMenu.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    currentSubcategory = li.dataset.value;
    subcategoryLabel.textContent = currentSubcategory === "__all__" ? "Hamısı" : li.textContent;
    subcategorySelect.classList.remove("open");
    applyFilter();
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!categorySelect.contains(e.target)) categorySelect.classList.remove("open");
    if (subcategorySelect && !subcategorySelect.contains(e.target)) subcategorySelect.classList.remove("open");
  });
});


