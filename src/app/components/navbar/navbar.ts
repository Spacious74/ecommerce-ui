import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MainCategory } from '../../models/MainCategories';
import { CategoryTree, SubCategory } from '../../models/CategoryTree';
import { PreparedTree } from '../../models/PreparedTree';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  public isMobileMenuOpen: boolean = false;
  public activeMenu: string | null = null;
  public mainCategories: MainCategory[];
  public categoryTree: CategoryTree;
  public preparedTree : PreparedTree[];
  public currentCategory: string = 'men';

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.loadMainCategories()
    this.fetchCategoryTreeData();
  }

  loadMainCategories() {
    this.categoryService.getMainCategories().subscribe({
      next: (res) => {
        this.mainCategories = res.data;
      },
      error: (err) => {
        console.error('Failed to load main categories', err);
      }
    });
  }

  fetchCategoryTreeData() {
    this.categoryService.getCategoryTree(this.currentCategory).subscribe({
      next: (res) => {
        this.categoryTree = res.data;
        // Here I'm building manually a array of subcategories and inside each sub-category 
        // their children array of child-categories are there with matching parent id
        this.preparedTree = this.buildCategoryTree(res.data.subCategory, res.data.childCategory);
      },
      error: (err) => {
        console.error('Failed to load category tree', err);
      }
    });
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  buildCategoryTree(subCategories, childCategories) {
    
    const subWithChildren = subCategories.map(sub => ({
      ...sub,
      children: []
    }));

    
    const subMap = new Map();
    subWithChildren.forEach(sub => {
      subMap.set(sub.id, sub);
    });

    
    childCategories.forEach(child => {
      const parentSub = subMap.get(child.parentId);
      if (parentSub) {
        parentSub.children.push(child);

    
        parentSub.children.sort((a, b) => a.position - b.position);
      }
    
    });

    return subWithChildren;
  }

}
