import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      icon: '📱'
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1556821552-9f33c9dba0ad?w=400&h=300&fit=crop',
      icon: '👕'
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      icon: '🏠'
    },
    {
      id: 4,
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
      icon: '⚽'
    },
    {
      id: 5,
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-af407b7b4dae?w=400&h=300&fit=crop',
      icon: '💄'
    },
    {
      id: 6,
      name: 'Books',
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop',
      icon: '📚'
    }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones Pro',
      price: 4999,
      originalPrice: 9999,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 1234,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      price: 599,
      originalPrice: 1299,
      discount: 54,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      rating: 4.2,
      reviews: 856,
      category: 'Fashion'
    },
    {
      id: 3,
      name: 'Stainless Steel Kitchen Set',
      price: 2499,
      originalPrice: 5499,
      discount: 55,
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 2145,
      category: 'Home & Kitchen'
    },
    {
      id: 4,
      name: 'Professional Running Shoes',
      price: 3999,
      originalPrice: 7999,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      rating: 4.6,
      reviews: 1567,
      category: 'Sports'
    },
    {
      id: 5,
      name: 'Face Care Kit',
      price: 1299,
      originalPrice: 2599,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 734,
      category: 'Beauty'
    },
    {
      id: 6,
      name: 'Best Seller Novel Collection',
      price: 399,
      originalPrice: 799,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1520467795206-62e33627e6ce?w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 2987,
      category: 'Books'
    },
    {
      id: 7,
      name: 'Smart Watch Ultra',
      price: 8999,
      originalPrice: 15999,
      discount: 44,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 3456,
      category: 'Electronics'
    },
    {
      id: 8,
      name: 'Denim Jacket Classic',
      price: 1899,
      originalPrice: 3999,
      discount: 53,
      image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=300&h=300&fit=crop',
      rating: 4.3,
      reviews: 1123,
      category: 'Fashion'
    }
  ];

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = this.products.filter(p => p.category === category);
    return of(filtered);
  }
}
