import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule],
  templateUrl: './home-hero-section.html',
  styleUrl: './home-hero-section.css',
})
export class HomeHeroSection implements OnInit {
  
  public currentSlide = 0;

  public slides = [
    {
      title: 'Summer Sale',
      subtitle: 'Up to 70% Off',
      image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=1200&h=400&fit=crop',
      bgColor: '#FFE5E5'
    },
    {
      title: 'New Arrivals',
      subtitle: 'Shop Latest Trends',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&h=400&fit=crop',
      bgColor: '#E5F0FF'
    },
    {
      title: 'Electronics Fest',
      subtitle: 'Mega Discounts',
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=1200&h=400&fit=crop',
      bgColor: '#FFE5E5'
    }
  ];

  ngOnInit() {
    this.autoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
}