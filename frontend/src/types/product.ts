import type { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  description: string;
  image_url?: string;
  price: number;
  stock: number;
  category: Category;
};