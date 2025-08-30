import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from '../../components/carousel/carousel.component';
import { BestSellerComponent } from '../../components/bestSeller/bestseller.component';
import { CustomerOpinionComponent } from '../../components/customerOpinion/customerOpinion.component';
import { WelcomeSectionComponent } from '../../components/welcomeSection/welcomeSection.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeCarouselComponent,
    BestSellerComponent,
    CustomerOpinionComponent,
    WelcomeSectionComponent,
    FooterComponent,
  ],
  template: `
    <!-- Carousel at the top -->
    <app-home-carousel></app-home-carousel>

    <!-- Welcome Section at the bottom -->
    <app-welcome-section></app-welcome-section>

    <!-- Best Sellers at the bottom -->
    <app-best-seller></app-best-seller>

    <!-- Customer Opinions at the bottom -->
    <app-customer-opinion></app-customer-opinion>

    <!-- Footer at the bottom -->
    <app-footer></app-footer>
  `,
})
export class HomeComponent {}
