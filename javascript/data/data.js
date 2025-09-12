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
  }) {
    this.iconClass = iconClass; // FontAwesome icon class
    this.title = title;
    this.tutorName = tutorName;
    this.tutorPhoto = tutorPhoto; // image path
    this.description = description;
    this.startDate = startDate; // YYYY-MM-DD
    this.duration = duration; // e.g. "8 weeks"
    this.level = level; // e.g. "Beginner", "Intermediate"
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
    startDate: "2024-09-20",
    duration: "8 həftə",
    level: "Orta",
  }),
  new Course({
    iconClass: "fa-brands fa-html5",
    title: "HTML/CSS",
    tutorName: "Ilkin Mustafayev",
    tutorPhoto: "/images/tutor_images/ilkinMustafayev.jpg",
    description:
      "Göz oxşayan və müasir dizaynlı saytları sıfırdan qurmağı öyrən.",
    startDate: "2024-09-25",
    duration: "6 həftə",
    level: "Başlanğıc",
  }),
  new Course({
    iconClass: "fa-solid fa-laptop-code",
    title: "ICT Literacy",
    tutorName: "Ellada Bayramova",
    tutorPhoto: "/images/tutor_images/elladaBayramova.jpg",
    description:
      "Ofis proqramları, internet təhlükəsizliyi və rəqəmsal bacarıqlarda tam hazırlıq əldə et.",
    startDate: "2024-10-01",
    duration: "5 həftə",
    level: "Başlanğıc",
  }),
  // Lazım olsa yeni kurslar əlavə edə bilərsiniz
];

export { Course, courses };
