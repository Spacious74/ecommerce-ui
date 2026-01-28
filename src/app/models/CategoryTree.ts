import { CategoryImage } from "./MainCategories";

export interface CategoryTreeResponse {
  success: boolean;
  message: string;
  data: CategoryTree;
}

export interface CategoryTree {
  id: number;
  categoryName: string;
  subCategory: SubCategory[];
  childCategory: ChildCategory[];
}

export interface SubCategory {
  id: number;
  parentId: number;
  categoryName: string;
  urlKey: string;
  position: number;
  images: any[];
}

export interface ChildCategory {
  id: number;
  parentId: number;
  categoryName: string;
  urlKey: string;
  position: number;
  images?: CategoryImage[];
}