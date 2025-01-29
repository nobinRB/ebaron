export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;      // Selling price
  originalPrice: number;  // MRP (Maximum Retail Price)
  stock: number;
  category: string;
  subcategory: string;
  imageUrl: string;  // Main product image
  images?: {        // Optional additional images
    main: string;
    gallery: string[];
  };
  variants: {
    colors?: Array<{
      name: string;
      code: string;
      inStock: boolean;
    }>;
    sizes?: Array<{
      name: string;
      inStock: boolean;
    }>;
  };
  ratings: number;
  reviews: Review[];
}

export interface ColorVariant {
  name: string;
  code: string; // hex color code
  inStock: boolean;
}

export interface SizeVariant {
  name: string;
  value: string;
  inStock: boolean;
}

export interface Review {
  _id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
} 