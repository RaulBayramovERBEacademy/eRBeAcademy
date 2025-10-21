const CATEGORY_LIST = [
  { value: "programming", label: "Proqramlaşdırma" },
  {
    value: "teaching-certification",
    label: "Müəllimlik Sertifikasiyası İmtahanına Hazırlıq",
  },
  { value: "student-exam", label: "Milli İmtahana Hazırlıq" },
  { value: "student-courses", label: "Tələbələr üçün Kurslar" },
];

const SUBCATEGORY_LIST = {
  programming: [
    { value: "javascript", label: "JavaScript" },
    { value: "web-development", label: "Veb Programlaşdırma" },
    { value: "HTML/CSS", label: "HTML/CSS" },
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
    { value: "primary-education-teaching", label: "İbtidai sinif müəllimliyi" },
    { value: "english", label: "ingilis-dili" },
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
    id,
    title,
    tutorName,
    tutorPhoto,
    description,
    startDate,
    duration,
    level,
    category,
    subcategory,
    price,
    coverImg,
    discount,
    schedules,
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
    this.id = id; // unique identifier
    this.title = title;
    this.tutorName = tutorName;
    this.tutorPhoto = tutorPhoto; // image path
    this.description = description;
    this.startDate = startDate; // YYYY-MM-DD
    this.duration = duration; // e.g. "8 weeks"
    this.level = level; // e.g. "Beginner", "Intermediate"
    this.category = category; // e.g. "programing"
    this.subcategory = subcategory; // e.g. "javascript"
    this.price = price; // in USD
    this.coverImg = coverImg;
    this.discount = discount || 0; // percentage discount
    this.schedules = schedules || [];
  }
}

const courses = [
  new Course({
    id: 1001,
    title: "Javascript",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Dinamik veb saytlar yaratmağı öyrən, real layihələrlə JavaScript biliklərini möhkəmləndir.",
    startDate: "2025-11-01",
    duration: "12 həftə",
    level: "Orta",
    category: "programming",
    subcategory: "javascript",
    price: 49,
    coverImg: "courses/web",
    discount: 25,
    // 🆕 Həftəlik dərs planı
    schedule: [
      {
        week: 1,
        title: "JavaScript-ə giriş və mühitin qurulması",
        topics: [
          "Proqramlaşdırma anlayışı",
          "VS Code və Chrome DevTools istifadəsi",
          "Console.log və dəyişən anlayışı",
        ],
      },
      {
        week: 2,
        title: "Dəyişənlər, Data tipləri və Operatorlar",
        topics: [
          "var, let, const fərqləri",
          "String, Number, Boolean, Null, Undefined",
          "Əməliyyatlar və tip çevirmələri",
        ],
      },
      {
        week: 3,
        title: "Şərtlər və Dövrlər",
        topics: ["if-else", "switch-case", "for və while dövrləri"],
      },
      {
        week: 4,
        title: "Funksiyalar və Scope",
        topics: [
          "Function declaration vs expression",
          "Arrow funksiyalar",
          "Scope və closure anlayışı",
        ],
      },
      {
        week: 5,
        title: "Array və Object-lərlə işləmək",
        topics: [
          "Array metodları (map, filter, reduce)",
          "Object destructuring",
          "Spread və Rest operatorları",
        ],
      },
      {
        week: 6,
        title: "DOM Manipulyasiyası",
        topics: [
          "Element seçimi və dəyişikliklər",
          "Event listener-lər",
          "Mini interaktiv layihə",
        ],
      },
      {
        week: 7,
        title: "Asinxron JavaScript (callback, promise, async/await)",
        topics: [
          "Event loop və task queue",
          "API-lərdən məlumat çəkmək (fetch)",
          "JSON məlumatları ilə işləmək",
        ],
      },
      {
        week: 8,
        title: "Mini layihə: API ilə işləyən tətbiq",
        topics: ["Layihə planlaması", "API inteqrasiyası", "UI təkmilləşdirmə"],
      },
      {
        week: 9,
        title: "Error Handling və Debugging",
        topics: [
          "try-catch istifadəsi",
          "Console debugging üsulları",
          "Common JS səhvləri",
        ],
      },
      {
        week: 10,
        title: "Modullar və Kodun strukturu",
        topics: [
          "Modul sistemi (import/export)",
          "Kodun parçalara bölünməsi",
          "Reusable funksiyalar",
        ],
      },
      {
        week: 11,
        title: "Local Storage və Session Storage",
        topics: [
          "Məlumat saxlama üsulları",
          "Login vəziyyətinin saxlanması",
          "Mini storage layihəsi",
        ],
      },
      {
        week: 12,
        title: "Final Layihə və Təkrar",
        topics: [
          "Bütün öyrənilənlərin tətbiqi",
          "Kod keyfiyyətinin qiymətləndirilməsi",
          "Layihə təqdimatı",
        ],
      },
    ],
  }),
  new Course({
    id: 1002,
    title: "Veb programlaşdırma",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Göz oxşayan və müasir dizaynlı saytları sıfırdan qurmağı öyrən.",
    startDate: "2025-09-25",
    duration: "6 həftə",
    level: "Başlanğıc",
    category: "programming",
    subcategory: "web-development",
    price: 49,
    coverImg: "courses/web",
    discount: 25,
  }),
  new Course({
    id: 1002,
    title: "HTML/CSS",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Göz oxşayan və müasir dizaynlı saytları sıfırdan qurmağı öyrən.",
    startDate: "2025-09-25",
    duration: "10 həftə",
    level: "Başlanğıc",
    category: "programming",
    subcategory: "HTML/CSS",
    price: 49,
    coverImg: "courses/web",
    discount: 25,
    schedule: [
      {
        week: 1,
        title: "HTML əsaslarına giriş",
        topics: [
          "Veb səhifə nədir?",
          "HTML sənədinin quruluşu (doctype, head, body)",
          "Əsas teqlər: h1–h6, p, a, img, br, hr",
        ],
      },
      {
        week: 2,
        title: "Mətn formatlaşdırma və linklər",
        topics: [
          "b, strong, i, em, small, mark teqləri",
          "Anchor (a) ilə daxili və xarici linklər",
          "target və rel atributları",
        ],
      },
      {
        week: 3,
        title: "Listlər və Cədvəllər",
        topics: [
          "ul, ol, li – siyahıların yaradılması",
          "Nested listlər",
          "table, tr, th, td teqləri və colspan/rowspan",
        ],
      },
      {
        week: 4,
        title: "Formlar və input elementləri",
        topics: [
          "form, input, textarea, select, button",
          "name, id, value və placeholder atributları",
          "label ilə form elementlərini əlaqələndirmək",
        ],
      },
      {
        week: 5,
        title: "CSS-ə giriş və seçicilər",
        topics: [
          "CSS nədir və necə əlavə olunur (inline, internal, external)",
          "Basic selector-lar: element, class, id",
          "Rənglər, fontlar və ölçülər (px, %, em, rem)",
        ],
      },
      {
        week: 6,
        title: "Box modeli və layout əsasları",
        topics: [
          "Margin, padding, border, content",
          "display: block, inline, inline-block",
          "width və height ilə ölçüləndirmə",
        ],
      },
      {
        week: 7,
        title: "Position və z-index",
        topics: [
          "Static, relative, absolute, fixed, sticky mövqeləri",
          "Elementləri yerləşdirmə üsulları",
          "z-index ilə qat nizamlanması",
        ],
      },
      {
        week: 8,
        title: "Flexbox ilə layout dizaynı",
        topics: [
          "display: flex əsas anlayışları",
          "justify-content, align-items, flex-wrap",
          "Praktika: header–main–footer layout qurmaq",
        ],
      },
      {
        week: 9,
        title: "Grid sistemi və cavablı dizayn (responsive design)",
        topics: [
          "display: grid və grid-template-columns",
          "Media queries ilə mobil uyğun dizayn",
          "Grid + Flex kombinasiyası",
        ],
      },
      {
        week: 10,
        title: "Mini layihə və təkrar",
        topics: [
          "Tam veb səhifə dizaynı (portfolio və ya kurs səhifəsi)",
          "Layihənin strukturlaşdırılması",
          "Kod keyfiyyətinə diqqət və son təkrar",
        ],
      },
    ],
  }),
  new Course({
    id: 1003,
    title: "ICT Literacy",
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Ofis proqramları, internet təhlükəsizliyi və rəqəmsal bacarıqlarda tam hazırlıq əldə et.",
    startDate: "2025-10-01",
    duration: "13 həftə",
    level: "Başlanğıc",
    category: "programming",
    subcategory: "ict-literacy",
    price: 49,
    coverImg: "courses/inf",
    discount: 25,
  }),
  new Course({
    id: 1004,
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
    price: 79,
    coverImg: "courses/inf",
    discount: 25,
  }),
  new Course({
    id: 1005,
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
    price: 79,
    coverImg: "courses/bio",
    discount: 25,
  }),
  new Course({
    id: 1006,
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
    price: 79,
    coverImg: "courses/tebiet",
    discount: 25,
  }),
  new Course({
    id: 1007,
    title: "Riyaziyyat (7-12)",
    tutorName: "Ilkin Mustafayev",
    tutorPhoto: "/images/tutor_images/ilkinMustafayev.jpg",
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "math-7-12",
    price: 79,
    coverImg: "courses/inf",
    discount: 25,
  }),
  new Course({
    id: 1008,
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
    price: 79,
    coverImg: "courses/riyt16",
    discount: 25,
  }),
  new Course({
    id: 1009,
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
    price: 59,
    coverImg: "courses/inf",
    discount: 25,
  }),
  new Course({
    id: 1010,
    title: "Milli İmtahana Hazırlıq - Bialogiya",
    tutorName: "Ellada Bayramova",
    tutorPhoto: "/images/tutor_images/elladaBayramova.jpg",
    description:
      "Canlıların quruluşu, funksiyaları və ekosistemlərlə əlaqələrini dərindən öyrən.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "student-exam",
    subcategory: "biology",
    price: 79,
    coverImg: "courses/bio",
    discount: 25,
  }),
];

export { Course, courses, CATEGORY_LIST, SUBCATEGORY_LIST };
