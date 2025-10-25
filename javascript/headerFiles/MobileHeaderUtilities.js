export function renderMobileNavbar(header) {
  const menu_txt = `
          <li class="enroll">
            <button class="sign-in">Sign In</button>
            <button class="sign-up">Sign Up</button>
          </li>
          <li class="about-us" data-page = "about-us">
            <div>
              <i class="fa-solid fa-circle-info"></i>
              <p>Haqqımızda</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

          <li class="contact" data-page = "contact">
            <div>
              <i class="fa-solid fa-address-book"></i>
              <p>Kontakt</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

          <li class="categories" data-page = "categories">
            <div>
              <i class="fa-solid fa-list"></i>
              <p>Kategoriyalar</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

  `;
  const menu = document.createElement("div");
  menu.classList.add("mobile-menu");
  menu.innerHTML = menu_txt;
  header.appendChild(menu);
  const pageMap = {
    "about-us": "../../HTML/about.html",
    contact: "../../HTML/contact.html",
    "sign-in": "../../HTML/auth.html",
    "sign-up": "../../HTML/auth.html",
  };
  try {
    document.querySelector(".mobile-menu").addEventListener("click", (e) => {
      const target = e.target.closest("li");
      if (!target) {
        return;
      }
      const pageKey = target.dataset.page;
      if (pageKey === "categories") {
        const courseContainer = document.querySelector(".courses");
        if (!courseContainer) {
          return;
        }
        const top =
          courseContainer.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (pageKey && pageMap[pageKey]) {
        window.location.href = pageMap[pageKey];
      } else {
        throw new Error("pageKey not found!");
      }
    });
  } catch (err) {
    console.log(err);
  }
}
