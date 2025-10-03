import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Review {
  text: string;
  author: string;
}

@Component({
  selector: 'app-calendar-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [
    { text: "Календар допоміг спланувати рік і уникнути ризиків у бізнесі. Рекомендую кожному!", author: "Олена" },
    { text: "Я здивований, наскільки точні прогнози. Тепер відчуваю, що дію вчасно.", author: "Іван" },
    { text: "Відмінний інструмент для планування особистого року.", author: "Марія" },
    { text: "Це дуже допомогло організувати бізнес-процеси.", author: "Петро" },
    { text: "Прекрасна подача інформації, легко зрозуміти.", author: "Анастасія" },
    { text: "Рекомендую всім друзям і колегам.", author: "Сергій" },
  ];

  groupedReviews: Review[][] = [];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    touchDrag: false,
    navText: ['‹', '›'],
    items: 1 // по одному "групованому" слайду
  };

  constructor() { }

  ngOnInit(): void {
    this.groupReviews();
  }

  // Групуємо відгуки по 3
  groupReviews(): void {
    for (let i = 0; i < this.reviews.length; i += 3) {
      this.groupedReviews.push(this.reviews.slice(i, i + 3));
    }
  }
}
