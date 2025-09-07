class Product {
  constructor({
    id,
    title,
    image,
    images = [],
    rating = 0,
    price,
    description,
    category,
    color,
    brand,
    warranty,
    stock = 0,
    sku,
    specifications = {},
    isAvailable = true,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.images = images;
    this.rating = rating;
    this.price = price;
    this.description = description;
    this.category = category;
    this.color = color;
    this.brand = brand;
    this.warranty = warranty;
    this.stock = stock;
    this.sku = sku;
    this.specifications = specifications;
    this.isAvailable = isAvailable;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // Method to update product details
  updateDetails(details) {
    Object.assign(this, details);
    this.updatedAt = new Date();
  }

  // Method to check if product is in stock
  isInStock() {
    return this.stock > 0 && this.isAvailable;
  }

  // Method to calculate discounted price
  calculateDiscountedPrice(discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
      throw new Error("Discount percentage must be between 0 and 100");
    }
    return this.price * (1 - discountPercentage / 100);
  }
}

class Electronics extends Product {
  constructor({
    powerConsumption,
    dimensions,
    weight,
    modelNumber,
    operatingSystem,
    connectivity = [],
    batteryLife,
    ...productProps
  }) {
    super(productProps);
    this.powerConsumption = powerConsumption;
    this.dimensions = dimensions;
    this.weight = weight;
    this.modelNumber = modelNumber;
    this.operatingSystem = operatingSystem;
    this.connectivity = connectivity;
    this.batteryLife = batteryLife;
  }

  getPowerEfficiency() {
    return this.powerConsumption < 100
      ? "Energy Efficient"
      : "High Power Consumption";
  }

  getBatteryStatus() {
    return this.batteryLife > 8 ? "Long Battery Life" : "Standard Battery Life";
  }
}

class Clothing extends Product {
  constructor({
    size,
    material,
    careInstructions,
    gender,
    season,
    style,
    ...productProps
  }) {
    super(productProps);
    this.size = size;
    this.material = material;
    this.careInstructions = careInstructions;
    this.gender = gender;
    this.season = season;
    this.style = style;
  }

  getSizeGuide() {
    const sizeGuides = {
      XS: "Extra Small",
      S: "Small",
      M: "Medium",
      L: "Large",
      XL: "Extra Large",
      XXL: "Double Extra Large",
    };
    return sizeGuides[this.size] || "Custom Size";
  }

  isSeasonal() {
    return this.season ? true : false;
  }
}

class Books extends Product {
  constructor({
    author,
    isbn,
    publisher,
    publicationDate,
    pageCount,
    language,
    genre,
    format,
    ...productProps
  }) {
    super(productProps);
    this.author = author;
    this.isbn = isbn;
    this.publisher = publisher;
    this.publicationDate = publicationDate;
    this.pageCount = pageCount;
    this.language = language;
    this.genre = genre;
    this.format = format;
  }

  getBookAge() {
    const currentYear = new Date().getFullYear();
    const publishYear = new Date(this.publicationDate).getFullYear();
    return currentYear - publishYear;
  }

  isDigital() {
    return (
      this.format.toLowerCase() === "ebook" ||
      this.format.toLowerCase() === "pdf"
    );
  }
}

class Furniture extends Product {
  constructor({
    dimensions,
    material,
    assemblyRequired,
    weight,
    roomType,
    style,
    colorOptions = [],
    ...productProps
  }) {
    super(productProps);
    this.dimensions = dimensions;
    this.material = material;
    this.assemblyRequired = assemblyRequired;
    this.weight = weight;
    this.roomType = roomType;
    this.style = style;
    this.colorOptions = colorOptions;
  }

  getShippingCategory() {
    return this.weight > 50 ? "Heavy Item" : "Standard Shipping";
  }

  needsAssembly() {
    return this.assemblyRequired;
  }
}

// Example products array
const products = [
  // Electronics examples
  new Electronics({
    id: "E001",
    title: "MacBook Pro 16-inch",
    image: "macbook-pro.jpg",
    images: ["macbook-pro-1.jpg", "macbook-pro-2.jpg"],
    rating: 4.8,
    price: 2499.99,
    description: "Latest MacBook Pro with M2 Pro chip",
    category: "Electronics",
    brand: "Apple",
    warranty: "1 year",
    stock: 50,
    sku: "MBP16-M2-2023",
    powerConsumption: 140,
    dimensions: "14.01 x 9.77 x 0.66 inches",
    weight: 4.7,
    modelNumber: "MBP16-M2",
    operatingSystem: "macOS",
    connectivity: ["Wi-Fi 6", "Bluetooth 5.3", "Thunderbolt 4"],
    batteryLife: 22,
  }),

  new Electronics({
    id: "E002",
    title: "Sony WH-1000XM5",
    image: "sony-headphones.jpg",
    images: ["sony-headphones-1.jpg", "sony-headphones-2.jpg"],
    rating: 4.9,
    price: 399.99,
    description: "Premium noise-cancelling headphones",
    category: "Electronics",
    brand: "Sony",
    warranty: "2 years",
    stock: 100,
    sku: "WH-1000XM5-BLK",
    powerConsumption: 5,
    dimensions: "7.5 x 3.25 x 10 inches",
    weight: 0.55,
    modelNumber: "WH-1000XM5",
    operatingSystem: "Universal",
    connectivity: ["Bluetooth 5.2", "3.5mm jack", "USB-C"],
    batteryLife: 30,
  }),

  // Clothing examples
  new Clothing({
    id: "C001",
    title: "Classic Fit Dress Shirt",
    image: "dress-shirt.jpg",
    images: ["dress-shirt-1.jpg", "dress-shirt-2.jpg"],
    rating: 4.5,
    price: 59.99,
    description: "Premium cotton dress shirt",
    category: "Clothing",
    brand: "Ralph Lauren",
    warranty: "None",
    stock: 200,
    sku: "RL-DS-001",
    size: "L",
    material: "100% Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
    gender: "Men",
    season: "All Seasons",
    style: "Classic",
  }),

  new Clothing({
    id: "C002",
    title: "Summer Floral Dress",
    image: "floral-dress.jpg",
    images: ["floral-dress-1.jpg", "floral-dress-2.jpg"],
    rating: 4.7,
    price: 79.99,
    description: "Light and breezy floral summer dress",
    category: "Clothing",
    brand: "Zara",
    warranty: "None",
    stock: 150,
    sku: "ZR-FD-001",
    size: "M",
    material: "Polyester",
    careInstructions: "Hand wash cold",
    gender: "Women",
    season: "Summer",
    style: "Casual",
  }),

  // Books examples
  new Books({
    id: "B001",
    title: "The Great Gatsby",
    image: "great-gatsby.jpg",
    images: ["great-gatsby-1.jpg", "great-gatsby-2.jpg"],
    rating: 4.6,
    price: 14.99,
    description: "Classic novel by F. Scott Fitzgerald",
    category: "Books",
    brand: "Penguin Classics",
    warranty: "None",
    stock: 75,
    sku: "PG-GG-001",
    author: "F. Scott Fitzgerald",
    isbn: "978-0141182636",
    publisher: "Penguin Books",
    publicationDate: "2000-02-01",
    pageCount: 240,
    language: "English",
    genre: "Fiction",
    format: "Paperback",
  }),

  new Books({
    id: "B002",
    title: "Clean Code",
    image: "clean-code.jpg",
    images: ["clean-code-1.jpg", "clean-code-2.jpg"],
    rating: 4.8,
    price: 39.99,
    description: "A Handbook of Agile Software Craftsmanship",
    category: "Books",
    brand: "Prentice Hall",
    warranty: "None",
    stock: 50,
    sku: "PH-CC-001",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    publisher: "Prentice Hall",
    publicationDate: "2008-08-11",
    pageCount: 464,
    language: "English",
    genre: "Programming",
    format: "Hardcover",
  }),

  // Furniture examples
  new Furniture({
    id: "F001",
    title: "Modern Sofa Set",
    image: "modern-sofa.jpg",
    images: ["modern-sofa-1.jpg", "modern-sofa-2.jpg"],
    rating: 4.7,
    price: 1299.99,
    description: "Contemporary 3-seater sofa with matching armchairs",
    category: "Furniture",
    brand: "IKEA",
    warranty: "5 years",
    stock: 25,
    sku: "IK-SF-001",
    dimensions: "84 x 35 x 31 inches",
    material: "Fabric and Wood",
    assemblyRequired: true,
    weight: 120,
    roomType: "Living Room",
    style: "Modern",
    colorOptions: ["Gray", "Blue", "Beige"],
  }),

  new Furniture({
    id: "F002",
    title: "Ergonomic Office Chair",
    image: "office-chair.jpg",
    images: ["office-chair-1.jpg", "office-chair-2.jpg"],
    rating: 4.6,
    price: 299.99,
    description: "Adjustable ergonomic office chair with lumbar support",
    category: "Furniture",
    brand: "Herman Miller",
    warranty: "12 years",
    stock: 40,
    sku: "HM-OC-001",
    dimensions: "27 x 27 x 45 inches",
    material: "Mesh and Aluminum",
    assemblyRequired: true,
    weight: 45,
    roomType: "Office",
    style: "Ergonomic",
    colorOptions: ["Black", "Gray", "White"],
  }),
];

// Export all classes
export { Product, Electronics, Clothing, Books, Furniture };
export default Product;

// Export the products array
export { products };
