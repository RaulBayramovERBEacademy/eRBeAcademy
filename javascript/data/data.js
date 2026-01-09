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
    { value: "physical-education", label: "Idman"},
    { value: "literature", label: "Ədəbiyyat"}, 
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

class Instructor {
  constructor(name, profession, description, tutorIMG) {
    this.name = name;
    this.profession = profession;
    this.description = description;
    this.tutorIMG = tutorIMG;
  }
}

class Course {
  constructor({
    id,
    title,
    instructor,
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
    schedule,
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
    this.instructor = instructor;
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
    id: 1000,
    title: "Javascript",
    instructor: new Instructor(
      "Raul Bayramov",
      "Junior Full-stack developer/Informatika müəllimi",
      `Kompüter Elmləri və İnformasiya Texnologiyaları üzrə sertifikatlı mütəxəssisəm. Andersen və A1QA kimi iri şirkətlərdə iş təcrübəsi olan, React və Node.js texnologiyaları üzrə ixtisaslaşmış full-stack developerəm.

Bununla yanaşı, müəllimlik imtahanını uğurla vermişəm və hal-hazırda tələbələri imtahanlara və praktiki biliklərə hazırlayan müəllim kimi fəaliyyət göstərirəm. Real proqramlaşdırma təcrübəsini tədris prosesi ilə birləşdirərək, mövzuları sadə, aydın və praktik formada izah edirəm.`,
      "/images/tutor_images/raulBayramov.jpg"
    ),
    description:
      "Dinamik veb saytlar yaratmağı öyrən, real layihələrlə JavaScript biliklərini möhkəmləndir.",
    startDate: "2025-11-01",
    duration: "12 həftə",
    level: "Orta",
    category: "programming",
    subcategory: "javascript",
    price: 79,
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
    id: 1001,
    title: "Veb programlaşdırma",
    instructor: new Instructor(
      "Raul Bayramov",
      "Junior Full-stack developer/Informatika müəllimi",
      `Kompüter Elmləri və İnformasiya Texnologiyaları üzrə sertifikatlı mütəxəssisəm. Andersen və A1QA kimi iri şirkətlərdə iş təcrübəsi olan, React və Node.js texnologiyaları üzrə ixtisaslaşmış full-stack developerəm.

Bununla yanaşı, müəllimlik imtahanını uğurla vermişəm və hal-hazırda tələbələri imtahanlara və praktiki biliklərə hazırlayan müəllim kimi fəaliyyət göstərirəm. Real proqramlaşdırma təcrübəsini tədris prosesi ilə birləşdirərək, mövzuları sadə, aydın və praktik formada izah edirəm.`,
      "/images/tutor_images/raulBayramov.jpg"
    ),
    description:
      "Göz oxşayan və müasir dizaynlı saytları sıfırdan qurmağı öyrən.",
    startDate: "2025-09-25",
    duration: "6 həftə",
    level: "Başlanğıc",
    category: "programming",
    subcategory: "web-development",
    price: 79,
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
    instructor: new Instructor(
      "Raul Bayramov",
      "Junior Full-stack developer/Informatika müəllimi",
      `Kompüter Elmləri və İnformasiya Texnologiyaları üzrə sertifikatlı mütəxəssisəm. Andersen və A1QA kimi iri şirkətlərdə iş təcrübəsi olan, React və Node.js texnologiyaları üzrə ixtisaslaşmış full-stack developerəm.

Bununla yanaşı, müəllimlik imtahanını uğurla vermişəm və hal-hazırda tələbələri imtahanlara və praktiki biliklərə hazırlayan müəllim kimi fəaliyyət göstərirəm. Real proqramlaşdırma təcrübəsini tədris prosesi ilə birləşdirərək, mövzuları sadə, aydın və praktik formada izah edirəm.`,
      "/images/tutor_images/raulBayramov.jpg"
    ),
    description:
      "Göz oxşayan və müasir dizaynlı saytları sıfırdan qurmağı öyrən.",
    startDate: "2025-09-25",
    duration: "10 həftə",
    level: "Başlanğıc",
    category: "programming",
    subcategory: "HTML/CSS",
    price: 79,
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
    instructor: new Instructor(
      "Raul Bayramov",
      "Junior Full-stack developer/Informatika müəllimi",
      `Kompüter Elmləri və İnformasiya Texnologiyaları üzrə sertifikatlı mütəxəssisəm. Andersen və A1QA kimi iri şirkətlərdə iş təcrübəsi olan, React və Node.js texnologiyaları üzrə ixtisaslaşmış full-stack developerəm.

Bununla yanaşı, müəllimlik imtahanını uğurla vermişəm və hal-hazırda tələbələri imtahanlara və praktiki biliklərə hazırlayan müəllim kimi fəaliyyət göstərirəm. Real proqramlaşdırma təcrübəsini tədris prosesi ilə birləşdirərək, mövzuları sadə, aydın və praktik formada izah edirəm.`,
      "/images/tutor_images/raulBayramov.jpg"
    ),
    description:
      "Ofis proqramları, internet təhlükəsizliyi və rəqəmsal bacarıqlarda tam hazırlıq əldə et.",
    startDate: "2025-10-01",
    duration: "13 həftə",
    level: "Başlanğıc",
    category: "programming",
    subcategory: "ict-literacy",
    price: 79,
    coverImg: "courses/ICT",
    discount: 25,
  }),
  new Course({
    id: 1004,
    title: "Informatika",
    instructor: new Instructor(
      "Raul Bayramov",
      "Junior Full-stack developer/Informatika müəllimi",
      `Kompüter Elmləri və İnformasiya Texnologiyaları üzrə sertifikatlı mütəxəssisəm. Andersen və A1QA kimi iri şirkətlərdə iş təcrübəsi olan, React və Node.js texnologiyaları üzrə ixtisaslaşmış full-stack developerəm.

Bununla yanaşı, müəllimlik imtahanını uğurla vermişəm və hal-hazırda tələbələri imtahanlara və praktiki biliklərə hazırlayan müəllim kimi fəaliyyət göstərirəm. Real proqramlaşdırma təcrübəsini tədris prosesi ilə birləşdirərək, mövzuları sadə, aydın və praktik formada izah edirəm.`,
      "/images/tutor_images/raulBayramov.jpg"
    ),
    description:
      "Ofis proqramları, internet təhlükəsizliyi və rəqəmsal bacarıqlarda tam hazırlıq əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "informatics",
    price: 100,
    coverImg: "courses/inf",
    discount: 0,
    schedule: [
      // 1. Kompüterə giriş və informasiya (1–5 həftə)
      {
        week: 1,
        module: "Kompüterə Giriş",
        title: "Kompüter və informasiya anlayışı",
        topics: [
          "İnformasiya anlayışı",
          "Kompüterin təyinatı",
          "Kompüter növləri",
        ],
      },
      {
        week: 2,
        module: "Kompüter Quruluşu",
        title: "Əsas komponentlər",
        topics: [
          "Motherboard",
          "CPU və xüsusiyyətləri",
          "RAM, ROM, Cache, Virtual Memory",
        ],
      },
      {
        week: 3,
        module: "Periferiya",
        title: "Giriş və çıxış qurğuları",
        topics: [
          "Klaviatura və mouse",
          "Printer, monitor",
          "Portlar: USB, HDMI, Audio",
        ],
      },
      {
        week: 4,
        module: "İnformasiya və Kodlama",
        title: "Kodlaşdırma sistemləri",
        topics: [
          "ASCII və Unicode",
          "Bit və Byte",
          "Say sistemləri",
        ],
      },
      {
        week: 5,
        module: "Məlumat Ölçüləri",
        title: "Ölçü vahidləri",
        topics: [
          "KB, MB, GB, TB",
          "Binary və Decimal",
        ],
      },
    
      // 2. Windows 10 (6–9 həftə)
      {
        week: 6,
        module: "Windows 10",
        title: "Əməliyyat sistemi",
        topics: [
          "OS anlayışı",
          "Boot prosesi",
          "Shutdown, Restart, Sleep",
        ],
      },
      {
        week: 7,
        module: "Windows İnterfeysi",
        title: "Desktop və Taskbar",
        topics: ["Start menyu", "Pəncərələr", "Fayl Explorer"],
      },
      {
        week: 8,
        module: "Fayl Sistemi",
        title: "Fayllar və qovluqlar",
        topics: ["Create, delete", "Copy, move", "File types"],
      },
      {
        week: 9,
        module: "Sistem Ayarları",
        title: "Control Panel",
        topics: ["Display", "Language", "Users", "Programs"],
      },
    
      // 3. MS Word (10–13 həftə) ✅ 4 həftə
      {
        week: 10,
        module: "MS Word",
        title: "Word-ə giriş",
        topics: ["İnterfeys", "Yeni sənəd", "Save / Open"],
      },
      {
        week: 11,
        module: "MS Word",
        title: "Mətn formatlama",
        topics: ["Font", "Paragraph", "Styles"],
      },
      {
        week: 12,
        module: "MS Word",
        title: "Cədvəllər və obyektlər",
        topics: ["Tables", "Pictures", "SmartArt"],
      },
      {
        week: 13,
        module: "MS Word",
        title: "Uzun sənədlər",
        topics: ["Mündəricat", "Header/Footer", "PDF export"],
      },
    
      // 4. MS PowerPoint (14–16 həftə) ✅ 3 həftə
      {
        week: 14,
        module: "MS PowerPoint",
        title: "Prezentasiyaya giriş",
        topics: ["Slides", "Layouts", "Themes"],
      },
      {
        week: 15,
        module: "MS PowerPoint",
        title: "Dizayn və animasiya",
        topics: ["Animations", "Transitions", "SmartArt"],
      },
      {
        week: 16,
        module: "MS PowerPoint",
        title: "Təqdimat",
        topics: ["Slide show", "Export", "Print"],
      },
    
      // 5. MS Excel (17–20 həftə) ✅ 4 həftə
      {
        week: 17,
        module: "MS Excel",
        title: "Excel əsasları",
        topics: ["Cells", "Rows", "Columns"],
      },
      {
        week: 18,
        module: "MS Excel",
        title: "Formullar",
        topics: ["SUM", "IF", "AVERAGE"],
      },
      {
        week: 19,
        module: "MS Excel",
        title: "Məlumat analizi",
        topics: ["Sort", "Filter", "Charts"],
      },
      {
        week: 20,
        module: "MS Excel",
        title: "İrəli səviyyə",
        topics: ["Conditional formatting", "Macros"],
      },
    
      // 6. HTML (21–23 həftə) ✅ əlavə edildi
      {
        week: 21,
        module: "HTML",
        title: "HTML əsasları",
        topics: ["HTML nədir", "Tags", "Head və Body"],
      },
      {
        week: 22,
        module: "HTML",
        title: "Struktur elementlər",
        topics: ["Lists", "Tables", "Images"],
      },
      {
        week: 23,
        module: "HTML",
        title: "Formlar",
        topics: ["Form", "Input", "Button"],
      },
    
      // 7. Scratch (24–27 həftə) ✅ genişləndirildi
      {
        week: 24,
        module: "Scratch",
        title: "Vizual proqramlaşdırma",
        topics: ["Alqoritm", "Sprite", "Stage"],
      },
      {
        week: 25,
        module: "Scratch",
        title: "Şərtlər və dövrlər",
        topics: ["If / else", "Loops"],
      },
      {
        week: 26,
        module: "Scratch",
        title: "Oyun mexanikası",
        topics: ["Events", "Collision", "Variables"],
      },
      {
        week: 27,
        module: "Scratch",
        title: "Final layihə",
        topics: ["Oyun və ya animasiya", "Təqdimat"],
      },
    ],
    
  }),
  new Course({
    id: 1005,
    title: "Bialogiya",
    instructor: new Instructor(
      "Ellada Bayramova",
      "Biologiya və təbiət elmləri üzrə müəllim, tutor",
      "Biologiya və təbiət elmləri üzrə sertifikatlı müəllim, 2+ illik müəllimlik və 2+ illik repetitorluq təcrübəsinə malikdir.",
      "/images/tutor_images/elladaBayramova.jpg"
    ),
    description:
      "Canlıların quruluşu, funksiyaları və ekosistemlərlə əlaqələrini dərindən öyrən.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "biology",
    price: 100,
    coverImg: "courses/bio",
    discount: 0,
  }),
  new Course({
    id: 1006,
    title: "Təbiət",
    instructor: new Instructor(
      "Ellada Bayramova",
      "Biologiya və təbiət elmləri üzrə müəllim, tutor",
      "Biologiya və təbiət elmləri üzrə sertifikatlı müəllim, 2+ illik müəllimlik və 2+ illik repetitorluq təcrübəsinə malikdir.",
      "/images/tutor_images/elladaBayramova.jpg"
    ),
    description:
      "Ətraf mühitin qorunması, təbii resurslar və dayanıqlı inkişaf mövzularında biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "nature",
    price: 100,
    coverImg: "courses/tebiet",
    discount: 0,
  }),
  new Course({
    id: 1007,
    title: "Riyaziyyat (7-12)",
    instructor: new Instructor(
      "Ilkin Mustafayev",
      "Riyaziyyat müəllimi",
      "1–12-ci siniflər üzrə sertifikatlı riyaziyyat müəllimi, 3+ illik repetitorluq təcrübəsinə malikdir, 50+ uğurlu tələbə yetişdirmişdir.",
      "/images/tutor_images/ilkinMustafayev.jpg"
    ),
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "math-7-12",
    price: 100,
    coverImg: "courses/riyt7-12",
    discount: 0,
  }),
  new Course({
    id: 1008,
    title: "İdman",
    instructor: new Instructor(
      "Tamila Aslanova",
      "İdman müəllimi",
      "Peşəkar idman müəllimidir. Öz sahəsində uğurlar qazanmış, 10 kredit toplamış və müəllimlik imtahanını uğurla vermişdir.",
      "/images/tutor_images/tamilaAslanova.jpg"
    ),
    description:
      "Şagirdlərin fiziki inkişafı, sağlam həyat tərzi və idman bacarıqlarının formalaşdırılması üçün nəzərdə tutulmuş peşəkar tədris proqramı.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "physical-education",
    price: 100,
    coverImg: "courses/idman",
    discount: 0,
  }),  
  new Course({
    id: 1009,
    title: "Ədəbiyyat",
    instructor: new Instructor(
      "Tamila Aslanova",
      "Ədəbiyyat müəllimi",
      "Peşəkar ədəbiyyat müəllimidir. Şagirdlərə ədəbiyyatın əsas anlayışlarını, mətn təhlilini və imtahanlara effektiv hazırlığı yüksək səviyyədə öyrədir.",
      "/images/tutor_images/tamilaAslanova.jpg"
    ),
    description:
      "Ədəbiyyat fənni üzrə mövzuların sistemli izahı, mətnlərin analizi və şagirdlərin düşünmə bacarıqlarının inkişafı üçün hazırlanmış kurs.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "literature",
    price: 100,
    coverImg: "courses/edebiyyat",
    discount: 0,
  }),
  new Course({
    id: 1010,
    title: "Riyaziyyat (1-6)",
    instructor: new Instructor(
      "Raul Bayramov",
      "Riyaziyyat müəllimi",
      "1–12-ci siniflər üzrə sertifikatlı riyaziyyat müəllimi, 3+ illik repetitorluq təcrübəsinə malikdir, 50+ uğurlu tələbə yetişdirmişdir.",
      "/images/tutor_images/ilkinMustafayev.jpg"
    ),
    tutorName: "Raul Bayramov",
    tutorPhoto: "/images/tutor_images/raulBayramov.jpg",
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Orta",
    category: "teaching-certification",
    subcategory: "math-1-6",
    price: 100,
    coverImg: "courses/riyt16",
    discount: 0,
  }),
  new Course({
    id: 1011,
    title: "Milli İmtahana Hazırlıq - Riyaziyyat",
    instructor: new Instructor(
      "Ilkin Mustafayev",
      "Riyaziyyat müəllimi",
      "1–12-ci siniflər üzrə sertifikatlı riyaziyyat müəllimi, 3+ illik repetitorluq təcrübəsinə malikdir, 50+ uğurlu tələbə yetişdirmişdir.",
      "/images/tutor_images/ilkinMustafayev.jpg"
    ),
    description:
      "Əsas riyazi anlayışlar, funksiyalar və həndəsə mövzularında dərin biliklər əldə et.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "student-exam",
    subcategory: "math",
    price: 80,
    coverImg: "courses/hazirliq-riyt",
    discount:0,
  }),
  new Course({
    id: 1012,
    title: "İbtidai sinif müəllimliyi",
    instructor: new Instructor(
      "Tamila Aslanova",
      "İbtidai sinif müəllimi",
      "Peşəkar ibtidai sinif müəllimidir. Şagirdlərin əsas bilik və bacarıqlarını inkişaf etdirmək, öyrənmə prosesini maraqlı və effektiv etmək üzrə təcrübəlidir.",
      "/images/tutor_images/tamilaAslanova.jpg"
    ),
    description:
      "İbtidai sinif şagirdləri üçün əsas fənnlər üzrə biliklərin sistemli izahı, öyrənməni əyləncəli və effektiv edən metodlarla tədris.",
    startDate: "2025-10-01",
    duration: "26 həftə",
    level: "Başlanğıc",
    category: "teaching-certification",
    subcategory: "primary-education-teaching",
    price: 100,
    coverImg: "courses/ibtidai",
    discount: 0,
  }),
];

export { Course, courses, CATEGORY_LIST, SUBCATEGORY_LIST };
