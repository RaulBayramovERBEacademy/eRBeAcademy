import { renderMobileNavbar } from "../headerFiles/MobileHeaderUtilities.js";
import { categoriesDropdown } from "../headerFiles/categories.js";
document.addEventListener("DOMContentLoaded", function () {
  (async function () {
    try {
      const response = await fetch("/HTML/header.html");
      const headerHTML = await response.text();
      document.querySelector("header").innerHTML = headerHTML;
      const originalHeader = document.querySelector("header").innerHTML;
      document
        .querySelector(".logo")
        .addEventListener(
          "click",
          () => (window.location.href = "/index.html")
        );
      function wait100s() {}
      function updateHeaderLayout() {
        let header = document.querySelector("header");
        if (window.innerWidth <= 768) {
          if (header.classList.contains("mobile-header")) {
            return;
          }
          header.classList.add("mobile-header");

          const hamburger_menu = header.querySelector("i");

          hamburger_menu.addEventListener("click", function () {
            const isOpen = hamburger_menu.classList.contains("fa-xmark");

            if (isOpen) {
              const mobileMenu = document.querySelector(".mobile-menu");
              if (mobileMenu) {
                mobileMenu.remove();
              }
              hamburger_menu.classList.replace("fa-xmark", "fa-bars");
            } else {
              renderMobileNavbar(header);
              hamburger_menu.classList.replace("fa-bars", "fa-xmark");
            }
          });

          setTimeout(() => {
            wait100s();
          }, 100);
        } else {
          if (!header.classList.contains("mobile-header")) return;
          header.innerHTML = originalHeader;
          header.classList.remove("mobile-header");
          header.style.height = "";
          header.style.paddingBottom = "";
          categoriesDropdown();
        }
      }
      updateHeaderLayout();
      categoriesDropdown();
      window.addEventListener("resize", updateHeaderLayout);
    } catch (error) {
      console.log(error);
    }
  })();
});
