import { courses } from "../data/data.js";

// Cart management
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

export const renderCartItems = () => {
  console.log("working @@", cartItems);
  const container = document.getElementById("cart-items-container");
  const countSpan = document.getElementById("count");
  const itemCount = document.getElementById("item-count");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cartItems.length === 0) {
    container.innerHTML = `
            <div class="empty-cart-message">
              <i class="fa-solid fa-cart-shopping"></i>
              <h2>Səbətiniz boşdur</h2>
              <p>Səbətinizə kurs əlavə etmək üçün kurslar səhifəsinə keçin</p>
              <a href="/index.html#courses" class="btn-browse-courses">
                Kursları Kəşf Et
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          `;
    countSpan.textContent = "0";
    itemCount.querySelector("span").textContent = "0";
    checkoutBtn.disabled = true;
  } else {
    container.innerHTML = cartItems
      .map((item, index) => {
        const course = courses.find((c) => c.id === Number(item.id));
        console.log(course);
        if (!course) return "";

        const originalPrice = course.price;
        const discountAmount = originalPrice * (course.discount / 100);
        const finalPrice = originalPrice - discountAmount;

        return `
              <div class="cart-item" data-id="${course.id}">
                <div class="cart-item-image">
                  <img src="/images/${course.coverImg}.png" alt="${
          course.title
        }" />
                  ${
                    course.discount > 0
                      ? `<span class="discount-badge">-${course.discount}%</span>`
                      : ""
                  }
                </div>
                <div class="cart-item-info">
                  <h3>${course.title}</h3>
                  <p class="cart-item-instructor">
                    <i class="fa-solid fa-user"></i> ${course.instructor.name}
                  </p>
                  <div class="cart-item-meta">
                    <span class="duration">
                      <i class="fa-solid fa-clock"></i> ${course.duration}
                    </span>
                    <span class="level">
                      <i class="fa-solid fa-signal"></i> ${course.level}
                    </span>
                  </div>
                </div>
                <div class="cart-item-price">
                  ${
                    course.discount > 0
                      ? `
                    <div class="price-original">₼${originalPrice.toFixed(
                      2
                    )}</div>
                    <div class="price-final">₼${finalPrice.toFixed(2)}</div>
                  `
                      : `
                    <div class="price-final">₼${originalPrice.toFixed(2)}</div>
                  `
                  }
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            `;
      })
      .join("");

    countSpan.textContent = cartItems.length;
    checkoutBtn.disabled = false;
  }

  updateCartSummary();
};

const updateCartSummary = () => {
  let subtotal = 0;
  let totalDiscount = 0;

  cartItems.forEach((item) => {
    const course = courses.find((c) => c.id === item.id);
    if (course) {
      const originalPrice = course.price;
      const discountAmount = originalPrice * (course.discount / 100);
      subtotal += originalPrice - discountAmount;
      totalDiscount += discountAmount;
    }
  });

  const total = subtotal;

  document.getElementById("subtotal").textContent = `₼${total.toFixed(2)}`;
  document.getElementById("discount").textContent = `-₼${totalDiscount.toFixed(
    2
  )}`;
  document.getElementById("total").textContent = `₼${total.toFixed(2)}`;
};

const removeFromCart = (index) => {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCartItems();
};

// Checkout functionality
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cartItems.length > 0) {
    alert("Ödəniş funksionallığı tezliklə əlavə ediləcək!");
    // You can redirect to checkout page here
  }
});

// Promo code fusnctionality
// document.getElementById("apply-promo").addEventListener("click", () => {
//   const promoCode = document.getElementById("promo-code").value.trim();
//   const promoMessage = document.getElementById("promo-message");

//   if (!promoCode) {
//     promoMessage.textContent = "Zəhmət olmasa promo kod daxil edin";
//     promoMessage.className = "promo-message error";
//     return;
//   }

//   // Example promo codes
//   const promoCodes = {
//     WELCOME10: 10,
//     STUDENT20: 20,
//     SUMMER25: 25,
//   };

//   if (promoCodes[promoCode]) {
//     promoMessage.textContent = `Endirim tətbiq edildi: ${promoCodes[promoCode]}%`;
//     promoMessage.className = "promo-message success";
//   } else {
//     promoMessage.textContent = "Promo kod yanlışdır";
//     promoMessage.className = "promo-message error";
//   }
// });

// Make removeFromCart globally available
window.removeFromCart = removeFromCart;

// Initial render
renderCartItems();

// Render recommended courses
// if (cartItems.length > 0) {
//   const category = courses.find((c) => c.id === cartItems[0].id)?.category;
//   if (category) {
//     const recommended = courses
//       .filter(
//         (c) =>
//           c.category === category && !cartItems.some((item) => item.id === c.id)
//       )
//       .slice(0, 3);

//     if (recommended.length > 0) {
//       document.getElementById("recommended-section").hidden = false;
//       const grid = document.getElementById("recommended-courses");
//       grid.innerHTML = recommended
//         .map((course) => {
//           const originalPrice = course.price;
//           const discountAmount = originalPrice * (course.discount / 100);
//           const finalPrice = originalPrice - discountAmount;

//           return `
//                 <div class="recommended-course-card">
//                   <div class="recommended-course-image">
//                     <img src="/images/${course.coverImg}.png" alt="${
//             course.title
//           }" />
//                     ${
//                       course.discount > 0
//                         ? `<span class="discount-badge">-${course.discount}%</span>`
//                         : ""
//                     }
//                   </div>
//                   <div class="recommended-course-info">
//                     <h4>${course.title}</h4>
//                     <p class="recommended-course-instructor">
//                       <i class="fa-solid fa-user"></i> ${course.instructor.name}
//                     </p>
//                     <div class="recommended-course-price">
//                       ${
//                         course.discount > 0
//                           ? `
//                         <span class="price-original">₼${originalPrice.toFixed(
//                           2
//                         )}</span>
//                         <span class="price-final">₼${finalPrice.toFixed(
//                           2
//                         )}</span>
//                       `
//                           : `
//                         <span class="price-final">₼${originalPrice.toFixed(
//                           2
//                         )}</span>
//                       `
//                       }
//                     </div>
//                     <button class="btn-add-to-cart" onclick="addToCart(${
//                       course.id
//                     })">
//                       <i class="fa-solid fa-cart-plus"></i> Səbətə Əlavə Et
//                     </button>
//                   </div>
//                 </div>
//               `;
//         })
//         .join("");
//     }
//   }
// }

// Add to cart function
window.addToCart = (courseId) => {
  if (cartItems.some((item) => item.id === courseId)) {
    alert("Bu kurs artıq səbətdədir");
    return;
  }
  cartItems.push({ id: courseId });
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCartItems();
  location.reload();
};
