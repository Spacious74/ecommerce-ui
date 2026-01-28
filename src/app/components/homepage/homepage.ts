import { Component } from '@angular/core';
import { HomeHeroSection } from '../home-hero-section/home-hero-section';
import { HomeProductSection } from '../home-product-section/home-product-section';
import { HomeFooterSection } from '../home-footer-section/home-footer-section';

@Component({
  selector: 'app-homepage',
  imports: [HomeHeroSection, HomeProductSection, HomeFooterSection],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
