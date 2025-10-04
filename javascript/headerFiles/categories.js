export function categoriesDropdown() {
  let container = document.querySelector(".dropdown_menu");
  if (container) {
    container.addEventListener("click", () => {
      let categories = document.querySelector(".fake-dropdown-menu");
      categories.classList.toggle("open");
      const icon = document.querySelector(
        ".fake-select-category-container .fa-solid"
      );
      if (icon.classList.contains("fa-chevron-down")) {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      } else {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
      categories.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          const value = e.target.innerHTML;
          document.querySelector(".selected-category-name").innerHTML = value;
        }
      });
    });
  }
}
