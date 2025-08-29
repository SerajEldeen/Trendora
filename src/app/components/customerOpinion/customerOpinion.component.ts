import {
  Component,
  OnInit,
  signal,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type Opinion = {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
};

@Component({
  selector: 'app-customer-opinion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>

      <div class="relative">
        <!-- Scrollable container -->
        <div
          #scrollContainer
          class="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
        >
          <div
            *ngFor="let opinion of opinions()"
            class="flex-none w-80 border rounded-lg p-6 bg-white shadow-md snap-start"
          >
            <div class="flex items-center gap-4 mb-4">
              <img
                *ngIf="opinion.avatar"
                [src]="opinion.avatar"
                alt="{{ opinion.name }}"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 class="font-semibold">{{ opinion.name }}</h3>
                <div class="text-yellow-500">★ {{ opinion.rating }}</div>
              </div>
            </div>
            <p class="text-gray-700 text-sm">{{ opinion.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CustomerOpinionComponent implements OnInit {
  opinions = signal<Opinion[]>([]);
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    // Example static opinions, you can replace with API fetch
    this.opinions.set([
      {
        id: 1,
        name: 'Alice Johnson',
        avatar: 'https://i.pravatar.cc/100?img=1',
        rating: 5,
        comment: 'Amazing products and fast delivery! Highly recommend.',
      },
      {
        id: 2,
        name: 'Michael Smith',
        avatar: 'https://i.pravatar.cc/100?img=2',
        rating: 4,
        comment: 'Great service, I am very satisfied with my purchase.',
      },
      {
        id: 3,
        name: 'Sara Williams',
        avatar: 'https://i.pravatar.cc/100?img=3',
        rating: 5,
        comment: 'Excellent quality, will buy again!',
      },
      {
        id: 4,
        name: 'David Lee',
        avatar: 'https://i.pravatar.cc/100?img=4',
        rating: 4,
        comment: 'Good value for money and fast shipping.',
      },
    ]);
  }

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
