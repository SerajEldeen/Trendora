import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeCarouselComponent],
  template: `
    <!-- Carousel at the top -->
    <app-home-carousel></app-home-carousel>
  `,
})
export class AboutComponent {}
