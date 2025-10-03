import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-popup',
  templateUrl: './news-popup.component.html',
  styleUrls: ['./news-popup.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class NewsPopupComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 80);
  }

  closePopup() {
    this.isVisible = false;
  }

  openPopup() {
    this.isVisible = true;
  }
}
