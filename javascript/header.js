document.addEventListener("DOMContentLoaded", function () {
  const originalHeader = document.querySelector("header").innerHTML;
  const originalHero = document.querySelector(".hero").innerHTML;

  // Mobile menu auth button handlers - now handled by AuthLoader
  function setupMobileAuthButtons() {
    // Mobile auth buttons are now handled by the AuthLoader class
    // This function is kept for compatibility but does nothing
  }
  function updateHeaderLayout() {
    let header = document.querySelector("header");
    if (window.innerWidth <= 768) {
      if (header.classList.contains("mobile-header")) {
        return;
      }
      header.classList.add("mobile-header");
      const icons = header.querySelector(".icons");
      const search_icon = document.createElement("i");
      search_icon.classList.add("fa-solid", "fa-magnifying-glass");
      icons.appendChild(search_icon);
      icons.insertBefore(search_icon, icons.querySelector("#cart_icon"));
      const hamburger_menu = header.querySelector("i");

      hamburger_menu.addEventListener("click", function () {
        const isOpen = hamburger_menu.classList.contains("fa-xmark");

        if (isOpen) {
          // Menü açıksa kapat
          const mobileMenu = document.querySelector(".mobile-menu");
          if (mobileMenu) {
            mobileMenu.remove();
          }
          hamburger_menu.classList.replace("fa-xmark", "fa-bars");
        } else {
          // Menü kapalıysa aç
          openMenu(header); // Eğer header gerekli değilse
          hamburger_menu.classList.replace("fa-bars", "fa-xmark");
        }
      });

      function openMenu(header) {
        const menu_txt = `
          <li class="enroll">
            <button class="sign-in">Sign In</button>
            <button class="sign-up">Sign Up</button>
          </li>
          <li class="news">
            <div>
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <path d="M30 52.16c.81-2.07 7.06-17 19.76-19.86a.09.09 0 000-.18c-2.14-.86-15.22-6.57-19.38-20.26a.09.09 0 00-.18 0c-.51 2.27-3.94 14.43-20 20a.1.1 0 000 .19c2.24.38 13.48 3.14 19.62 20.15a.1.1 0 00.18-.04zM48.79 25.08c.29-.74 2.52-6.07 7.06-7.09v-.07c-.76-.3-5.43-2.34-6.92-7.23h-.07c-.18.82-1.4 5.16-7.14 7.13v.07c.8.14 4.81 1.12 7 7.2l.07-.01z"></path>
              </svg>
              <p>News</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

          <li class="wishlist">
            <div>
              <i class="fa-regular fa-heart"></i>
              <p>Wishlist</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

          <li class="support">
            <div>
              <i class="fa-regular fa-envelope"></i>
              <p>Support</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

  `;

        const menu = document.createElement("div");
        menu.classList.add("mobile-menu");
        menu.innerHTML = menu_txt;
        header.appendChild(menu);

        // Setup mobile auth buttons after menu is created
        setTimeout(() => {
          setupMobileAuthButtons();
        }, 100);
      }
    } else {
      if (!header.classList.contains("mobile-header")) return;
      header.innerHTML = originalHeader;
      header.classList.remove("mobile-header");
      header.style.height = "";
      header.style.paddingBottom = "";
    }
  }
  function updateHero() {
    const hero = document.querySelector(".hero");
    if (window.innerWidth <= 768) {
      const heroImage = document.querySelector(".hero_image");
      const heroText = document.querySelector(".hero_text");
      hero.insertBefore(heroImage, heroText);
      // for chevrons
      const [leftChevron, rightChevron] = hero.querySelectorAll("i");
      const heroImageHeight = heroImage.offsetHeight;
      leftChevron.style.top = heroImageHeight / 2 + "px";
      rightChevron.style.top = heroImageHeight / 2 + "px";
    } else {
      hero.innerHTML = originalHero;
    }
  }
  updateHeaderLayout();
  updateHero();

  // User icon click handler is now handled by AuthLoader
  // Resize olunca da her seferinde kontrol et
  window.addEventListener("resize", updateHeaderLayout);
  window.addEventListener("resize", updateHero);
});
