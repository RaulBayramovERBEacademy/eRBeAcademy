// Cart Utilities - For managing cart operations across the site
export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (courseId) => {
  const cart = getCartItems();
  if (cart.some((item) => item.id === courseId)) {
    return false; // Item already in cart
  }
  cart.push({ id: courseId });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.dispatchEvent(new Event("cartUpdated"));
  return true;
};

export const removeFromCart = (courseId) => {
  const cart = getCartItems();
  const filteredCart = cart.filter((item) => item.id !== courseId);
  localStorage.setItem("cart", JSON.stringify(filteredCart));
  return filteredCart;
};

export const clearCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
};

export const getCartItemCount = () => {
  return getCartItems().length;
};

export const updateCartBadge = () => {
  const count = getCartItemCount();
  const badge =
    document.querySelector("#cart-badge") ||
    document.querySelector(".cart-badge");
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  }
};

// Initialize cart badge on page load
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
  });
}
