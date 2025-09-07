import {
  products,
  Product,
  Electronics,
  Clothing,
  Books,
  Furniture,
} from "../javascript/data/products.js";

// Function to format price
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// Function to generate star rating HTML
const generateRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHTML += '<i class="fas fa-star"></i>';
    } else if (i === fullStars && hasHalfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsHTML += '<i class="far fa-star"></i>';
    }
  }
  return starsHTML;
};

// Function to create product card
const createProductCard = (product) => {
  const discountPrice = product.calculateDiscountedPrice(10); // 10% discount example

  return `
    <div class="product-card" data-category="${product.category.toLowerCase()}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        ${
          product.images.length > 1
            ? `
          <div class="image-gallery">
            ${product.images
              .map(
                (img) =>
                  `<img src="${img}" alt="${product.title}" loading="lazy">`
              )
              .join("")}
          </div>
        `
            : ""
        }
        ${product.stock < 10 ? '<span class="low-stock">Low Stock</span>' : ""}
        <div class="product-actions">
          <button class="quick-view" data-product-id="${product.id}">
            <i class="fas fa-eye"></i> Quick View
          </button>
          <button class="add-to-cart" data-product-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <div class="product-brand">${product.brand}</div>
        <div class="product-rating">
          ${generateRatingStars(product.rating)}
          <span class="rating-count">(${product.rating})</span>
        </div>
        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${
            discountPrice < product.price
              ? `
            <span class="original-price">${formatPrice(product.price)}</span>
            <span class="discount-badge">-10%</span>
          `
              : ""
          }
        </div>
        ${
          product instanceof Electronics
            ? `
          <div class="product-specs">
            <span class="spec-item"><i class="fas fa-battery-full"></i> ${product.batteryLife}h</span>
            <span class="spec-item"><i class="fas fa-weight"></i> ${product.weight}kg</span>
          </div>
        `
            : ""
        }
        ${
          product instanceof Clothing
            ? `
          <div class="product-specs">
            <span class="spec-item"><i class="fas fa-tshirt"></i> ${product.size}</span>
            <span class="spec-item"><i class="fas fa-palette"></i> ${product.color}</span>
          </div>
        `
            : ""
        }
        ${
          product instanceof Books
            ? `
          <div class="product-specs">
            <span class="spec-item"><i class="fas fa-book"></i> ${product.format}</span>
            <span class="spec-item"><i class="fas fa-user"></i> ${product.author}</span>
          </div>
        `
            : ""
        }
        ${
          product instanceof Furniture
            ? `
          <div class="product-specs">
            <span class="spec-item"><i class="fas fa-couch"></i> ${
              product.roomType
            }</span>
            <span class="spec-item"><i class="fas fa-tools"></i> ${
              product.assemblyRequired ? "Assembly Required" : "Ready to Use"
            }</span>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `;
};

// Generate products HTML
let productsHTML = '<div class="products-grid">';
products.forEach((product) => {
  productsHTML += createProductCard(product);
});
productsHTML += "</div>";

// Add event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Insert products into the page
    const productsContainer = document.querySelector(".products-container");
    if (!productsContainer) {
      console.error(
        "Products container not found. Please add a div with class 'products-container' to your HTML."
      );
      return;
    }

    if (!products || products.length === 0) {
      console.error("No products found to display.");
      productsContainer.innerHTML =
        '<div class="no-products">No products available at the moment.</div>';
      return;
    }

    productsContainer.innerHTML = productsHTML;

    // Add event listeners for product actions
    document.querySelectorAll(".quick-view").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.closest(".quick-view").dataset.productId;
        const product = products.find((p) => p.id === productId);
        if (product) {
          // Implement quick view functionality
          console.log("Quick view:", product);
        }
      });
    });

    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.closest(".add-to-cart").dataset.productId;
        const product = products.find((p) => p.id === productId);
        if (product) {
          // Implement add to cart functionality
          console.log("Added to cart:", product);
        }
      });
    });
  } catch (error) {
    console.error("Error initializing products:", error);
  }
});

// Update styles to use the imported font
const styles = `
  :root {
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-family);
    line-height: 1.5;
    color: #333;
    background-color: #f8f9fa;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .product-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }

  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .product-image {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
  }

  .product-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .product-card:hover .product-image img {
    transform: scale(1.05);
  }

  .product-actions {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(255,255,255,0.9);
    transition: bottom 0.3s ease;
  }

  .product-card:hover .product-actions {
    bottom: 0;
  }

  .product-actions button {
    flex: 1;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background: #007bff;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .product-actions button:hover {
    background: #0056b3;
  }

  .product-info {
    padding: 1rem;
  }

  .product-title {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .product-brand {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .product-rating {
    color: #ffc107;
    margin-bottom: 0.5rem;
  }

  .product-price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .current-price {
    font-size: 1.2rem;
    font-weight: 600;
    color: #28a745;
  }

  .original-price {
    text-decoration: line-through;
    color: #666;
  }

  .discount-badge {
    background: #dc3545;
    color: white;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.8rem;
  }

  .product-specs {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }

  .spec-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .low-stock {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #ffc107;
    color: #000;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
  }

  .image-gallery {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .image-gallery img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .image-gallery img:hover {
    border-color: #007bff;
  }

  .no-products {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }

    .product-actions {
      bottom: 0;
      opacity: 0.9;
    }

    .product-specs {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
