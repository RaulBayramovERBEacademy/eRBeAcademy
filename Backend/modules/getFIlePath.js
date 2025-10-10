import path from "path";
export function getFilePath(url) {
  // Remove query string from URL for routing
  const cleanUrl = url.split("?")[0];

  const routes = {
    "/": "../HTML/index.html",
    "/index.html": "../HTML/index.html",
    "/header.html": "../HTML/header.html",
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
    "/styles/courses.css": "../styles/courses.css",
    "/javascript/headerFiles/header.js": "../javascript/headerFiles/header.js",
    "/javascript/headerFiles/MobileHeaderUtilities.js":
      "../javascript/headerFiles/MobileHeaderUtilities.js",
    "/javascript/headerFiles/categories.js":
      "../javascript/headerFiles/categories.js",
    "/javascript/hero.js": "../javascript/hero.js",
    "/javascript/index.js": "../javascript/index.js",
    "/javascript/data/data.js": "../javascript/data/data.js",
    "/javascript/course_Carusel.js": "../javascript/course_Carusel.js",
    "/javascript/auth.js": "../javascript/auth.js",
    "/javascript/auth-loader.js": "../javascript/auth-loader.js",
    "/javascript/data/data.js": "../javascript/data/data.js",
    "/favicon.ico": "../favicon.ico",
    "/images/logo.svg": "../images/logo.svg",
    "/images/logo-modern.svg": "../images/logo-modern.svg",
    "/images/hero/student-success.webp": "../images/hero/student-success.webp",
    "/images/tutor_images/elladaBayramova.jpg":
      "../images/tutor_images/elladaBayramova.jpg",
    "/images/tutor_images/ilkinMustafayev.jpg":
      "../images/tutor_images/ilkinMustafayev.jpg",
    "/images/tutor_images/raulBayramov.jpg":
      "../images/tutor_images/raulBayramov.jpg",
    "/courses/web.png": "../images/courses/web.png",
    "/courses/bio.png": "../images/courses/bio.png",
    "/courses/inf.png": "../images/courses/inf.png",
    "/courses/tebiet.png": "../images/courses/tebiet.png",
    "/courses/riyt16.png": "../images/courses/riyt16.png",
  };

  const relativePath = routes[cleanUrl];
  if (!relativePath) {
    // For any undefined routes, redirect to index.html (SPA behavior)
    if (cleanUrl.startsWith("/") && !cleanUrl.includes(".")) {
      return path.join(process.cwd(), "../HTML/index.html");
    }
    return null;
  }
  return path.join(process.cwd(), relativePath);
}
