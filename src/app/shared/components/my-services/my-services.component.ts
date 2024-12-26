import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent {

  constructor(private modalService: ModalService) {}

  openModal(data: any) {
    this.modalService.open();
    this.modalService.setData(data);
  }

  services = [
    {
      title: 'Глибинна VIP консультація по матриці долі',
      price: '100€',
      details: {
        includes: 'Карта здоровʼя та аналіз чакральної системи',
        duration: '1,5 години',
        conditions: 'Умови проведення вказуються індивідуально',
      },
    },
    {
      title: 'Індивідуальна консультація по матриці долі Express',
      price: '70€',
      details: {
        includes: 'Що входить в консультацію уточнюється під час запису',
        duration: '45 хв',
        conditions: 'Умови проведення вказуються індивідуально',
      },
    },
    {
      title: 'Консультація по матриці сумісності пари або партнерів',
      price: '80€',
      details: {
        includes: 'Що входить в консультацію уточнюється під час запису',
        duration: '1 година',
        conditions: 'Умови проведення вказуються індивідуально',
      },
    },
    {
      title: 'Індивідуальна консультація по дитячій матриці долі',
      price: '35€',
      details: {
        includes: 'Що входить в консультацію уточнюється під час запису',
        duration: '45 хв',
        conditions: 'Умови проведення вказуються індивідуально',
      },
    },
    {
      title: 'Глибинна фінансова консультація “Де мої гроші”',
      price: '100€',
      details: {
        includes: 'Що входить в консультацію уточнюється під час запису',
        duration: '1 година',
        conditions: 'Умови проведення вказуються індивідуально',
      },
    },
    {
      title: 'Прогноз на період (дата, місяць, квартал, рік)',
      price: 'Вартість розраховується індивідуально',
      details: {
        includes: 'Що входить в прогноз уточнюється під час запису',
        format: 'Формат проведення вказується індивідуально',
      },
    },
    {
      title: 'Екстрений прогноз на подію (дата, день)',
      price: '10€',
      details: {
        includes: 'Що входить в прогноз уточнюється під час запису',
        format: 'Формат проведення вказується індивідуально',
      },
    },
  ];
}
