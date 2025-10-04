export function renderMobileNavbar(header) {
  const menu_txt = `
          <li class="enroll">
            <button class="sign-in">Sign In</button>
            <button class="sign-up">Sign Up</button>
          </li>
          <li class="news">
            <div>
              <i class="fa-solid fa-circle-info"></i>
              <p>Haqqımızda</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

          <li class="wishlist">
            <div>
              <i class="fa-solid fa-address-book"></i>
              <p>Kontakt</p>
            </div>
            <i class="bi bi-chevron-right"></i>
          </li>

          <li class="support">
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
}
