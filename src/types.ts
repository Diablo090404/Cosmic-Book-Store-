export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  discountPrice?: number;
  cover: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  stock: number;
  isDigital?: boolean;
  isFree?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}
