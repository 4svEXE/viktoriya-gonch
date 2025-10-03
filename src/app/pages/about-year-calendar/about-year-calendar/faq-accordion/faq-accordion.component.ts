import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss']
})
export class FaqAccordionComponent {
  faqs = [
    {
      question: 'Як отримати календар?',
      answer: 'Після оплати PDF надходить на вашу електронну пошту.'
    },
    {
      question: 'Чи можна друкувати?',
      answer: 'Так, PDF зручний для друку або використання онлайн.'
    },
    {
      question: 'Чи індивідуальний прогноз?',
      answer: 'Так, календар створюється персонально за датою народження.'
    }
  ];
}
