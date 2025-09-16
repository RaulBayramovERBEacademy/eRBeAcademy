const CATEGORY_LIST = [
  { value: "programing", label: "Proqramlaşdırma" },
  {
    value: "teaching-certification",
    label: "Müəllimlik Sertifikasiyası İmtahanına Hazırlıq",
  },
  { value: "student-exam", label: "Milli İmtahana Hazırlıq" },
  { value: "student-courses", label: "Tələbələr üçün Kurslar" },
];

const SUBCATEGORY_LIST = {
  programming: [
    { value: "html-css", label: "HTML/CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "cpp", label: "C++" },
    { value: "nodejs", label: "Node.js" },
    { value: "ict-literacy", label: "ICT Literacy" },
  ],
  "teaching-certification": [
    { value: "math-1-6", label: "Riyaziyyat (1-6)" },
    { value: "math-7-12", label: "Riyaziyyat (7-12)" },
    { value: "biology", label: "Biologiya" },
    { value: "nature", label: "Təbiət" },
    { value: "informatics", label: "İnformatika" },
  ],
  "student-exam": [
    { value: "math", label: "Riyaziyyat" },
    { value: "biology", label: "Biologiya" },
    { value: "english", label: "İngilis dili" },
  ],
  "student-courses": [
    { value: "english", label: "İngilis dili" },
    { value: "math", label: "Riyaziyyat" },
    { value: "biology", label: "Biologiya" },
  ],
};
class Course {
  constructor({
    iconClass,
    title,
    tutorName,
    tutorPhoto,
    description,
    startDate,
    duration,
    level,
    category,
    subcategory,
  }) {
    if (!CATEGORY_LIST.some((cat) => cat.value === category)) {
      throw new Error(`Invalid category: ${category}`);
    }
    if (
      !SUBCATEGORY_LIST[category] ||
      !SUBCATEGORY_LIST[category].some((sub) => sub.value === subcategory)
    ) {
      throw new Error(
        `Invalid subcategory: ${subcategory} for category: ${category}`
      );
    }
    this.iconClass = iconClass; // FontAwesome icon class
    this.title = title;
    this.tutorName = tutorName;
    this.tutorPhoto = tutorPhoto; // image path
    this.description = description;
    this.startDate = startDate; // YYYY-MM-DD
    this.duration = duration; // e.g. "8 weeks"
    this.level = level; // e.g. "Beginner", "Intermediate"
    this.category = category; // e.g. "programing"
    this.subcategory = subcategory; // e.g. "javascript"
  }
}

const courses = [
  new Course({
    iconClass: "fa-brands fa-js-square",
    title: "Javascript",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Dinamik veb saytlar yaratmağı öyrən, real layihələrlə JavaScript biliklərini möhkəmləndir.",
    startDate: "2025-09-20",
    duration: "12 həftə",
    level: "Orta",
    catgeory: "programing",
    subcategory: "javascript",
  }),
  new Course({
    iconClass: "fa-brands fa-html5",
    title: "HTML/CSS",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Göz oxşayan və müasir dizaynlı saytları sıfırdan qurmağı öyrən.",
    startDate: "2025-09-25",
    duration: "6 həftə",
    level: "Başlanğıc",
    category: "programing",
    subcategory: "html-css",
  }),
  new Course({
    iconClass: "fa-solid fa-laptop-code",
    title: "ICT Literacy",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Ofis proqramları, internet təhlükəsizliyi və rəqəmsal bacarıqlarda tam hazırlıq əldə et.",
    startDate: "2025-10-01",
    duration: "13 həftə",
    level: "Başlanğıc",
    category: "student-courses",
    subcategory: "ict-literacy",
  }),
  new Course({
    iconClass: "fa-solid fa-laptop-code",
    title: "Informatika",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Ofis proqramları, internet təhlükəsizliyi və rəqəmsal bacarıqlarda tam hazırlıq əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "informatics",
  }),
  new Course({
    iconClass: "fa-solid fa-dna",
    title: "Bialogiya",
    tutorName: "Ellada Bayramova",
    tutorPhoto: "/images/tutor_images/elladaBayramova.jpg",
    description:
      "Canlıların quruluşu, funksiyaları və ekosistemlərlə əlaqələrini dərindən öyrən.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "biology",
  }),
  new Course({
    iconClass: "fa-solid fa-tree-city",
    title: "Təbiət",
    tutorName: "Ellada Bayramova",
    tutorPhoto: "/images/tutor_images/elladaBayramova.jpg",
    description:
      "Ətraf mühitin qorunması, təbii resurslar və dayanıqlı inkişaf mövzularında biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "nature",
  }),
  new Course({
    iconClass: "fa-solid fa-square-root-variable",
    title: "Riyaziyyat (7-12)",
    tutorName: "Ilkin Mustafayev",
    tutorPhoto: "/images/tutor_images/ilkinMustafayev.jpg",
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "math-1-12",
  }),
  new Course({
    iconClass: "fa-solid fa-laptop-code",
    title: "Riyaziyyat (1-6)",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Orta",
    category: "teaching-certification",
    subcategory: "math-1-6",
  }),
  new Course({
    iconClass: "fa-solid fa-square-root-variable",
    title: "Milli İmtahana Hazırlıq - Riyaziyyat",
    tutorName: "Ilkin Mustafayev",
    tutorPhoto: "/images/tutor_images/ilkinMustafayev.jpg",
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "student-exam",
    subcategory: "math",
  }),
  // Lazım olsa yeni kurslar əlavə edə bilərsiniz
];

export { Course, courses };
