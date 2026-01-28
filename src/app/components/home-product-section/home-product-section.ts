import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/sampleProduct.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-product-section',
  imports: [CommonModule],
  templateUrl: './home-product-section.html',
  styleUrl: './home-product-section.css',
})
export class HomeProductSection implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = 'All';
  sortBy: string = 'popular';

  categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Sports', 'Beauty', 'Books'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filterProducts();
    });
  }

  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        p => p.category === this.selectedCategory
      );
    }
    this.sortProducts();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  sortProducts() {
    const sorted = [...this.filteredProducts];
    if (this.sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    this.filteredProducts = sorted;
  }

  onSortChange(event: Event) {
    this.sortBy = (event.target as HTMLSelectElement).value;;
    this.sortProducts();
  }
}