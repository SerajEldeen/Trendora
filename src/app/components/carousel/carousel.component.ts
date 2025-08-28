import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Slide = {
  id: number;
  image: string;
  title: string;
};

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full overflow-hidden">
      <!-- Slides container -->
      <div
        class="flex transition-transform duration-500"
        [style.transform]="'translateX(-' + currentSlide() * 100 + '%)'"
      >
        <div
          *ngFor="let slide of slides()"
          class="min-w-full h-72 bg-slate-700 flex items-center justify-center"
        >
          <img
            [src]="slide.image"
            [alt]="slide.title"
            class="h-64 object-cover"
          />
        </div>
      </div>
    </div>
  `,
})
export class HomeCarouselComponent implements OnInit {
  slides = signal<Slide[]>([]);
  currentSlide = signal(0);

  ngOnInit() {
    fetch('https://fakestoreapi.com/products?limit=5') // fetch 5 products for carousel
      .then((res) => res.json())
      .then((data: any[]) => {
        const slides = data.map((p) => ({
          id: p.id,
          image: p.image,
          title: p.title,
        }));
        this.slides.set(slides);
      });

    // Auto-slide every 3.5 seconds
    setInterval(() => this.next(), 3500);
  }

  next() {
    const total = this.slides().length;
    this.currentSlide.set((this.currentSlide() + 1) % total);
  }

  prev() {
    const total = this.slides().length;
    this.currentSlide.set((this.currentSlide() - 1 + total) % total);
  }
}
