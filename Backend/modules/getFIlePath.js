import path from "path";
export function getFilePath(url) {
  // Remove query string from URL for routing
  const cleanUrl = url.split('?')[0];
  
  const routes = {
    "/": "../HTML/index.html",
    "/index.html": "../HTML/index.html",
    "/auth": "../HTML/auth.html",
    "/auth.html": "../HTML/auth.html",
    "/styles/variables.css": "../styles/variables.css",
    "/styles/header.css": "../styles/header.css",
    "/styles/general_styles.css": "../styles/general_styles.css",
    "/styles/hero.css": "../styles/hero.css",
    "/styles/career.css": "../styles/career.css",
    "/styles/tutors.css": "../styles/tutors.css",
    "/styles/footer.css": "../styles/footer.css",
    "/styles/auth.css": "../styles/auth.css",
    "/javascript/header.js": "../javascript/header.js",
    "/javascript/hero.js": "../javascript/hero.js",
    "/javascript/data/products.js": "../javascript/data/products.js",
    "/javascript/auth.js": "../javascript/auth.js",
    "/javascript/auth-loader.js": "../javascript/auth-loader.js",
    "/images/logo-modern.svg": "../images/logo-modern.svg",
    "/images/hero/hero_ai.jpg": "../images/hero/hero_ai.jpg",
    "/images/Categories/cookware.jpg": "../images/Categories/cookware.jpg",
    "/images/Categories/utensils.jpg": "../images/Categories/utensils.jpg",
    "/images/Categories/drinkware.jpg": "../images/Categories/drinkware.jpg",
    "/images/Categories/appliances.jpg": "../images/Categories/appliances.jpg",
    "/images/Categories/bathroom.jpg": "../images/Categories/bathroom.jpg",
    "/images/Categories/living.jpg": "../images/Categories/living.jpg",
    "/images/Categories/bedroom.jpg": "../images/Categories/bedroom.jpg",
    "/images/Categories/decor.jpg": "../images/Categories/decor.jpg",
    "/images/tutor_images/elladaBayramova.jpg": "../images/tutor_images/elladaBayramova.jpg",
    "/images/tutor_images/ilkinMustafayev.jpg": "../images/tutor_images/ilkinMustafayev.jpg",
    "/images/tutor_images/raulBayramov.jpg": "../images/tutor_images/raulBayramov.jpg",
  };

  const relativePath = routes[cleanUrl];
  if (!relativePath) {
    // For any undefined routes, redirect to index.html (SPA behavior)
    if (cleanUrl.startsWith('/') && !cleanUrl.includes('.')) {
      return path.join(process.cwd(), "../HTML/index.html");
    }
    return null;
  }
  return path.join(process.cwd(), relativePath);
}
