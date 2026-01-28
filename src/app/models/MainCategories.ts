// src/app/models/main-category.model.ts

export interface MainCategoriesResponse {
  success: boolean;
  message: string;
  data: MainCategory[];
}

export interface MainCategory {
  id: number;
  categoryBreadcrum: string;
  categoryDescription: string;
  categoryMetaDescription: string;
  categoryMetaKeyword: string;
  categoryMetaTitle: string;
  categoryName: string;
  erpCode: string;
  showInMenu: boolean;
  status: 'active' | 'inactive';
  urlKey: string;
  position: number;
  images: CategoryImage[];
}

export interface CategoryImage {
  id: number;
  imageUrl: string;
  placeholder: string;
  banner: boolean;
  desktop: boolean;
  mobile: boolean;
  thumbnail: boolean;
}