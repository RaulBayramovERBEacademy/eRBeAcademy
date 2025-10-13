import path from "path";
export function getFilePath(url) {
  // Remove query string from URL for routing
  const cleanUrl = url.split("?")[0];

  const routes = {
    "/": "../HTML/index.html",
    "/index.html": "../index.html",
    "/header.html": "../HTML/header.html",
    "/course.html": "../HTML/course.html",
    "/auth": "../HTML/auth.html",
    "/auth.html": "../HTML/auth.html",
    "/styles/variables.css": "../styles/variables.css",
    "/styles/header.css": "../styles/headerStyles/header.css",
    "/styles/mobileHeader.css": "../styles/headerStyles/mobileHeader.css",
    "/styles/categoryDropdown.css":
      "../styles/headerStyles/categoryDropdown.css",
    "/styles/general_styles.css": "../styles/general_styles.css",
    "/styles/mainSections/hero.css": "../styles/mainSections/hero.css",
    "/styles/mainSections/career.css": "../styles/mainSections/career.css",
    "/styles/mainSections/tutors.css": "../styles/mainSections/tutors.css",
    "/styles/mainSections/courses.css": "../styles/mainSections/courses.css",
    "/styles/main.css": "../styles/main.css",
    "/styles/footer.css": "../styles/footer.css",
    "/styles/course-page.css": "../styles/course-page.css",
    "/styles/auth.css": "../styles/auth.css",
    "/javascript/headerFiles/header.js": "../javascript/headerFiles/header.js",
    "/javascript/headerFiles/MobileHeaderUtilities.js":
      "../javascript/headerFiles/MobileHeaderUtilities.js",
    "/javascript/headerFiles/categories.js":
      "../javascript/headerFiles/categories.js",
    "/javascript/hero.js": "../javascript/mainSections/hero.js",
    "/javascript/course_Carusel.js":
      "../javascript/mainSections/course_Carusel.js",
    "/javascript/index.js": "../javascript/index.js",
    "/javascript/data/data.js": "../javascript/data/data.js",
    "/javascript/auth.js": "../javascript/auth.js",
    "/javascript/auth-loader.js": "../javascript/auth-loader.js",
    "/javascript/course-page.js": "../javascript/course-page.js",
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
