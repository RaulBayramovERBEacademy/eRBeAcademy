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
    schedule ,
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
    this.schedule = schedule || [];
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
    // 🆕 Həftəlik dərs plan
    schedule: [
      {
        week: 1,
        module: "JS Əsasları",
        title: "JavaScript-ə giriş",
        topics: [
          "Proqramlaşdırma anlayışı",
          "Console.log və dəyişənlər",
          "Vəzifələr və ifadələr",
        ],
      },
      {
        week: 2,
        module: "JS Əsasları",
        title: "Dəyişənlər və data tipləri",
        topics: [
          "var, let, const",
          "String, Number, Boolean, Null, Undefined",
          "Əməliyyatlar və tip çevirmələri",
        ],
      },
      {
        week: 3,
        module: "JS Əsasları",
        title: "Şərtlər və dövrlər",
        topics: ["if-else", "switch-case", "for və while dövrləri"],
      },
      {
        week: 4,
        module: "Funksiyalar",
        title: "Funksiyalar və Scope",
        topics: [
          "Function declaration vs expression",
          "Arrow funksiyalar",
          "Scope və closure",
        ],
      },
      {
        week: 5,
        module: "Obyekt və Array",
        title: "Array və Object-lərlə işləmək",
        topics: [
          "Array metodları: map, filter, reduce",
          "Object destructuring",
          "Spread və Rest operatorları",
        ],
      },
      {
        week: 6,
        module: "DOM Manipulyasiya",
        title: "DOM əsasları",
        topics: [
          "Element seçimi",
          "Event listener-lər",
          "DOM dəyişiklikləri və praktik tapşırıqlar",
        ],
      },
      {
        week: 7,
        module: "Asinxron JS",
        title: "Callback və Promise",
        topics: [
          "Callback funksiyalar",
          "Promise obyektləri",
          "Fetch API ilə məlumat çəkmək",
        ],
      },
      {
        week: 8,
        module: "Asinxron JS",
        title: "Async/Await və Error Handling",
        topics: [
          "Async/Await istifadəsi",
          "Try-Catch blokları",
          "Praktik layihə tapşırıqları",
        ],
      },
      {
        week: 9,
        module: "JS Əlavələri",
        title: "Event və Form Handling",
        topics: [
          "Form elementləri ilə işləmək",
          "Event delegation",
          "Validation nümunələri",
        ],
      },
      {
        week: 10,
        module: "JS Əlavələri",
        title: "Local Storage və Session Storage",
        topics: [
          "Məlumat saxlama üsulları",
          "Login vəziyyətini idarə etmək",
          "Mini storage layihəsi",
        ],
      },
      {
        week: 11,
        module: "Layihə",
        title: "Mini Layihə: API ilə tətbiq",
        topics: ["Layihə planlaması", "API inteqrasiyası", "UI təkmilləşdirmə"],
      },
      {
        week: 12,
        module: "Layihə",
        title: "Final Layihə və Təkrar",
        topics: [
          "Tam JS tətbiqi",
          "Kod keyfiyyətinin qiymətləndirilməsi",
          "Layihə təqdimatı",
        ],
      },
    ],
    // Hibrid yanaşma: modul sistemi + həftəlik plan
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
    schedule: [
      // HTML Modulu (1-4 həftə)
      {
        week: 1,
        module: "HTML Əsasları",
        title: "HTML-ə giriş",
        topics: [
          "Veb səhifə və HTML nədir",
          "HTML sənəd quruluşu: doctype, head, body",
          "Əsas teqlər: h1-h6, p, a, img, br, hr",
        ],
      },
      {
        week: 2,
        module: "HTML Əsasları",
        title: "Mətn formatlaşdırma və linklər",
        topics: [
          "b, strong, i, em, small, mark teqləri",
          "Anchor (a) ilə daxili və xarici linklər",
          "target və rel atributları",
        ],
      },
      {
        week: 3,
        module: "HTML Əlavələri",
        title: "Listlər və Cədvəllər",
        topics: [
          "ul, ol, li – siyahılar",
          "Nested listlər",
          "table, tr, th, td və colspan/rowspan",
        ],
      },
      {
        week: 4,
        module: "HTML Əlavələri",
        title: "Formlar və input elementləri",
        topics: [
          "form, input, textarea, select, button",
          "name, id, value, placeholder atributları",
          "label ilə elementlərin əlaqələndirilməsi",
        ],
      },

      // CSS Modulu (5-8 həftə)
      {
        week: 5,
        module: "CSS Əsasları",
        title: "CSS-ə giriş və seçicilər",
        topics: [
          "CSS nədir, inline/internal/external yollar",
          "Selector-lar: element, class, id",
          "Rənglər, fontlar və ölçülər (px, %, em, rem)",
        ],
      },
      {
        week: 6,
        module: "CSS Əsasları",
        title: "Box model və layout",
        topics: [
          "Margin, padding, border, content",
          "display: block, inline, inline-block",
          "width və height ilə ölçüləndirmə",
        ],
      },
      {
        week: 7,
        module: "CSS Əlavələri",
        title: "Position və z-index",
        topics: [
          "Static, relative, absolute, fixed, sticky",
          "Elementləri yerləşdirmə üsulları",
          "z-index ilə qatların nizamlanması",
        ],
      },
      {
        week: 8,
        module: "CSS Layout",
        title: "Flexbox və Grid",
        topics: [
          "display: flex və justify-content, align-items",
          "display: grid və grid-template-columns",
          "Media queries ilə cavablı dizayn",
        ],
      },

      // JavaScript Modulu (9-14 həftə)
      {
        week: 9,
        module: "JS Əsasları",
        title: "JavaScript-ə giriş",
        topics: [
          "Proqramlaşdırma anlayışı",
          "Console.log və dəyişənlər",
          "Vəzifələr və ifadələr",
        ],
      },
      {
        week: 10,
        module: "JS Əsasları",
        title: "Dəyişənlər və data tipləri",
        topics: [
          "var, let, const",
          "String, Number, Boolean, Null, Undefined",
          "Əməliyyatlar və tip çevirmələri",
        ],
      },
      {
        week: 11,
        module: "JS Əsasları",
        title: "Şərtlər və dövrlər",
        topics: ["if-else", "switch-case", "for və while dövrləri"],
      },
      {
        week: 12,
        module: "Funksiyalar",
        title: "Funksiyalar və Scope",
        topics: [
          "Function declaration vs expression",
          "Arrow funksiyalar",
          "Scope və closure",
        ],
      },
      {
        week: 13,
        module: "Obyekt və Array",
        title: "Array və Object-lərlə işləmək",
        topics: [
          "Array metodları: map, filter, reduce",
          "Object destructuring",
          "Spread və Rest operatorları",
        ],
      },
      {
        week: 14,
        module: "DOM Manipulyasiya",
        title: "DOM əsasları və event-lər",
        topics: [
          "Element seçimi",
          "Event listener-lər",
          "DOM dəyişiklikləri və praktik tapşırıqlar",
        ],
      },

      // Layihə Modulu (15-16 həftə)
      {
        week: 15,
        module: "Mini Layihə",
        title: "API ilə mini layihə",
        topics: ["Layihə planlaması", "API inteqrasiyası", "UI təkmilləşdirmə"],
      },
      {
        week: 16,
        module: "Final Layihə",
        title: "Tam veb sayt layihəsi və təkrar",
        topics: [
          "Bütün öyrənilənləri tətbiq etmək",
          "Kod keyfiyyətinin qiymətləndirilməsi",
          "Layihə təqdimatı",
        ],
      },
    ],
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
        module: "HTML Əsasları",
        title: "HTML-ə giriş",
        topics: [
          "Veb səhifə və HTML nədir",
          "HTML sənəd quruluşu: doctype, head, body",
          "Əsas teqlər: h1-h6, p, a, img, br, hr",
        ],
      },
      {
        week: 2,
        module: "HTML Əsasları",
        title: "Mətn formatlaşdırma və linklər",
        topics: [
          "b, strong, i, em, small, mark teqləri",
          "Anchor (a) ilə daxili və xarici linklər",
          "target və rel atributları",
        ],
      },
      {
        week: 3,
        module: "HTML Əlavələri",
        title: "Listlər və Cədvəllər",
        topics: [
          "ul, ol, li – siyahılar",
          "Nested listlər",
          "table, tr, th, td və colspan/rowspan",
        ],
      },
      {
        week: 4,
        module: "HTML Əlavələri",
        title: "Formlar və input elementləri",
        topics: [
          "form, input, textarea, select, button",
          "name, id, value, placeholder atributları",
          "label ilə elementlərin əlaqələndirilməsi",
        ],
      },
      {
        week: 5,
        module: "CSS Əsasları",
        title: "CSS-ə giriş və seçicilər",
        topics: [
          "CSS nədir, inline/internal/external yollar",
          "Selector-lar: element, class, id",
          "Rənglər, fontlar və ölçülər (px, %, em, rem)",
        ],
      },
      {
        week: 6,
        module: "CSS Əsasları",
        title: "Box model və layout",
        topics: [
          "Margin, padding, border, content",
          "display: block, inline, inline-block",
          "width və height ilə ölçüləndirmə",
        ],
      },
      {
        week: 7,
        module: "CSS Əlavələri",
        title: "Position və z-index",
        topics: [
          "Static, relative, absolute, fixed, sticky",
          "Elementləri yerləşdirmə üsulları",
          "z-index ilə qatların nizamlanması",
        ],
      },
      {
        week: 8,
        module: "CSS Layout",
        title: "Flexbox ilə layout dizaynı",
        topics: [
          "display: flex, justify-content, align-items, flex-wrap",
          "Header–main–footer layout praktikası",
          "Mini interaktiv dizayn layihəsi",
        ],
      },
      {
        week: 9,
        module: "CSS Layout",
        title: "Grid sistemi və cavablı dizayn",
        topics: [
          "display: grid və grid-template-columns",
          "Media queries ilə mobil uyğun dizayn",
          "Grid + Flex kombinasiya üsulları",
        ],
      },
      {
        week: 10,
        module: "Final Layihə",
        title: "Mini layihə və təkrar",
        topics: [
          "Tam veb səhifə dizaynı (portfolio / kurs səhifəsi)",
          "Layihə strukturlaşdırması və kod keyfiyyəti",
          "Final təqdimat və qiymətləndirmə",
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
